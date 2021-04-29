/**
 * Example TCP (Net) Server
 * Listens to port 6000 and sends the word "pong" to clients
 */

// Dependencies
const net = require('net');

// Create the server
const server = net.createServer(function(connection) {
  // Send the word "pong"
  const outMsg = "pong";
  connection.write(outMsg);

  // When the client writes something, log it out
  connection.on('data', function(inBoundMessage) {
    const messageStr = inBoundMessage.toString();
    console.log('I wrote '+outMsg+' and they said '+messageStr);
  });
});

// Listen
server.listen(6000);
