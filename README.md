#Serverless Starter

A boilerplate for new Serverless Projects

##Install

* Run
```
serverless install serverless-starter
```
* Go into each component and run
```
npm install
```
* Deploy your endpoints with
```
serverless dash deploy
```

##Includes

This project contains the following:

* **Multi:** A Serverless module with multiple functions each containing a single endpoint
* **Single:** A Serverless module with a single function that uses multiple endpoints.
* **Optimizer Plugin:**  Each function is automatically optimized via the [serverless-optimizer-plugin](https://www.github.com/serverless/serverless-optimizer-plugin)
* **Module Templates:** The "single" module contains a simple example of using Serverless Templates to reduce configuration.