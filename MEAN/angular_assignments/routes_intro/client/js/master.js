var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'partials/partialone.html',
      controller: 'voneController'
    })
    .when('/two',{
      templateUrl: 'partials/partialtwo.html',
      controller : 'vtwoController'
    })
    .otherwise({
      redirectTo:'/'
    })
})
app.controller('voneController',function($scope){
  $scope.sports = ['basketball','fingercoding','running'];
});
app.controller('vtwoController',function($scope){
  $scope.message = 'This is from the second controller';
})
