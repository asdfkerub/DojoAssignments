var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/quotes');

// a variable that points to the path where all the models live
var models_path = path.join(__dirname + './../models');
// read all the files inside of models folder and run if it is a javascript files
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    //require the file(this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
