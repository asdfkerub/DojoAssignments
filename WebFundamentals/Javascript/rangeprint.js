function range(start,end,skip){
  if(skip === undefined){
    skip = 1;
  }
  if(end === undefined){
    var temp = start;
    start = 0;
    end = temp;
  }
  if(end < 0 && skip > 0){
    skip*=-1;
  }
  if(skip < 0){
    for(var ii = start; ii > end; ii+=skip){
      console.log(ii);

    }
  }else{
    for(var i = start; i < end; i+=skip){
      console.log(i);
    }
  }

}
range(-4,8);
