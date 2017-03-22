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
  factory.buyProduct = function(product){
    if(products[product].quantity >= 1){
      products[product].quantity-=1;
    }else{
      products[product].quantity = "Out of stock"
    }
  }
  return factory;
})
app.controller('productController',['$scope','productFactory',function($scope, productFactory){
  $scope.products = productFactory.getProducts();
  $scope.removeProduct = function(product){
    productFactory.removeProduct(product);
  }
  $scope.addProduct = function(){
    productFactory.addProduct({name:$scope.newProd.name,price:$scope.newProd.price,quantity:50});
    $scope.newProd = {};
    console.log($scope.products);
  }
  // productFactory.getProducts(function(data){
  //   $scope.products = data;
  // })
}]);
app.controller('ordersController',['$scope','productFactory',function($scope,productFactory){
  $scope.products = productFactory.getProducts();
  $scope.buy = function(product){
    productFactory.buyProduct(product);
  }
}]);
