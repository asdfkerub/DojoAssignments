// TASK ONE
function runningLogger(){
  console.log('I am running!');
}
runningLogger();
console.log('^ Task One ');
// TASK TWO
function multiplyByTen(num){
  return num * 10;
}
console.log(multiplyByTen(5));
console.log('^ Task Two ');

// TASK THREE
function stringReturnOne(){
  return "StringOne";
}
function stringReturnTwo(){
  return "StringTwo";
}
console.log(stringReturnOne() , stringReturnTwo());
console.log('^ Task Three ');
// TASK FOUR
function caller(item){
  if (typeof(item) === 'function'){
    item();
  }else{
    console.log('I am not a function, i am a ' , typeof(item));
  }
}
caller(runningLogger);
console.log('^ Task Four ');

// Task FIVE
function myDoubleConsoleLog(item1,item2){
  if(typeof(item1) === 'function' && typeof(item2) === 'function'){
    item1();
    item2();
  }else{
    console.log('Not enough functions');
  }
}
myDoubleConsoleLog(caller2,stringReturnTwo);
console.log('^ Task Five & Six');



// UNFINISHED
function caller2(item){
  console.log('Starting');
  if (typeof(item) === 'function'){
    setTimeout(item() , 2000);
  }
  console.log('Ending');
  return "Interesting";
}
caller2(runningLogger());