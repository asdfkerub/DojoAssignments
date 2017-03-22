app.controller('UserController',['$scope','UserFactory',function($scope,UserFactory){
  // Getting all users
  $scope.allUsers = UserFactory.getUsers();
  $scope.createUser = function(){
    UserFactory.create($scope.newUser);
    $scope.newUser = {};
  };
  $scope.delete = function(index){
    UserFactory.delete(index);
  }
  // Default sorting is by first_name
  $scope.sortType = "first_name";
  // Default sorting reverse
  $scope.sortReverse = false;
}]);
