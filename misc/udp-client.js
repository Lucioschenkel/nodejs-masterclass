/**
 * Example UDP client
 * Sending a message to a UDP server on port 6000
 */

// Dependencies
const dgram = require('dgram');

// Create the client
const client = dgram.createSocket('udp4');

// Define the message and pull it into a buffer
const msgString = 'This is a message';
const msgBuffer = Buffer.from(msgString);

// Send of the message
client.send(msgBuffer, 6000, 'localhost', function(err) {
  client.close();
});
