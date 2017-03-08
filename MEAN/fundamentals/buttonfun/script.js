$(document).ready(function(){
  var prev;
  function colorCheck(button){
    if($(button).hasClass('blue')){
      $(button).removeClass('blue').addClass('red');
      prevColor(button);
      return "blue";
    }
    if($(button).hasClass('red')){
      $(button).removeClass('red').addClass('blue');
      prevColor(button);
      return "red";
    }
  }
  function red(button){
    var color = colorCheck(button);
    $(button).css('background',color);
  }
  function prevColor(button){
    prev = $(button).css('background');
    return prev;
  }
  $('#the_button').click(function(){
    red(this);
  })
  $('#the_button').mouseover(function(){
    prevColor(this);
    $(this).css('background','green');
  });
  $('#the_button').mouseout(function(){
    $(this).css('background',prev);
  });

});
