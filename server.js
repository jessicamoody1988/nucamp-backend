const express = require('express');
const morgan = require('morgan');

// server variables
const hostname = 'localhost';
const port = 3000;

// Returns an express server app 
const app = express();

// This configures morgan to log using the dev ver
app.use(morgan('dev'));

// When the server receives requests in json format, this will handle the parsing
// of the json data into JS properties of the request object
app.use(express.json());

// Set default properties for all routing methods for path /campsites
app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // Next passes control of the app routing to the next relevent routing method after this one
    next();
});

// Endpoint for GET requests for path /campsites
// res.statusCode and res.setHeader is already set by call to app.all
app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
});

// Endpoint for POST requests for path /campsites
app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

// Endpoint for PUT requests for path /campsites
// We are rejecting PUT requests as not-supported 
app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})

// Endpoint for DELETE requests for path /campsites
app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});

// Endpoint for GET requests for path /campsites/:campsiteId
app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

// Endpoint for POST requests for path /campsites/:campsiteId
// We are rejecting POST requests as not-supported
app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

// Endpoint for PUT requests for path /campsites/:campsiteId
app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name} with description: ${req.body.description}`);
});

// Endpoint for DELETE requests for path /campsites/:campsiteId
app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

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