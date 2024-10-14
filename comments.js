// Create Web server
// 1. Create a Web server
// 2. Create a route
// 3. Create a route handler
// 4. Send a response
// Import the http module
// Load the express module
const express = require('express');

// Create a new express application
const app = express();

// Load the comments module
const comments = require('./comments');
const http = require('http');

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});