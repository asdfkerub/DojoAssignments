$(document).ready(function(){
  //var url = "http://anapioficeandfire.com/api/characters/";
  $('img').click(function(){
    var id = $(this).attr('data-name');
    var url = "http://www.anapioficeandfire.com/api/houses?name=" + id;
    $.get(url,function(res){
        var tit = '';
        for(var i = 0; i < res[0].titles.length; i++){
          if(i === res[0].titles.length - 1){
            tit+=res[0].titles[i];
          }else{
            tit+=res[0].titles[i] + ', ';
          }

        }
        $('#result .name').html("<strong>Name: </strong>"+ res[0].name);
        $('#result #word').html("<strong>Words: </strong>"+ res[0].words);
        $('#result #tit').html("<strong>Title(s): </strong>" + tit);
    },'json');
  });

});
