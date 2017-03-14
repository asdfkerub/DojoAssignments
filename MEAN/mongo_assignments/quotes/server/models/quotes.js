var mongoose = require('mongoose');

// Creating the blueprint
var quoteSchema = new mongoose.Schema({
  name: {type: String,required:true,minlength:2},
  quote: {type:String,required:true,minlength:2,maxlength:30}
},{timestamps:true});

// Promise for mongoose
mongoose.Promise = global.Promise;
// setting the quoteSchema as Quotes
mongoose.model('Quotes',quoteSchema);

//register the schema as a model
var Quote = mongoose.model('Quote', quoteSchema);
