// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require Moongoose
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');
// Creating the databse schema
// The Blueprint
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
// Moongoose promise
mongoose.Promise = global.Promise;
// Setting this schema in our models as 'User'
mongoose.model('User', UserSchema);
// Retrieving this schema from our models , named 'User'
var User = mongoose.model('User');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    // the query to get all users
    User.find({},function(error,users){
      // check if theres any errors while trying to retrieve all the users in the DB
      if(error){
        // if error exsits
        console.log('There is an error while retreiving users');
      }else{
        // no errors
        // console.log('Users:' + users);
        // render a page with the retrieved users or data
        res.render('index',{users:users});
      }
    });

})
// Add User Request
app.post('/users', function(req, res) {
  // This is where we would add the user from req.body to the database.
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new User({name:req.body.name , age: req.body.age});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(error){
    // Check if there are errors during save
    if(error){
      // if there is an Error
      console.log("Something went wrong: ");
    } else { // if theres no errors
      console.log('successfully added a user');
      res.redirect('/');
    }
  })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
