var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
// connect to DB
mongoose.connect('mongodb://localhost/1995_api');

// variable that pints to the path where all models live
var models_path = path.join(__dirname + './../models');

// read all the files inside of models folder and run if it is a JS file
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js')>=0){
    require(models_path + '/' + file);
  }
});
