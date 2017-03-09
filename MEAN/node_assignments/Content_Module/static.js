var fs = require('fs');
module.exports = function(request,response){
  switch(request.url){
    // root
    case "/":
      serveRoot(response);
      break;
    // style
    case "/style/style.css":
      serveStyle(response);
      break;
    default:
      serve404(response);
      break;
  }
  //function for root
  function serveRoot(response){
    fs.readFile('./views/index.html','utf8',function(errors,contents){
      if(errors){return serve404(response)};
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(contents);
      response.end();
    });
  }
  //function for stylesheets
  function serveStyle(response){
    fs.readFile('./stylesheets/style.css','utf8',function(errors,contents){
      if(errors){return serve404(response)};
      response.writeHead(200,{'Content-Type':'text/css'});
      response.write(contents);
      response.end();
    });
  }
  //function for errors
  function serve404(response){
    response.writeHead(404);
    response.end('File Not Found');
  }
}
