var express = require('express'),
    bp = require('body-parser'),
    bcrypt = require('bcrypt'),
    path = require('path'),
    session = require('express-session'),
    root = __dirname,
    port = 9000,
    app = express();

app.use(session({secret:'kerub'}));
app.use(express.static(path.join(root,'client')));
app.use(express.static(path.join(root,'bower_components')));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port,function(){
  console.log("PORT:",port);
})
