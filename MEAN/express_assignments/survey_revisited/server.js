var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '/static')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

var route = require('./routes/routes.js')(app);

var server = app.listen(3000,function(){
  console.log('PORT: 3000');
})
var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){

  socket.on('user_info',function(data){
    console.log(data.user_info);
    var user_info = data.user_info;
    var random = Math.floor((Math.random()*1000)+1);
    socket.emit('user_response',{response:user_info,num:random});
  })



})
