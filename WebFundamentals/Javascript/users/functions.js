$(document).ready(function(){
  $("form").submit(function(){
    $('#users').append('<tr>' + '<td>' + $('#firstname').val() + '</td>' + '<td>' + $('#lastName').val() + '</td>' + '<td>' + $('#email').val() + '</td>' + '<td>' + $('#phone').val() + '</td>' +'</tr>');
    return false;
  })
});
