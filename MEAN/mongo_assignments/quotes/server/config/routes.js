// requiring mongoose
var mongoose = require('mongoose');
var Quotes = mongoose.model('Quotes');
var quotes = require('../controllers/quotes.js');

module.exports = function(app){

  // route for root page
  app.get('/',function(req,res){
    res.render('index');
  });

  // route for adding a quotes
  app.post('/quotes',function(req,res){quotes.add(req,res)});

  // Route for /quotes
  app.get('/quotes',function(req,res){quotes.show(req,res)});

}
