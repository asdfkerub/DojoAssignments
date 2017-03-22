app.controller('PlayersController',['$scope','PlayersFactory',function($scope,PlayersFactory){
  $scope.players = PlayersFactory.allPlayers();
  $scope.addPlayer = function(){
    PlayersFactory.addPlayer($scope.player);
    $scope.player = {};
  }
  $scope.removePlayer = function(index){
    PlayersFactory.removePlayer(index);
  }
}]);
