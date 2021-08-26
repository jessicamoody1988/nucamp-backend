const express = require('express');

// Setup a new express router 
const campsiteRouter = express.Router();

// Path is set in server.js
campsiteRouter.route('/')

// Set default properties for all routing methods for path /campsites
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // Next passes control of the app routing to the next relevent routing method after this one
    next();
})

// Endpoint for GET requests for path /campsites
// res.statusCode and res.setHeader is already set by call to app.all
.get((req, res) => {
    res.end('Will send all the campsites to you');
})

// Endpoint for POST requests for path /campsites
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})

// Endpoint for PUT requests for path /campsites
// We are rejecting PUT requests as not-supported 
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})

// Endpoint for DELETE requests for path /campsites
.delete((req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;