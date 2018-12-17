var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('../webpack.config');
var prodConfig = require('../webpack.config.prod');
var path = require('path');

//TODO - set this back to actual env check
var isProduction = process.env.NODE_ENV === 'production';

var app = express();

let compiler

if(!isProduction){
console.log('isProduction', isProduction);
 //allows webpack rebuilds on server restarts
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use( bodyParser.urlencoded ({extended:true}) );
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../App/dist')));


require('./routes')(app);

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Listening on port -> " + port);

