const express = require('express');
const morgan = require('morgan');

// server variables
const hostname = 'localhost';
const port = 3000;

// Returns an express server app 
const app = express();

// This configures morgan to log using the dev ver
app.use(morgan('dev'));

// Setup express to serve files from the public folder 
app.use(express.static(__dirname + '/public'));

// Respond to server requests
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1>/</body></html>');
});

// Start listening to the server
// Creates both an instance of the HTTP Server class and starts to listen to it
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});