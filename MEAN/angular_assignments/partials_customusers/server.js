var express = require('express'),
    root = __dirname,
    port = 9000,
    bp = require('body-parser'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(root , '/client')));
app.use(express.static(path.join(root , '/bower_components')));
app.use(bp.json());

app.listen(port,function(){
  console.log('PORT:',port);
})
