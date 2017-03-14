var mongoose = require('mongoose');

// Creating the blueprint
var UserSchema = new mongoose.Schema({
  name: {type: String},
},{timestamps:true});
//Promise for mongoose
mongoose.Promise = global.Promise;
// setting the UserSchema as Users
mongoose.model('Users',UserSchema);
//register the schema as a model
var User = mongoose.model('Users',UserSchema);
