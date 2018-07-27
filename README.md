# serverless-node-button-dynamo-sns
IoT button data is stored into dynamoDB and published to SNS

## Use-cases
- press IoT button 
- trigger Lambda which sends SNS push, and store the IoT data into DynamoDB

## Setup
https://serverless.com/framework/docs/providers/aws/guide/installation/
install
```bash
$ npm install -g serverless
```

```bash
sls deploy
```

The result should be similar to :
```bash
Serverless: Bundling with Webpack...
Time: 88ms
     Asset     Size  Chunks             Chunk Names
handler.js  6.95 kB       0  [emitted]  handler
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading service .zip file to S3 (2.62 KB)...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............
Serverless: Stack update finished...
Service Information
service: r1-core
stage: prod
region: ap-northeast-2
api keys:
  None
endpoints:
  POST - https://mqrmz8ukpg.execute-api.ap-northeast-2.amazonaws.com/prod/test
functions:
  pubSNS: r1-core-prod-pubSNS
```

##Usage


