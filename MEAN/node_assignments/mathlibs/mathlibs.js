module.exports = function(){
  return{
    add : function(num1,num2){
      return(`Sum: ${num1 + num2}`);
    },
    multiply : function(num1,num2){
      return(`Multiplied: ${num1 * num2}`);
    },
    square : function(num1){
      return(`Squared: ${num1*num1}`);
    },
    random : function(num1,num2){
      return (Math.floor((Math.random()*num2) + num1));
    }
  }
}
