#Serverless Starter

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

A bare bones Serverless Framework project with examples for common use cases.

This project contains the following:

* **Single:** A single function that uses multiple endpoints.
* **Multi:** Multiple functions each containing a single endpoint.
* **REST API Parameters:** The Multi/Show function endpoint gives an example of how to accept a path parameter.

##Prerequisites

- [Serverless Framework v1.0+](https://serverless.com/)
- [Nodejs v4.3+](https://nodejs.org/)
- [Setup your AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

##Installation

Clone the project from GitHub:
```
git clone https://github.com/serverless/serverless-starter.git
```

Enter the newly created folder:
```
cd serverless-starter
```

Deploy your functions and endpoints:
```
serverless deploy
```

##Testing with Curl

Use the following commands to test your newly created endpoints.

Note: You must replace the URLs in the examples below with those which are displayed after deploying. You can use the `serverless info` command to display the URLs if they are no longer on your screen.

Call the "single" endpoint using the GET method.
```
curl -X GET https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/single
```

Call the "single" endpoint using the POST method.
```
curl -X POST https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/single
```

Call the "multi/create" endpoint using the GET method.
```
curl -X GET https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/multi/create
```

Call the "multi/show" endpoint using the GET method and specifying an id path parameter of "42".
```
curl -X GET https://XXXXXXXXXX.execute-api.us-east-1.amazonaws.com/dev/multi/show/42
```

##Removal

Once you're all done with the serverless-starter project, use the following command to remove the project from AWS completely.

```
serverless remove
```