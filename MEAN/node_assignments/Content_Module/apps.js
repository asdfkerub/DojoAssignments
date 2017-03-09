var http = require('http'),
    fs = require('fs'),
    static_module = require('./static.js'),
    root = 9000;

var server = http.createServer(function(request,response){
  static_module(request,response);
});


server.listen(root);
