/**
 * Example TLS Client
 * Connects to port 6000 and sends the word "ping" to server
 */

// Dependencies
const tls = require('tls');
const fs = require('fs');
const path = require('path');

// Server options
const options = {
  ca: fs.readFileSync(path.join(__dirname, '/../https/cert.pem')) // Only required because we are using a self signed certificate
};

// Define the message
const outMsg = 'ping';

// Create the client
const client = tls.connect(6000, options, function() {
  // Send the message
  client.write(outMsg);
});

// When the server writes back, log what is says and exit
client.on('data', function(inBoundMessage) {
  let msgString = inBoundMessage.toString();
  console.log('I wrote '+outMsg+' and they said '+msgString);
  client.end();
});
