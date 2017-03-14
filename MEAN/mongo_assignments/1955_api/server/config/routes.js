var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var users = require('../controllers/api.js');

module.exports = function(app){

  app.get('/',function(req,res){users.show_all(req,res)});
  app.get('/new/:user',function(req,res){users.add_user(req,res)});
  app.get('/remove/:name',function(req,res){users.remove_user(req,res)});
  app.get('/:name',function(req,res){users.show_user(req,res)});

}
