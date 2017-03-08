//Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}
var _ = {
   map: function(arr,callback) {
     for (i in arr){
       arr[i] = callback(arr[i]);
     }
     return arr;
   },
   reduce: function(arr,callback,memo) {
     var sum = 0;
     for(var i = 0; i < arr.length;i++){
       sum += callback(memo,arr[i]);
     };
     return sum;
   },
   find: function(arr,callback) {
     for(i in arr){
       if(callback(arr[i])){
         return arr[i];
       }
     }
   },
   filter: function(arr,callback) {
     var narr = [];
     for(i in arr){
       if(callback(arr[i])){
         narr.push(arr[i]);
       }
     }
     return narr;
   },
   reject: function(arr,callback) {
     for( i in arr){
       if(callback(arr[i])){
         arr.splice(i,1);
       }
     }
     return arr;
   }
 }
 var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 console.log(evens); // i
 var find = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 console.log(find); // i
 var reduce = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
 console.log(reduce);
 var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 console.log(odds);
  var map = _.map([1, 2, 3], function(num){ return num * 3; });
  console.log(map);
