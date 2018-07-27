const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.putItem = (table, json) => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: table,
      Item: json
    }

    console.log('dynamoDb.put params', params)
    dynamoDb.put(params, (error, result) => {
      console.log(error, result)
      if (error) reject(error)
      else resolve({})
    })
  })
}