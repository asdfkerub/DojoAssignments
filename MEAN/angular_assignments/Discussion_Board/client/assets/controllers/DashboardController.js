app.controller("DashboardController",['$scope','$routeParams','UserFactory','PostFactory',function($scope,$routeParams,UserFactory,PostFactory){
  // function to get logged in user
  function logged_in(){
    UserFactory.logged_in(function(data){
      $scope.logged_user = data;
    })
  }
  function get_posts(){
    PostFactory.getPosts(function(data){
      $scope.posts = data;
      console.log(data);
    })
  }
  logged_in();
  get_posts();

  $scope.addpost = function(post){
    PostFactory.addPost(post);
    get_posts();
  }

}]);
