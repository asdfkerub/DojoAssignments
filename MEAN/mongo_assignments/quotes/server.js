var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname + './client/static')));
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname + '/client/views'));
app.set('view engine' , 'ejs');

require('./server/config/mongoose.js');

var server = app.listen(3000,function(){
  console.log('PORT: 3000');
})
// require('./server/config/routes.js')(app);
var route = require('./server/config/routes.js')(app);
