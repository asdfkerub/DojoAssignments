app.controller('AssController',['$scope','PlayersFactory','TeamFactory',function($scope,PlayersFactory,TeamFactory){
  $scope.players = PlayersFactory.allPlayers();
  $scope.teams = TeamFactory.allTeams();

  $scope.assignTeam = function(){
      PlayersFactory.assignTeam($scope.ass);
  }
  $scope.clear = function(index){
    PlayersFactory.clear(index);
  }

}]);
