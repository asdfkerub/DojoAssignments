function time(hour,min,period){
  var hour = hour;
  var min = min;
  var period = period;
  var ch = "";
  var cm = "";
  var cp = "";
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
    cp = "morning";
  }else{
    cp = "evening";
  }
  if(min == 5){
    cm = "5 after";
  }else if(min == 30){
    cm = "just after of";
    hour--;
  }else if(min == 15){
    cm = "quarter after";

  }else if(min > 30){
    cm = "half past";
  }else{
    cm = "almost";
    hour++;
  }
  console.log("It's " + hour + " in the " + cp);
  console.log("It's " + cm + " " + hour + " " + cp);
}
time(4,15,"am");
