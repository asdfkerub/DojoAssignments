var http = require('http'),
    fs = require('fs'),
    port = 7077;

var server = http.createServer(function(request,response){
  if(request.url === '/cars'){
    fs.readFile('views/cars.html', 'utf8', function(errors,contents){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(contents);
      response.end();
    })
  }else if(request.url === '/cats'){
    fs.readFile('views/cats.html','utf8',function(errors,contents){
      response.writeHead(400,{'Content-Type':'text/html'});
      response.write(contents);
      response.end();
    });
  }else if(request.url === '/cars/new'){
    fs.readFile('views/car_new.html','utf8',function(errors,contents){
      response.writeHead(400,{'Content-Type':'text/html'});
      response.write(contents);
      response.end();
    });
  }//stylesheet
  else if(request.url === '/stylesheets/master.css'){
    fs.readFile('stylesheets/master.css','utf8',function(errors,contents){
      response.writeHead(200,{'Content-Type':'text/css'});
      response.write(contents);
      response.end();
    });
  }//images
  else if(request.url === '/images/car1.jpg'){
    fs.readFile('images/car1.jpg',function(errors,contents){
      response.writeHead(200,{'Content-Type':'image/jpg'});
      response.write(contents);
      response.end();
    });
  }else if(request.url === '/images/car2.jpg'){
    fs.readFile('images/car2.jpg',function(errors,contents){
      response.writeHead(200,{'Content-Type':'image/jpg'});
      response.write(contents);
      response.end();
    });
  }else if(request.url === '/images/cat1.jpg'){
    fs.readFile('images/cat1.jpg',function(errors,contents){
      response.writeHead(200,{'Content-Type':'images/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else{
    response.writeHead(400);
    response.end('Url unavailable');
  }
});

server.listen(port);
