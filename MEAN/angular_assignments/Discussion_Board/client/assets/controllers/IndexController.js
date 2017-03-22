app.controller("IndexController",['$scope','$routeParams','UserFactory',function($scope,$routeParams,UserFactory){

  $scope.adduser = function(user){
    UserFactory.add_user(user);
  }
  $scope.loginuser = function(user){
    UserFactory.login_user(user);
  }

}])
