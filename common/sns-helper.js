const AWS = require('aws-sdk')
const SNS = new AWS.SNS({apiVersion: '2010-03-31'})

const EMAIL = process.env.EMAIL

function findExistingSubscription (topicArn, nextToken, cb) {
  const params = {
    TopicArn: topicArn,
    NextToken: nextToken || null
  }
  SNS.listSubscriptionsByTopic(params, (err, data) => {
    if (err) {
      console.log('Error listing subscriptions.', err)
      return cb(err)
    }
    const subscription = data.Subscriptions.filter((sub) => sub.Protocol === 'email' && sub.Endpoint === EMAIL)[0]
    if (!subscription) {
      if (!data.NextToken) {
        cb(null, null) // indicate that no subscription was found
      } else {
        findExistingSubscription(topicArn, data.NextToken, cb) // iterate over next token
      }
    } else {
      cb(null, subscription) // a subscription was found
    }
  })
}

/**
 * Subscribe the specified EMAIL to a topic.
 */
function createSubscription (topicArn, cb) {
  // check to see if a subscription already exists
  findExistingSubscription(topicArn, null, (err, res) => {
    if (err) {
      console.log('Error finding existing subscription.', err)
      return cb(err)
    }
    if (!res) {
      // no subscription, create one
      const params = {
        Protocol: 'email',
        TopicArn: topicArn,
        Endpoint: EMAIL
      }
      SNS.subscribe(params, (subscribeErr) => {
        if (subscribeErr) {
          console.log('Error setting up email subscription.', subscribeErr)
          return cb(subscribeErr)
        }
        // subscription complete
        console.log(`Subscribed ${EMAIL} to ${topicArn}.`)
        cb(null, topicArn)
      })
    } else {
      // subscription already exists, continue
      cb(null, topicArn)
    }
  })
}

/**
 * Create a topic.
 */
exports.createTopic = (topicName, cb) => {
  SNS.createTopic({Name: topicName}, (err, data) => {
    if (err) {
      console.log('Creating topic failed.', err)
      return cb(err)
    }
    const topicArn = data.TopicArn
    console.log(`Created topic: ${topicArn}`)
    console.log('Creating subscriptions.')
    createSubscription(topicArn, (subscribeErr) => {
      if (subscribeErr) {
        return cb(subscribeErr)
      }
      // everything is good
      console.log('Topic setup complete.')
      cb(null, topicArn)
    })
  })
}
