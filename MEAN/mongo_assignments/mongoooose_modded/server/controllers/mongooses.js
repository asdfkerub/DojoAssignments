var mongoose = require('mongoose');
var Mongos = mongoose.model('Mongo');

module.exports = {
  show_all : function(req,res){
    Mongos.aggregate({$sort:{createdAt: -1}}).exec(function(error,data){
      if(error){
        res.render('error',{errors:error.errors});
      }else{
        res.render('index',{mongos:data});
      }
    });
  },
  add : function(req,res){
    var mongo = new Mongos({name:req.body.name,height:req.body.height,weight:req.body.weight});
    // Saving to a mongo
    mongo.save(function(error,data){
      if(error){
        res.render('error',{errors:error.errors});
      }else{
        res.redirect('/');
      }
    });
  },
  show : function(req,res){
    Mongos.find({_id:(req.params.id)},function(error,data){
      if(error){
        console.log(error);
        res.render('error',{errors:error.errors});
      }else{
        console.log(data);
        res.render('mongoose',{mongo:data});
      }
    });
  },
  edit_find : function(req,res){
    Mongos.find({_id:(req.params.id)},function(error,data){
      if(error){
        res.render('error',{errors:error.message});
      }else{
        res.render('edit',{mongos:data});
      }
    });
  },
  edit_save : function(req,res){
    Mongos.update({_id:(req.params.id)},{$set:{name:req.body.name,weight:req.body.weight,height:req.body.height}}).exec(function(error,data){
      if(error){
        res.render('error',{errors:error.message});
      }else{
        res.redirect('/');
      }
    });
  },
  remove : function(req,res){
    Mongos.remove({_id:(req.params.id)},function(error,data){
      if(error){
        res.render('error',{errors:error.message});
      }else{
        res.redirect('/');
      }
    });
  }
}
