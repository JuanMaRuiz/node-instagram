// Grab express
var express = require('express');

// Create an express app
var app = express();


console.log(__dirname);
// Create an express route for the home page http://localhost:8080/
app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname
  });
});

// Start the server on port 8080
app.listen(8080);
// Send message
console.log('Server has started!!');