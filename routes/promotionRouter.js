const express = require('express');

const promotionRouter = express.Router();

// Path is passed in from server.js
promotionRouter.route('/')

// Set default properties for all routing methods for path /campsites
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // Next passes control of the app routing to the next relevent routing method after this one
    next();
})

// Endpoint for GET requests for path /promotions
// res.statusCode and res.setHeader is already set by call to app.all
.get((req, res) => {
    res.end('Will send all the promotions to you');
})

// Endpoint for POST requests for path /promotions
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})

// Endpoint for PUT requests for path /promotions
// We are rejecting PUT requests as not-supported 
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})

// Endpoint for DELETE requests for path /promotions
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')

// Set default properties for all routing methods for path /promotions/:promotionId
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

// Endpoint for GET requests for path /promotions/:promotionId
.get((req, res) => {
    res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
})

// Endpoint for POST requests for path /promotions/:promotionId
// We are rejecting POST requests as not-supported
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
})

// Endpoint for PUT requests for path /promotions/:promotionId
.put((req, res) => {
    res.write(`Updating the promotion: ${req.params.promotionId}\n`);
    res.end(`Will update the promotion: ${req.body.name} with description: ${req.body.description}`);
})

// Endpoint for DELETE requests for path /promotions/:promotionId
.delete((req, res) => {
    res.end(`Deleting promotion: ${req.params.promotionId}`);
});

module.exports = promotionRouter;