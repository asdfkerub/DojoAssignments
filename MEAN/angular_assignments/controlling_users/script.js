var app = angular.module('app',[]);
app.controller('UserController',['$scope',function($scope){
  // Default sorting is by first_name
  $scope.sortType = "first_name";
  // Default sorting reverse
  $scope.sortReverse = false;
  // Saved Users
  $scope.users = [
    {first_name:'Kerub',last_name:'Q',fav_lang:'Mean',date: new Date()},
    {first_name:'aKerub',last_name:'b',fav_lang:'aMean',date: new Date()}
  ];
  $scope.addUser = function(){
      $scope.users.push({first_name:$scope.newUser.first_name,last_name:$scope.newUser.last_name,fav_lang:$scope.newUser.fav_lang,date:new Date()});
      $scope.newUser = {};
      console.log($scope.users);
  }
  // $index is passed from the html - $index is the position of the clicked user in the array
  $scope.delete = function($index){
    $scope.users.splice($index,1);
  }
}]);
