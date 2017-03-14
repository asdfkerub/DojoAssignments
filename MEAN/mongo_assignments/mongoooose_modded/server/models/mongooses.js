var mongoose = require('mongoose');
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
