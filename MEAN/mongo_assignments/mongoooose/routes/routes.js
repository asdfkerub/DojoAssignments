// Requiring mongoose
var mongoose = require('mongoose');
// Connect/Create a database called mongooses
mongoose.connect('mongodb://localhost/mongooses');
// Creaing the blueprint
var mongooseSchema = new mongoose.Schema({
  name:{type:String,required:true},
  height:{type:Number,required:true},
  weight:{type:Number,required:true}
},{timestamps:true});
// Mongo Promise
mongoose.Promise = global.Promise;
// mongooseSchema as mongos
mongoose.model('Mongo',mongooseSchema);
var Mongos = mongoose.model('Mongo');


module.exports = function(app,server){

  // Route for root
  app.get('/',function(req,res){
    Mongos.aggregate({$sort:{createdAt: -1}}).exec(function(error,data){
      if(error){
        res.render('error',{errors:error.errors});
      }else{
        res.render('index',{mongos:data});
      }
    });
  });
  // Route for new mongoose page
  app.get('/mongoose/new',function(req,res){
    res.render('new');
  });
  // Route for processing new mongoose
  app.post('/mongoose',function(req,res){
    var mongo = new Mongos({name:req.body.name,height:req.body.height,weight:req.body.weight});
    // Saving to a mongo
    mongo.save(function(error,data){
      if(error){
        res.render('error',{errors:error.errors});
      }else{
        res.redirect('/');
      }
    });
  });
  // Route for a single mongoose
  app.get('/mongooses/:id',function(req,res){
    Mongos.find({_id:(req.params.id)},function(error,data){
      if(error){
        console.log(error);
        res.render('error',{errors:error.errors});
      }else{
        console.log(data);
        res.render('mongoose',{mongo:data});
      }
    });
  });
  // Route to edit a mongoose
  app.get('/mongoose/edit/:id',function(req,res){
    Mongos.find({_id:(req.params.id)},function(error,data){
      if(error){
        res.render('error',{errors:error.message});
      }else{
        res.render('edit',{mongos:data});
      }
    });
  });
  // Route for processing editted mongoose
  app.post('/mongoose/:id',function(req,res){
    Mongos.update({_id:(req.params.id)},{$set:{name:req.body.name,weight:req.body.weight,height:req.body.height}}).exec(function(error,data){
      if(error){
        res.render('error',{errors:error.message});
      }else{
        res.redirect('/');
      }
    });
  });
  // Route for deleting a mongoose
  app.post('/mongoose/destory/:id',function(req,res){
    Mongos.remove({_id:(req.params.id)},function(error,data){
      if(error){
        res.render('error',{errors:error.message});
      }else{
        res.redirect('/');
      }
    });
  });

// closing module export tag
}
