function time(hour,min,period){
  var hour = hour;
  var min = min;
  var period = period;
  var ch = "";
  var cm = "";
  var cp = "";
  if(hour == 4 && min == 20){
    console.log("It's fckin Four Twenty");
    return;
  }
//   HOURS
  if(hour == 12 && period == "pm"){
    console.log("Its " + hour + " noon");
    return;
  }else if(hour == 12 && period == "am"){
    console.log("Its " + hour + " midnight");
    return;
  }
  if(hour <= 2 && period == "pm"){
    console.log("It's " + hour + " in the afternoon");
    return;
  }
//   MINUTES
  if(period === "am" || period === "AM"){
    cp = "in the morning";
  }else{
    cp = "in the evening";
  }
  if(min == 5){
    cm = "5 after";
    console.log("It's " + cm + " " + hour + " " + cp);
    return;
  }else if(min < 30){
    cm = "just after of";
    hour--;
    console.log("It's " + cm + " " + hour + " " + cp);
    return;
  }else if (min == 30){
    console.log("It's " + hour + ":" + min + " " + cp);
    return;
  }else if(min == 15){
    cm = "quarter after";
    console.log("It's " + cm + " " + hour + " " + cp);
    return;
  }else if(min > 30){
    cm = "half past";
    console.log("It's " + cm + " " + hour + " " + cp);
    return;
  }else{
    cm = "almost";
    hour++;
    console.log("It's " + cm + " " + hour + " " + cp);
    return;
  }

}
time(4,20,"am");
