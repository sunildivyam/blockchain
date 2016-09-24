var express = require('express');
var app = express();
var path = require('path');
var apiRouter = require('./api/apiRouter');

// All API Routes
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'public')));

// viewed at http://localhost:8080 | Web Application Route
app.all("/*", function(req, res, next) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server = app.listen(8080, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Block Chain is listening at %s:%s", host, port)

});