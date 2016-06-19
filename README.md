#Serverless Starter

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

A bare bones Serverless Framework project with examples for common use cases.

##Install

Make sure you have the [Serverless Framework](http://www.serverless.com) installed and you're using Node.js v4.0+. 
```
npm install serverless -g
```

Install the project using Serverless:
```
serverless project install serverless-starter
```

Install project dependencies via npm:
```
npm install
```

Deploy your functions and endpoints:
```
serverless dash deploy
```

##Includes

This project contains the following:

* **Multi:** Multiple functions each containing a single endpoint
* **Single:** A single function that uses multiple endpoints.
* **Optimizer Plugin:**  Each function is automatically optimized via the [serverless-optimizer-plugin](https://www.github.com/serverless/serverless-optimizer-plugin)
* **Templates:** Templates are used to reduce configuration syntax
* **REST API Parameters:** The Multi/Show function endpoint gives an example of how to accept a path parameter

##Alternative Install

If issues arise during installation, the steps below can be taken to install the project and initialize it.

Open a command line terminal and `cd` to the location where you will be placing the serverless-starter project.

Clone the project directly from Github:
```
git clone https://github.com/serverless/serverless-starter.git
```

Enter the serverless-starter folder that was just created:
```
cd serverless-starter
```

Install all npm dependencies:
```
npm install
```

Initialize the project:
```
serverless project init
```

Deploy your functions and endpoints:
```
serverless dash deploy
```
