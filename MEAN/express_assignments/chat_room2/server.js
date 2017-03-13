var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname + '/static')));
app.use(bodyParser.urlencoded());
app.set('views' , path.join(__dirname + '/views'));
app.set('view engine','ejs');

var server = app.listen(3000,function(){
  console.log('PORT: 3000');
});

var route = require('./routes/routes.js')(app,server);
