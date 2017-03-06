  x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
  for ( var i = 0; i < x.length; i++){
    console.log(x[i]);
  }
  x.push(100);
  x.push(["hello", "world", "JavaScript is Fun"]);
  console.log(x);
  console.log('--------------------');
  var sum = 0;
  for(var i = 1; i < 501; i++){
    sum += i;
  }
  console.log(sum);
  console.log('--------------------');
  var arr_min = [1, 5, 90, 25, -3, 0];
  var min = 0;
  for(var i = 0; i < arr_min.length; i++){
    if(arr_min[i] < min){
      min = arr_min[i];
    }
  }
  console.log(min);
  console.log('--------------------');
  var sum2 = 0;
  for(var i = 0; i < arr_min.length; i++){
    sum2 += arr_min[i];
  }
  var avg = 0;
  avg = sum2 / arr_min.length;
  console.log(avg);
  console.log('--------------------');

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var key in newNinja){
  console.log(key, newNinja[key]);
}
