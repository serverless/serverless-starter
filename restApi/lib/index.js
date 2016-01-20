/**
 * Lib
 */

module.exports.singleAll = function(event, cb) {

  var response = {
    message: 'Your Serverless function ran successfully via the '
    + event.httpMethod
    + ' method!'
  };

  return cb(null, response);
};