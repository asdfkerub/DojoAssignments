var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');


app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:'codingdojorocks'}));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
// app.HTTP_VERB('URL', function (request, resquest){});
app.get('/',function(request,response){
  response.render('index',{title:'My express Project'});
  // console.log(__dirname);
})
app.post('/users',function(request,response){
  // console.log('POST DATA \n\n', request.body);
  request.session.name = request.body.name;
  console.log(request.session.name);
  response.redirect('/');
})
app.get('/users/:id',function(request,response){
  console.log('the id is: ', request.params.id);
  response.send('You requested the id:', request.params.id);
});
// app.get('/users',function(request,response){
//   var users_array = [
//     {name: "Michael", email: "michael@codingdojo.com"},
//     {name: "Jay", email: "jay@codingdojo.com"},
//     {name: "Brendan", email: "brendan@codingdojo.com"},
//     {name: "Andrew", email: "andrew@codingdojo.com"}
//   ];
//   response.render('users',{userx:users_array});
// })


app.listen(9000,function(){
  console.log('port: 9000');
})
