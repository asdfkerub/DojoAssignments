$(document).ready(function(){
  // var datas;
  // $.get("https://api.github.com/users/asdfkerub", displayData);
  // function displayData(data){
  //   datas = data;
  //   return datas;
  // }
  // function displayName(){
  //   name = datas.name;
  //   return name;
  // }
  // $('#displayShit').click(function(){
  //   $('#result').append(displayName());
  //   console.log(displayName());
  // });
  $('#displayShit').click(function(){
    $.get("https://api.github.com/users/asdfkerub", displayName);
  })
  function displayName(data){
    var name = data.name;
    var login = displayLogin(data);
    $('body').append(data.name + ' ' + login);
    console.log(data);
  }
  function displayLogin(data){
    return data.login;
  }
  (function(){
    var a = 'a';
    var b = 'b';
    function test(){
      console.log(a);
    }
    function test2(){
      console.log(b);
    }
    test();
    test2();
  }());


});
