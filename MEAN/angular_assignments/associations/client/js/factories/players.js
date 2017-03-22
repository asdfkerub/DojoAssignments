app.factory('PlayersFactory',function(){
  var players = [];
  var factory = {};
  factory.allPlayers = function(){
    return players;
  }
  factory.addPlayer = function(data){
    players.push(data);
  }
  factory.removePlayer = function(index){
    players.splice(index,1);
  }
  factory.assignTeam = function(the_player){
    players[the_player.player].team_name = the_player.team;
  }
  factory.clear = function(index){
    players[index].team_name = "";
  }
  return factory;
})
