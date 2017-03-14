var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var PostSchema = new mongoose.Schema({
  name: {type:String, required:true, minlength: 4},
  text: {type: String, required:true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
},{timestamps:true});

var CommentSchema = new mongoose.Schema({
  _post:{type:Schema.Types.ObjectId, ref: 'Post'},
  name: {type:String,required:true},
  text: {type:String,required:true}
},{timestamps:true});

mongoose.model('Post',PostSchema);
mongoose.model('Comment',CommentSchema);

var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');


module.exports = function(app,server){
  // Route for root
  app.get('/',function(req,res){
    Post.find().populate('comments').exec(function(error,data){
      console.log(data);
      res.render('index',{messages:data});
    });
  });
  // Route for adding a message
  app.post('/add/message',function(req,res){
    var post = new Post({name:req.body.name,text:req.body.message});
    post.save(function(error,data){
      if(error){
        console.log('ERROR');
        res.render('errors',{errors:post.errors});
      }else{
        console.log('Success');
        res.redirect('/');
      }
    });
  });
  // Route for adding a comment
  app.post('/comment/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
         var comment = new Comment(req.body);
         comment._post = post._id;
         post.comments.push(comment);
         comment.save(function(err){
                 post.save(function(err){
                       if(err) { console.log('Error'); }
                       else { res.redirect('/'); }
                 });
         });
   });
 });

}
