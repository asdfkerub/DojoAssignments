function bday(cmonth,cday,bmonth,day){
  var dleft = 0;
  if(bmonth === 2 || bmonth > 2){
    dleft-= 2;
  }
  for(var i = cmonth; i < bmonth; i++){
    if(i % 2 === 1){
      dleft+= 31;
    }else{
      dleft+= 30;
    }
  }
  dleft-= cday;
  dleft+= day;
  if(dleft < 0){
    dleft+= 365;
  }
  for(var ii = dleft; ii >= 0; ii--){
   if(ii > 30){
      console.log(ii + " until my birthday :/");
    }else if(ii <= 30 && ii > 5){
      console.log("Its almost my brithday! " + ii + " days left");
    }else if(ii === 1){
      console.log("My birthday is tomorrow");
    }else if(ii <= 5 && ii !== 0){
      console.log("MY FCUKING BIRTHDAY IS IN " + ii + " DAYS!");
    }else{
      console.log("It's my birthday today!!!");
    }
  }

}
console.log(bday(1,28,1,1));
