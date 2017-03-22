app.controller('PostController',['$scope','$routeParams','PostFactory','UserFactory','CommentFactory','$location',function($scope,$routeParams,PostFactory,UserFactory,CommentFactory,$location){

  function get_post(id){
    PostFactory.getPost(id,function(data){
      $scope.post=data;
    })
  }
  get_post($routeParams.id);
  // function re_direct(){
  //   $location.url('/post/'+$routeParams.id);
  // }
  $scope.addcomment = function(comment){
    var commentID = $routeParams.id;
    CommentFactory.add_comment(comment,commentID);
  }

}]);
