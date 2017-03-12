module.exports = function Route(app){
  app.get("/",function(req,res){
    res.render("index");
  });

  app.post('/result',function(req,res){
    var submitted_info = {
      name : req.body.name,
      location : req.body.location,
      lang : req.body.lang,
      comment : req.body.comments
    }
    res.render('result',{user_data:submitted_info});
  });
}
