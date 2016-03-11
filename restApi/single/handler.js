'use strict';

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 */

// Require Logic
var lib = require('../lib');

// Lambda Handler
module.exports.handler = function(event, context) {

  lib.singleAll(event, function(error, response) {
    return context.done(error, response);
  });
};