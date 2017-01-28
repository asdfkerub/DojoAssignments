function bday(cmonth,cday,bmonth,day){
  var mleft = bmonth - cmonth;
  var daysleft = 0;
  //calculates days total with in months
  for(var i = 1; i <= mleft;i++){
    if(i % 2 === 1){
      daysleft+=31;
    }else{
      daysleft+=30;
    }
  }
  //minus current date
  daysleft-= cday;
  //minus birth date
  daysleft+= day;
  //minus february
  if(cmonth <= 2){
    daysleft-= 2;
  }
  //console log messages
  for(var x = daysleft; x >= 0; x--){
    if(x >= 30){
      console.log(x + " until my bday :/");
    }else if(x <= 30 && x > 5){
      console.log("There is only " + x + " left until my bday!");
    }else if(x <= 5 && x !== 0){
      console.log("Almost my FUCKING BIRTHDAY! " + x + " days left");
    }else if(x === 0){
      console.log("Happy Birthday to me!");
    }else{
      console.log("When is your birthday again?");
    }
  }
}
console.log(bday(1,28,5,4));
