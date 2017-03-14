// requiring mongoose
var mongoose = require('mongoose');
// Connect mongoose to db called quotes
mongoose.connect('mongodb://localhost/quotes');
// Creating the blueprint
var quoteSchema = new mongoose.Schema({
  name: {type: String,required:true,minlength:2},
  quote: {type:String,required:true,minlength:2,maxlength:30}
},{timestamps:true});
// Promise for mongoose
mongoose.Promise = global.Promise;
// setting the quoteSchema as Quotes
mongoose.model('Quotes',quoteSchema);
var Quotes = mongoose.model('Quotes');

// routes
module.exports = function(app,server){

  // route for root page
  app.get('/',function(req,res){
    res.render('index');
  });

  // route for adding a quotes
  app.post('/quotes',function(req,res){
    // new quote inside of a variable name quote
    var quote = new Quotes({name:req.body.name,quote:req.body.quote});
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
  })

  // Route for /quotes
  app.get('/quotes',function(req,res){
    // Query to grab all the quotes in a descending order
    Quotes.aggregate({$sort:{createdAt : -1}}).exec(function(error,data){
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
  });
// closing tag for routes function
}
