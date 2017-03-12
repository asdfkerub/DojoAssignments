// REQUIRES FOR THIS PROJECT
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// APP USES
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');

//ROUTES
// app.get('/',function(req,res){
//   res.render('index',{title:'asdf'});
// })
app.get('/home',function(request,response){
  response.render('index',{title:'My express Project'});
  // console.log(__dirname);
})
app.post('/result',function(request,response){
  var person = {name : request.body.name,location:request.body.location,lang:request.body.lang};
  response.render('results',{person:person});
});



app.listen(8000, function(){
  console.log("Root: 9000");
})
