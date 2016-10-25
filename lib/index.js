/**
 * Lib
 */

// Single - All
module.exports.singleAll = (event, callback) => {
  var response = 'Your Serverless function ran successfully via the \''
    + event.httpMethod
    + '\' method!';
 
  return callback(null, response);
};

// Multi - Create
module.exports.multiCreate = (event, callback) => {
  var response = 'Your Serverless function \'multi/create\' ran successfully!';

  return callback(null, response);
};

// Multi - Show
module.exports.multiShow = (event, callback) => {
  var response = 'Your Serverless function \'multi/show\' ran successfully with the following ID \'' + event.pathParameters.id + '\'!';

  return callback(null, response);
};

// AWS Lambda Proxy Response
module.exports.lambdaProxyResponse = (code, body) => {
  const response = {
    statusCode: code,
    body: JSON.stringify(body),
  };

  return response;
};