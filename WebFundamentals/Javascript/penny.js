function penny(){
  var total = 0.01;
  var ten = 0;
  var bill = 31;
  for(var i = 2; i <= 30; i++){
    if(total < 10000){
      ten = i;
    }
    total*=2;
  }
  for(var ii = total; ii < 1000000000; ii*=2){
    bill++;
  }
  console.log("After 30 days : " + total);
  console.log("It will take " + ten + " days for the survent to have 10000+");
  console.log("It will take " + bill + " days to make one billion");
}
penny();
