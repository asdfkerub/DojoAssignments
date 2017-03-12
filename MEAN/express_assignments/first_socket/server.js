var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname , '/static')));

app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
  res.render('index');
});

// order matters!!!!!! server - io - io.sockets.on
// FIRST
var server = app.listen(8000,function(){
  console.log('PORT: 8000');
})
// SECOND
var io = require('socket.io').listen(server);
// THIRD
// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  // console.log("WE ARE USING SOCKETS!");
  // console.log(socket.id);
  //all the socket code goes in here!
  socket.on('button_clicked-this-needs-to-match',function(data){
    console.log("Someone clicked a button! Reason:" + data.reason);
    socket.emit('server_response-this-needs-to-match',{response:"Sockets are the best"});
  });
  socket.on('test_broadcast',function(data){
    console.log('Client side request because:' + data.reason);
    socket.broadcast.emit('broadcast_response',{response:'the broadcast response'});
  })
  socket.on('full_broadcast_test',function(data){
    console.log('Full Broadcast! : ' + data.reason);
    io.emit('full_broadcast_res',{response:'server response for full broadcast'});
  })

})

// AN EXAMPLE OF ALL THE THREE KINDS OF EMITS
// io.sockets.on('connection', function (socket) {
//     //  EMIT:
//     socket.emit('my_emit_event');
//     //  BROADCAST:
//     socket.broadcast.emit("my_broadcast_event");
//     //  FULL BROADCAST:
//     io.emit("my_full_broadcast_event");
// })
