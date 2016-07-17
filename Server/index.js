var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();


app.use( bodyParser.urlencoded ({extended:true}) );
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname,'../App/dist')));

require('./routes')(app);

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Listening on port -> " + port);
