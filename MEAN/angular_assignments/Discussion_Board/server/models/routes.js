var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// User Blueprint
var UserSchema = mongoose.Schema({
  username: {type:String,required:true},
  password: {type:String,required:true},
  post: {type:Schema.Types.ObjectId, ref:'Post'}
},{timestamps:true});

// Posts Blueprint
var PostSchema = mongoose.Schema({
  title: {type:String},
  message: {type:String},
  category: {type:String},
  creator: {type:Schema.Types.ObjectId, ref:'User'},
  comment: {type:Schema.Types.ObjectId, ref:'Comment'}
},{timestamps:true});

var CommentSchema = mongoose.Schema({
  message: {type:String},
  creator: {type:Schema.Types.ObjectId, ref:'User'},
  post: {type:Schema.Types.ObjectId, ref:'Post'},
  like: {type:Number},
  dislike: {type:Number}
},{timestamps:true});

mongoose.model('User',UserSchema);
mongoose.model('Post',PostSchema);
mongoose.model('Comment',CommentSchema);
