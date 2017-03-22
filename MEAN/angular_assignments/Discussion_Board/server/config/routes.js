var route = require('../controllers/discussion.js');

module.exports = function(app){

  app.get("/",route.index);
  app.post('/register',route.register);
  app.post('/login',route.login);
  app.get("/dashboard",route.dashboard);
  app.post("/dashboard",route.addpost);
  app.get("/getposts",route.getposts);
  app.get("/post/:id",route.getpost);
  app.post("/comment/:id",route.addcomment);

}
