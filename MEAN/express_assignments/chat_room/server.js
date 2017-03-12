var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var app = express();
app.use(session({secret:'keepitshhh'}));
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname + '/static')));
app.set('views',path.join(__dirname + '/views'));
app.set('view engine','ejs');

var server = app.listen(3000,function(){
  console.log('PORT: 3000');
})
var user_count = 0;
var curr_users = [];
var messages_list = [];
var route = require('./routes/routes.js')(app,server,user_count,curr_users,messages_list);
