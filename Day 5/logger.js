var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message+ '  ' + url);
}

module.exports = log;
// module.exports.endPoint = url;