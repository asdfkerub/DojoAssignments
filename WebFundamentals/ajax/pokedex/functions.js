// //On Hover color by Type
//
// $(document).on('hover','#main img',function(){
//   var type = '';
//   var url = "http://pokeapi.co/api/v1/pokemon/" + $(this).attr('id')+"/";
//     $.get(url , function(res){
//       console.log(res);
//       type = res.types[0].name;
//       console.log(type);
//     },'json');
// });

$(document).ready(function(){
  for(var i = 1; i <= 151; i++){
    $('#wrapper #main').append('<img id='+ i + ' src="http://pokeapi.co/media/img/' + i + '.png">');
  };

$(document).on('click','img',function(){
  var id = $(this).attr('id');
  $('#deck div').remove();
  var url = "http://pokeapi.co/api/v1/pokemon/" + $(this).attr('id')+"/";
  $.get(url , function(res){
    //console.log(res);
    var type = '';
    var img = 'http://pokeapi.co/media/img/' + id + '.png';
    for(var i = 0;i < res.types.length;i++){
      type+= '<li>' + res.types[i].name + '</li>';
    }
    var name = res.name;
    var pic = 'http://pokeapi.co' + res.sprites[1].resource_uri;
    var height = res.height;
    var weight = res.weight;

    $('#deck').append('<div class="pokemon"><h2>' + name +'</h2><img src="' + img + '"><p class="tit">Type(s)</p><ul>'+ type + '</ul><p class="tit">Height</p><p>' + height +'</p><p class="tit">Weight</p><p>' + weight +'</p></div>');
  },"json");

});



});
