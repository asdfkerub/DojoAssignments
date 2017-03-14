var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports = {

  show_all : function(req,res){
    Users.aggregate({$sort:{createdAt:-1}}).exec(function(error,data){
      if(error){
        console.log(error);
      }else{
        res.json(data);
      }
    })
  },
  add_user : function(req,res){
    var user = new Users({name:(req.params.user)});
    user.save(function(error,data){
        if(error){
          console.log("Error while adding a new user "+error);
        }else{
          console.log('Successfully added a user ' + data);
          res.redirect('/');
        }
    });
  },
  remove_user : function(req,res){
    Users.remove({name:(req.params.name)},function(error,data){
      if(error){
        console.log('Error while removing a user ' + error);
      }else{
        console.log('Successfully removed user :' + data);
        res.redirect('/');
      }
    })
  },
  show_user : function(req,res){
    Users.find({name:(req.params.name)},function(error,data){
      if(error){
        console.log('Error while retrieving a user ' + error);
      }else{
        console.log('The user is ' + data);
        res.json(data);
      }
    })
  }

}
