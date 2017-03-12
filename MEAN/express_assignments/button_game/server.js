var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + '/static')));
app.set('views',path.join(__dirname + '/views'));
app.set('view engine','ejs');

var server = app.listen(3000,function(){
  console.log('PORT: 3000');
})
var count = 0;
var route = require('./routes/index.js')(app,server,count);
