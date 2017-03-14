var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + "./client/static")));
app.set('views', path.join(__dirname + "/clients/views"));
app.set('view engine','ejs');

require('./server/config/mongoose.js');

var server = app.listen(port,function(){
  console.log('PORT:',port);
})
var route = require("./server/config/routes.js")(app);
