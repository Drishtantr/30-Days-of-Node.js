let url = "http://mylogger.io/log";

function log(message) {
    //Send an HTTP request
    console.log(message);
}

module.exports.log = log;
// module.exports.url = url;
// module.exports.anotherName = url;