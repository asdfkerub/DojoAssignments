var mongoose = require('mongoose');
var Mongos = mongoose.model('Mongo');
var mongos = require('../controllers/mongooses.js');

module.exports = function(app){
  app.get('/',function(req,res){mongos.show_all(req,res)});
  // Route for new mongoose page
  app.get('/mongoose/new',function(req,res){res.render('new');});
  // Route for processing new mongoose
  app.post('/mongoose',function(req,res){mongos.add(req,res)});
  // Route for a single mongoose
  app.get('/mongooses/:id',function(req,res){mongos.show(req,res)});
  // Route to edit a mongoose
  app.get('/mongoose/edit/:id',function(req,res){mongos.edit_find(req,res)});
  // Route for processing editted mongoose
  app.post('/mongoose/:id',function(req,res){mongos.edit_save(req,res)});
  // Route for deleting a mongoose
  app.post('/mongoose/destory/:id',function(req,res){mongos.remove(req,res)});
}
