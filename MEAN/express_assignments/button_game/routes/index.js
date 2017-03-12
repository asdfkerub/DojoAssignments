module.exports = function(app,server,count){
  var io = require('socket.io').listen(server);
  app.get('/',function(req,res){
    res.render('index');
  })
  io.sockets.on('connection', function(socket){
    socket.on('initial_click',function(){
      count++;
      io.emit('send_count',{total_count:count});
    })
    socket.on('reset_count',function(){
      count = 0;
      io.emit('send_count',{total_count:count});
    });
  })

}
