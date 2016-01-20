#Serverless Starter

A boilerplate for new Serverless Projects

##Install

Install using the [Serverless Framework](http://www.serverless.com):
```
serverless project install serverless-starter
```
Go into each project component and install its dependencies via npm:
```
npm install
```
Deploy your functions and endpoints:
```
serverless dash deploy
```

##Includes

This project contains the following:

* **Multi:** A Serverless module with multiple functions each containing a single endpoint
* **Single:** A Serverless module with a single function that uses multiple endpoints.
* **Optimizer Plugin:**  Each function is automatically optimized via the [serverless-optimizer-plugin](https://www.github.com/serverless/serverless-optimizer-plugin)
* **Module Templates:** The "single" module contains a simple example of using Serverless Templates to reduce configuration.
