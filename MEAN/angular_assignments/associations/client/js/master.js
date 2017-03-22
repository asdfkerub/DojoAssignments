var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/players',{
      templateUrl : 'static/partials/players.html',
      controller : 'PlayersController'
    })
    .when('/teams',{
      templateUrl : 'static/partials/teams.html',
      controller : 'TeamsController'
    })
    .when('/ass',{
      templateUrl : 'static/partials/ass.html',
      controller : 'AssController'
    })
    .otherwise({
      redirectTo: '/players'
    })
})
