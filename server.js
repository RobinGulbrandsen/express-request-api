var express = require('express');
var articles = require('./database/articles');
var comments = require('./database/comments');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/articles', function(req, res) {
  res.send(articles);
});

app.get('/api/articles/:id/comments', function(req, res) {
  var results = [];
  var found = false;

  for (var i = 0; i < comments.length; i++) {
    if (comments[i].article + '' === req.params.id) {
      found = true;
      results.push(comments[i]);
    }
  }

  if (!found) {
    return res.sendStatus(404);
  }

  res.send(results);
});

app.listen(8080, function() {
  console.log('Server listening at port 8080');
});