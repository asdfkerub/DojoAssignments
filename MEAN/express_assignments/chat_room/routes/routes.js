module.exports = function(app,server,user_count,curr_users,messages_list){
  // require socket.io
  var io = require('socket.io').listen(server);
  // route for root url
  app.get('/',function(req,res){
    res.render('index');
  });
  // establishing socket connection
  io.on('connection',function(socket){
    curr_users.push(socket);
    // Socket for a new user;
    socket.on('new_user',function(data){
      var user_info = {
        name : data.user,
        user_num: data.unique_id
      }
      // curr_users.push(user_info);
      // console.log(curr_users);
      socket.broadcast.emit('added_user',{user_info:user_info});
      // Showing all messages
      socket.emit('all_messages',{all_messages:messages_list});
    });
    // Socket for when a new message
    socket.on('sent_message',function(data){
      messages_list.push(data);
      io.emit('received_message',{message_info:data});
    });

    //DISCONNECT
    socket.on('disconnect',function(){
      socket.broadcast.emit('someone_disc',{disc_mssg:'Someone disconnected from the chat.'});
      var i = curr_users.indexOf(socket);
      curr_users.splice(i,1);
    })

  });


}
