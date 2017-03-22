var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');


module.exports = {
  // homepage
  index: function(req,res){
    res.sendStatus(200);
  },
  // register route
  register: function(req,res){
    // bcrypt the password
    var password = bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(8));
    // find if user already exist
    User.find({username:req.body.username},function(err,data){
      if(data.length >=1){
        res.status(400).send("Username already exist");
      }
      var user = new User({username:req.body.username,password:password});
      user.save(function(err,data){
        if(err){
          res.status(400).send("Something went wrong while trying to register a new user");
        }
        res.json(data);
      })
    })
  },
  // login route
  login: function(req,res){
    // check if user is registered
    User.find({username:req.body.username},function(err,data){
      if(data.length < 1){
        res.status(400).send("No user with the username entered");
      }
      // hash the password to compare it with the one on the DB
      var hash = data[0].password;
      if (bcrypt.compareSync(req.body.password,hash)){
        // a match password
        req.session.user_id = data[0]._id;
        console.log("ID session:",req.session.user_id);
        res.json(data);
      }else{
        // not a match password
        res.status(400).send("Password does not match");
      }

    })
  },
  // dashboard route
  dashboard: function(req,res){
    User.findOne({_id:req.session.user_id},function(err,data){
      if(err){
        res.status(400).send("Error trying to retrieve logged in user");
      }
      res.json(data);

    })
  },
  //route for adding post
  addpost: function(req,res){
    // new order that takes in created as a user ID
    var post = new Post({title:req.body.title,message:req.body.message,category:req.body.category,creator:req.session.user_id});
    post.save(function(err,data){
      if(err){
        res.status(400).send("Error while adding a post");
      }
      res.sendStatus(200);
    })
  },
  // get all posts
  getposts : function(req,res){
    Post.find().populate('creator').exec(function(err,data){
      if(err){
        res.status(400).send("No posts found.");
      }
      res.json(data);
    })
  },
  // get single post
  getpost: function(req,res){
    Post.findOne({_id:req.params.id}).populate('creator').populate('comment').exec(function(err,data){
      if(err){
        res.status(400).send('Error tring to get a single post');
      }else{
        res.json(data);
      }
    })
  },
  //adding comment;
  addcomment : function(req,res){
    console.log(req.body);
    var comment = new Comment({message:req.body.message,creator:req.session.user_id,post:req.params.id,});
    console.log(comment);
    comment.save(function(err,data){
      if(err){
        res.status(400).send("Error adding a comment to a post.")
      }else{
        res.sendStatus(200);
      }
    })
  }




}
