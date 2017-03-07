var hpOne;
var hpTwo;
var attkOne;
var attkTwo;
var speedOne;
var speedTwo;
var game = {
  players: [],
  addPlayer: function(name){
    var player = playerConstructor(name);
    this.players.push(player);
  }
};
function playerConstructor(name){
  var num = Math.floor((Math.random() * 151) + 1);
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  player.hand.push(num);
  return player;
};
$(document).ready(function(){
  $('#add_playerOne').click(function(){
    game.addPlayer('PlayerOne');
    var num = game.players[0].hand[0];
    var url = 'http://pokeapi.co/api/v1/pokemon/' + num.toString();
    $.get(url,function(res){
      console.log(res);
      var name = res.name;
      hpOne = res.hp;
      attkOne = res.attack;
      speedOne = res.speed;
      console.log(name);
      $('#PlayerOne').append('<h1>'+name+'</h1><h2>Attack: '+attkOne+'</h2><h3 id="player1hp">HP: ' + hpOne + '</h3>');
    },"json");
    $(this).hide();
  });
  $('#add_playerTwo').click(function(){
    game.addPlayer('PlayerTwo');
    var num = game.players[1].hand[0];
    var url = 'http://pokeapi.co/api/v1/pokemon/' + num.toString();

    $.get(url,function(res){
      console.log(res);
      var name = res.name;
      hpTwo = res.hp;
      attkTwo = res.attack;
      speedTwo = res.speed;
      console.log(name);
      $('#PlayerTwo').append('<h1>'+name+'</h1><h2>Attack: '+attkTwo+'</h2><h3 id="player2hp">HP: ' + hpTwo + '</h3>');
    },"json");
    $(this).hide();
  });
});
function attk1(){
  var attack = hpTwo - attkOne;
  $('#player1hp').text(attack);
}
function attk2(){
  var attack = hpOne - attkTwo;
  $('#player2hp').text(attack);
}
function battle(){
  speedOne = speedOne * 20;
  speedTwo = speedTwo * 19;
    setTimeout(attk1,speedOne);
    setTimeout(attk2,speedTwo);
}
$(document).ready(function(){
  $('#battleNow').click(function(){
    console.log('Battle Started.');
    battle();
  });
})
