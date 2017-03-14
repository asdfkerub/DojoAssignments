var mongoose = require('mongoose');
var Quote = mongoose.model('Quotes');

module.exports = {
  add: function(req,res){
    // new quote inside of a variable name quote
    var quote = new Quote({name:req.body.name,quote:req.body.quote});
    // Attempting to save the new quote
    quote.save(function(error,data){
      // check if there are erros while saving
      if(error){
        // if there are errors
        res.render('error',{title:'ERRORS!',errors:quote.errors})
      }else{
        // if no errors
        res.redirect('/quotes');
      }
    });
  },
  show: function(req,res){
    // Query to grab all the quotes in a descending order
    Quote.aggregate({$sort:{createdAt : -1}}).exec(function(error,data){
      //check if theres errors while retrieving the quotes
      if(error){
        // if there are errors
        console.log(error);
        res.render('error',{title:'Error',errors:error});
      }else{
        // if no errors
        res.render('quotes',{title:'Quotes',quotes:data});
      }
    });
  }

}
