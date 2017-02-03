$(document).ready(function(){

  $('form').submit(function(){
    var location = $('#location').val();
    var id = "d541d4e55a79f3f4462e5870e711ff34";
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&&appid=' + id;
      $.get(url,function(res){
        var temp = res.main.temp;
        $('#result h2').text(res.name);
        $('#result p').text('Temperature: ' + Math.round(temp - 273.15) + ' C');
      },'json');

      return false;
  });

});
