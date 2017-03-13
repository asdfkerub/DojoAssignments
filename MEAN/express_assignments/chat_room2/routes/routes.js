var users = [];
var messages = [];


// function to track if user already exist in users array
var is_user = function(user){
  var users_count = users.length;
  for(var i = 0; i < users_count; i++){
    if (user == users[i]){
      return true;
    }
  }
  return false;
}

module.exports = function(app,server){

  var io = require('socket.io').listen(server);
  // socket listening to connections
  io.on('connection',function(socket){

    socket.on('page_load',function(data){
        if(is_user(data.user) === true){
          socket.emit("existing_user",{error:'This user already exists'})
        }else{
          users.push(data.user);
          socket.emit('load_messages',{current_user: data.user,messages:messages});
        }
      });

      socket.on('new_message',function(data){
        messages.push({name: data.user,message:data.message});
        io.emit("post_new_message",{new_message:data.message,user:data.user});
      })
      



    });


  //render index.ejs
  app.get('/',function(request,response){
      response.render('index');
  });


};