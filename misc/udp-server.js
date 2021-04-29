/**
 * Example UDP Server
 * Creating a UDP datagram server listening on 6000
 */

// Dependencies
const dgram = require('dgram');

// Creating a server
let server = dgram.createSocket('udp4');

server.on('message', function(messageBuffer, sender) {
  // Do something with the message or sender
  let msgString = messageBuffer.toString();
  console.log(msgString);
});

server.bind(6000);