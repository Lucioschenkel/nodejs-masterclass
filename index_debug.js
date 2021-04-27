/**
 * Primary file for the API
 * 
 */

// Dependencies
const server = require('./lib/server');
const workers = require('./lib/workers');
const cli = require('./lib/cli');
const exampleDebuggingProblem = require('./lib/exampleDebuggingProblem');

// Declare the app
const app = {};

// Initialization function
app.init = function() {
  // Start the server
  debugger;
  server.init();
  debugger;

  // Start the workers
  debugger;
  workers.init();
  debugger;

  // Start the CLI, but make sure it starts last
  debugger;
  setTimeout(function(){
    cli.init();
  }, 50);
  debugger;

  // Set foo at 1
  debugger;
  let foo = 1;
  console.log('Assigned 1 to foo');
  debugger;

  // Increment foo
  foo++;
  console.log('Incremented foo');
  debugger;

  // Square foo
  foo = foo * foo;
  console.log('Squared foo');
  debugger;

  // convert foo to a string
  foo = foo.toString();
  console.log('Converted foo');
  debugger;

  // Call the init script that will throw
  exampleDebuggingProblem.init();
};

// Execute
app.init();

// Export the app
module.exports = app;
