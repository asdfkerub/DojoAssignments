var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    root = __dirname,
    port = 9000,
    app = express();


app.use(express.static(path.join(root,'/client')));
app.use(express.static(path.join(root,'bower_components')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Need to require these two files everytime.
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);


app.listen(port,function(){
  console.log("PORT:",port);
})
