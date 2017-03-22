app.factory('TeamFactory',function(){
  var teams = [];
  var factory = {};
  factory.allTeams = function(){
    return teams;
  }
  factory.addTeam = function(data){
    teams.push(data);
  }
  factory.removeTeam = function(index){
    teams.splice(index,1);
  }
  return factory;
});
