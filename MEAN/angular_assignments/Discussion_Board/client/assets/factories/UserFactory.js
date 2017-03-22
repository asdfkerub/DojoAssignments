app.factory('UserFactory',['$location','$http',function($location,$http){

  var factory = {};
  // Route for adding a user
  factory.add_user = function(user){
    $http({
      url: '/register',
      method: 'POST',
      data: user
    }).then(function(res){
      $location.url('/');
    },function(res){
      console.log("UserFactory: register error - ",res);
    })
  }
  // Route for login
  factory.login_user = function(user){
    $http({
      url: '/login',
      method: 'POST',
      data: user
    }).then(function(res){
      $location.url('/dashboard');
    },function(res){
      console.log("UserFactory: login error - ",res)
    })
  }
  // getting logged in user
  factory.logged_in = function(callback){
    $http({
      url: '/dashboard',
      method: 'GET',
    }).then(function(res){
      callback(res.data);
    },function(res){
      console.log("UserFactory: logged_in error -",res);
    })
  }

  return factory;

}])
