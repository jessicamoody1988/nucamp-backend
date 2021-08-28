const express = require('express');

const partnerRouter = express.Router();

// Path is passed in from server.js
partnerRouter.route('/')

// Set default properties for all routing methods for path /partners
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

// Endpoint for GET requests for path /partners
// res.statusCode and res.setHeader is already set by call to app.all
.get((req, res) => {
    res.end('Will send all the partners to you');
})

// Endpoint for POST requests for path /partners
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})

// Endpoint for PUT requests for path /partners
// We are rejecting PUT requests as not-supported 
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})

// Endpoint for DELETE requests for path /partners
.delete((req, res) => {
    res.end('Deleting all partners');
});

partnerRouter.route('/:partnerId')

// Set default properties for all routing methods for path /partners/:partnerId
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

// Endpoint for GET requests for path /partners/:partnerId
.get((req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
})

// Endpoint for POST requests for path /partners/:partnerId
// We are rejecting POST requests as not-supported
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partnerId}`);
})

// Endpoint for PUT requests for path /partners/:partnerId
.put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`);
    res.end(`Will update the partner: ${req.body.name} with description: ${req.body.description}`);
})

// Endpoint for DELETE requests for path /partners/:partnerId
.delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`);
});

module.exports = partnerRouter;