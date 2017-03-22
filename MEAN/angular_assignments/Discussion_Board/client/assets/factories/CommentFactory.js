app.factory('CommentFactory',['$location','$http',function($location,$http){

  var factory = {};

  factory.add_comment = function(comment,commentID){
    // console.log(commentID);
    $http({
      url:'/comment/'+commentID,
      method:'POST',
      data: comment
    }).then(function(res){
      // redirect callback
      // callback2();
      // get post again;
      // callback();
    },function(res){
      console.log(res);
    })
  }

  return factory;

}])
