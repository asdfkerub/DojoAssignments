// module.exports = {
//   greet : function(){
//     console.log('YOOO');
//   },
//   bye : function(){
//     console.log('Good Bye.');
//   },
//   add : function(param1,param2){
//     console.log(`sum is ${param1 + param2}`);
//   }
// }
module.exports = function(){
  return {
    greet : function(){
      console.log('YOOO');
    },
    bye : function(){
      console.log('Good Bye.');
    },
    add : function(param1,param2){
      console.log(`sum is ${param1 + param2}`);
    }
  }
}
