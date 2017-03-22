var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'partials/users.html',
      controller: 'UserController'
    })
    .when('/list',{
      templateUrl: 'partials/list.html',
      controller: 'listController'
    })
    .otherwise({
      redirectTo :'/'
    })
});
app.factory('UserFactory',function(){
  var users = [{first_name:'Kerub',last_name:'Q',language:'MEAN'}];
  var factory = {};
  factory.create = function(data){
    users.push(data);
  };
  factory.getUsers = function(){
    return users;
  }
  factory.delete = function(index){
    users.splice(index,1);
  }
  return factory;
})
