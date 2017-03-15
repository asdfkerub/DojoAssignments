var foodApp = angular.module('foodApp',[]);

foodApp.controller('foodController',["$scope",function($scope){

  $scope.foods = [
    {name:'Taco'},
    {name:'More Tacos'}
  ];
  $scope.addFood = function(){
    console.log($scope.foods);
    $scope.foods.push($scope.newFood);
    $scope.newFood = {};
  }
}]);
