var http = require('http'),
    fs = require('fs'),
    port = 7077;

var server = http.createServer(function(request,response){
  var splitURL = request.url.split('/');
  var firstChunk = splitURL[1];

  switch(firstChunk){
    case "styles":
      serveCSS(splitURL[2],response);
      break;
    case "images":
      serveImages(splitURL[2],response);
      break;
    default:
      switch(firstChunk){
        case "cars":
          if (splitURL[2] === 'new'){
            serveHTML('car_new.html',response);
          }else{
            serveHTML('cars.html',response);
          }
          break;
        case "cats":
          serveHTML('cats.html',response);
          break;
        default:
          serve404(response);
          break;
      }
  }

});

function serveHTML(filename,response){
  fs.readFile(`views/${filename}`,'utf8',function(errors,contents){
    if(errors){
      return serve404(response)
    }
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(contents);
    response.end();
  });
}
function serveCSS(filename,response){
  fs.readFile(`stylesheets/${filename}`,'utf8',function(errors,contents){
    if(errors){
      return serve404(response)
    }
    response.writeHead(200,{'Content-Type':'text/css'});
    response.write(contents);
    response.end();
  })
}
function serveImages(filename,response){
  fs.readFile(`images/${filename}`,function(errors,contents){
    if(errors){
      return serve404(response)
    }
    response.writeHead(200,{'Content-Type':'image/jpg'});
    response.write(contents);
    response.end();
  })
}
function serve404(response){
  response.writeHead(404);
  response.end('file not found');
}
server.listen(port);
