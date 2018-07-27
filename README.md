# serverless-node-button-dynamo-sns
IoT button data is stored into dynamoDB and published to SNS

## Use-cases
- press IoT button 
- trigger Lambda which sends SNS push
- store the IoT data into DynamoDB

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
- AWS IoT
![image](https://user-images.githubusercontent.com/9853714/43302303-a92693cc-91a4-11e8-9667-b26ec5402b6d.png)
- DynamoDB
![image](https://user-images.githubusercontent.com/9853714/43302323-e50091e0-91a4-11e8-9b88-b146b98fa72a.png)
- Lambda
![image](https://user-images.githubusercontent.com/9853714/43302339-0440147c-91a5-11e8-87fb-de49619717ff.png)
