var express = require('express');
var app = express();
var config = require('cs-utils/configuration');
var router = require('cs-utils/server/router');
var routes = config.get("routes")

console.log('config.get("port")', config.get("port"));

app.use( express.bodyParser() );

app.use( function( req, res, next ) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.attachRoutes( app, routes );

app.listen( config.get("port") );

module.exports = app;