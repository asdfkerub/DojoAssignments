var app = angular.module('app',[]);

app.factory('productFactory',function(){
  var products = [];
  var factory = {}
  factory.getProducts = function(){
    // callback(products);
    return products;
  }
  factory.addProduct = function(product){
    products.push(product);
  }
  factory.removeProduct = function(product){
    products.splice(product,1);
  }
  return factory;
})
app.controller('productController',['$scope','productFactory',function($scope, productFactory){
  $scope.products = productFactory.getProducts();
  $scope.removeProduct = function(product){
    productFactory.removeProduct(product);
  }
  $scope.addProduct = function(){
    productFactory.addProduct($scope.newProd);
    $scope.newProd = {};
    console.log($scope.products);
  }
  // productFactory.getProducts(function(data){
  //   $scope.products = data;
  // })
}]);


// +++++++++++++++++
// ANSSERRR
// +++++++++++++++++
// var app = angular.module('app', [])
// app.factory('productFactory', ['$http', function($http) {
//   var factory = {};
//   var products = [];
//   factory.index = function(callback){
//     //callback is the function that is passed to the productIndex by the controller, in this caseP: setProducts.
//     callback(products);
//   }
//   factory.create = function(product, callback){
//     if(product.price && Number(parseFloat(product.price))==product.price){
//       products.push(product);
//       callback(products);
//     }
//   }
//   factory.delete = function(id, callback){
//     products.splice(id,1);
//     callback(products);
//   }
//   return factory;
// }]);
//
// app.controller('productController', ['$scope','productFactory', function($scope, productFactory) {
//   // callback, but not as an anonymous function, rather a named function!
//   function setProducts(data){
//     $scope.products = data;
//     $scope.product = {};
//   }
//
//   $scope.product = {};
//   $scope.products = {};
//
//   $scope.index = function(){
//     productFactory.index(setProducts);
//   }
//
//   $scope.index();
//   $scope.create = function(){
//     productFactory.create($scope.product, setProducts);
//   }
//   $scope.delete = function(id){
//     productFactory.delete(id,setProducts);
//   }
//
// }]);
