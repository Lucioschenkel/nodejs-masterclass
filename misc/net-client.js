/**
 * Example TCP (NET) Client
 * Connects to port 6000 and sends the word "ping" to server
 */

// Dependencies
const net = require('net');

// Define the message
const outMsg = 'ping';

// Create the client
const client = net.createConnection({'port': 6000}, function() {
  // Send the message
  client.write(outMsg);
});

// When the server writes back, log what is says and exit
client.on('data', function(inBoundMessage) {
  let msgString = inBoundMessage.toString();
  console.log('I wrote '+outMsg+' and they said '+msgString);
  client.end();
});
