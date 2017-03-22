app.controller('listController',['$scope','UserFactory',function($scope,UserFactory){
  $scope.sortType = "first_name";
  $scope.sortReverse = false;
  $scope.allUsers = UserFactory.getUsers();
}]);
