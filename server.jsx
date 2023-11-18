var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/journalModel'), //created model loading here
  bodyParser = require('body-parser');
https = require("https");
fs = require("fs");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/journalapi?retryWrites=true&w=majority');

app.use(express.static('front'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Replace with the appropriate origin(s)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


var routes = require('./api/routes/journalRoutes'); //importing route
routes(app); //register the route


app.
  listen(port, 'localhost', () => {
    console.log(`API Server is running on port ${port}`);
  });