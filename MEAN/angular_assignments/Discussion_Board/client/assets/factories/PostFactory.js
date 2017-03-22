app.factory('PostFactory',['$location','$http',function($location,$http){

  var factory = {};

  factory.addPost = function(post){
    $http({
      url : '/dashboard',
      method: 'POST',
      data: post
    }).then(function(res){
      $location.url('/dashboard');
    },function(res){
      console.log(res);
    })
  }
  factory.getPosts = function(callback){
    $http({
      url: '/getposts',
      method: 'GET',
    }).then(function(res){
      $location.url('/dashboard');
      callback(res.data);
    },function(res){
      console.log(res);
    })
  }
  factory.getPost = function(post,callback){
    $http({
      url:'/post/'+post,
      method:'GET',
    }).then(function(res){
      callback(res.data);
    },function(res){
      console.log(res);
    })
  }

  return factory;

}]);
