// Create web server
// Run: node comments.js
// Test: curl -X POST -d "comment=Hello" localhost:3000
// Test: curl -X GET localhost:3000
// Test: curl -X DELETE localhost:3000/0

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const comments = [];

app.post('/', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.send('Comment added successfully');
});

app.get('/', (req, res) => {
  res.json(comments);
});

app.delete('/:index', (req, res) => {
  const index = req.params.index;
  comments.splice(index, 1);
  res.send('Comment deleted successfully');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});