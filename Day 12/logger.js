const EventEmitter = require("events");
const emitter = new EventEmitter();
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message + "  " + url);

    // Raising an event
    this.emit("messageLogged", {id:1, url: 'http://'});
  }
}

// module.exports.log = log;
module.exports = Logger;

// module.exports.endPoint = url;
