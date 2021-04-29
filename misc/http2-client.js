/**
 * Example HTTP2 Client
 */

// Dependencies
const http2 = require('http2');

// Create client
const client = http2.connect('http://localhost:6000');

// Create a request
const req = client.request({
  ':path': '/'
});

// When a message is received, add the pieces of it together until you react the end
let str = '';
req.on('data', function(chunk) {
  str += chunk;
});

req.on('end', function() {
  console.log(str);
});

// End the request
req.end();