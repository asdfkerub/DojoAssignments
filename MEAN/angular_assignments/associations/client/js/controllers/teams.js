app.controller('TeamsController',['$scope','TeamFactory',function($scope,TeamFactory){
  $scope.teams = TeamFactory.allTeams();
  $scope.addTeam = function(){
    TeamFactory.addTeam($scope.team);
    $scope.team = {};
  }
  $scope.removeTeam = function(index){
    TeamFactory.removeTeam(index);
  }
}]);
