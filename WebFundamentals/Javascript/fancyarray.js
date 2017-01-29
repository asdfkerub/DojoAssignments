function fancy(arr,symbol,rev){
  if(rev === true){
    var newarr = [];
    for(var iii = arr.length - 1; iii > arr.length / 2; iii--){
      newarr.push(arr[iii]);
    }
    for(var ii = arr.length / 2; ii >= 0; ii--){
      newarr.push(arr[ii]);
    }
    arr = newarr;
  }
  for(var i = 0; i < arr.length; i++){
    console.log(i + " " + symbol + " " + arr[i]);
  }

}
fancy(["NameOne" , "NameTwo" , "NameThree" , "NameFour" , "NameFive" , "NameSix"] , "::" , true);
