// Create Web server
var express = require('express');
var app = express();
app.listen(3000);
// Create route
app.get('/comments', function(req, res) {
  res.send('This is a page for comments');
});
