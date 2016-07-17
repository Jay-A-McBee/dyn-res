var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var config = require('../webpack.config');
var prodConfig = require('../webpack.config.prod')

var compiler = process.env.NODE_ENV === 'production' ?
 webpack(prodConfig) : webpack(config);

var app = express();


app.use( bodyParser.urlencoded ({extended:true}) );
app.use(bodyParser.json());

app.use(express.static('../App'));

require('./routes')(app);

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Listening on port -> " + port);
