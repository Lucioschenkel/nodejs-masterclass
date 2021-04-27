/**
 * Primary file for the API
 * 
 */

// Dependencies
const server = require('./lib/server');
const workers = require('./lib/workers');
const cli = require('./lib/cli');
const cluster = require('cluster');
const os = require('os');


// Declare the app
const app = {};

// Initialization function
app.init = function(callback) {

  // If we are on the master thread, start the workers and the CLI
  if (cluster.isMaster) {
    // Start the workers
    workers.init();
  
    // Start the CLI, but make sure it starts last
    setTimeout(function(){
      cli.init();
      callback();
    }, 50);

    // Fork the process
    for(let k = 0; k < os.cpus().length; k++) {
      cluster.fork();
    }

  } else {
    // If we are not on the master thread, start the server
    server.init();
  }

};

// Self invoking only if required directly
if (require.main === module) {
  app.init(function() {});
}

// Export the app
module.exports = app;
