var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + "/static")));
app.set('views', path.join(__dirname + "/views"));
app.set('view engine','ejs');

var server = app.listen(port,function(){
  console.log('PORT:',port);
})
var route = require("./routes/routes.js")(app,server);
