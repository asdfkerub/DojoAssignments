var divapp = angular.module('divapp',[]);

divapp.controller('divController',['$scope',function($scope){
  $scope.myName = 'Kerub';
  $scope.myStack = 'MEAN';
  $scope.myFavLib = 'ANGULAR';
}]);
