$(document).on('click' , '#cardBox div .infoBtn', function(){
  $(this).parent().siblings().show();
  $(this).parent().hide();
});

$(document).on('click' , '#cardBox div .descBtn', function(){
  $(this).parent().siblings().show();
  $(this).parent().hide();
});

$(document).ready(function(){
  $('form').submit(function(){
    $('#cardBox').append('<div><div class="info">' + '<h1>' + $('#firstName').val() + ' ' + $('#lastName').val() + '</h1>' + "<span class='infoBtn'>View Description</span> " +'</div><div class="desc"><p>' + $('#description').val() + '</p><span class="descBtn">View Info</span></div></div>');
    return false;
  });
});
