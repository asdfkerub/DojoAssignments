var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(express.static(path.join(__dirname + './client/static')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views',path.join(__dirname + '/client/views'));

// require mongoose in config
require('./server/config/mongoose.js');

var server = app.listen(port,function(){
  console.log('PORT: ',port);
})
// require the config routes file
var route = require('./server/config/routes.js')(app);
