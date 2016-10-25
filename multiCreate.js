'use strict';

// Require Logic
var lib = require('lib');

// Lambda Handler
module.exports.handler = function(event, context) {
  lib.multiCreate(event, function(error, response) {
    return context.succeed(lib.lambdaProxyResponse(200, response));
  });
};