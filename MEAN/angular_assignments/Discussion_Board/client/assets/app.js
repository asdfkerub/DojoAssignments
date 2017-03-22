var app = angular.module('app',["ngRoute","ngMessages"]);

app.config(function($routeProvider){

  $routeProvider
    .when("/",{
      templateUrl : "partials/index.html",
      controller : "IndexController"
    })
    .when("/dashboard",{
      templateUrl : "partials/dashboard.html",
      controller : "DashboardController"
    })
    .when("/post/:id",{
      templateUrl: "partials/post.html",
      controller: "PostController"
    })

})
