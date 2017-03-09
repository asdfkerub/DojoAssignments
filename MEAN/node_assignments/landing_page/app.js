var http = require('http'),
    fs = require('fs'),
    port = 9000;
//creating server
var server = http.createServer(function (request,response){
  if(request.url === '/stylesheets/master.css'){
    fs.readFile('stylesheets/master.css','utf8',function(errors,contents){
      response.writeHead(200,{'Content-Type':'text/css'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/'){
    fs.readFile('index.html','utf8',function(errors,contents){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(contents);
      response.end();
    });
  }else if(request.url === '/ninjas'){
    fs.readFile('ninjas.html','utf8',function(errors,contents){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(contents);
      response.end();
    });
  }else if(request.url === '/dojo'){
    fs.readFile('dojo.html','utf8',function(errors,contents){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else{
    response.writeHead(404);
    response.end('Url requested is not available');
  }
});
//tells the server what port
server.listen(port);
