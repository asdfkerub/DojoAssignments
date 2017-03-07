function sum(x,y){
  var sum = 0;
  for(var i = x; i < y; i++){
    sum += i;
  }
  return sum;
}
// console.log(sum(5,10));
function min(arr){
  var min = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
//console.log(min([1,2,3,-4,5,61,-3]));
function avg(arr){
  var sum = 0;
  for(var i =0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}
//console.log(avg([1,2,3,-4,5,61,-3]));
var funcSum = function (x,y){
  var sum = 0;
  for(var i = x; i < y; i++){
    sum += i;
  }
  return sum;
};
var funcMin = function (arr){
  var min = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
};
var funcAvg = function (arr){
  var sum = 0;
  for(var i =0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
};
var math = {
  'sumIs' : funcSum,
  'minIs' : funcMin,
  'avgIs' : funcAvg
}
var person = {
  'name' : 'Kq',
  'distance_traveled' : 0,
  'say_name' : function(){
    console.log(this.name);
  },
  'say_something' : function(word){
    console.log(this.name, 'says:' , word);
  },
  'walk' : function(){
    this.distance_traveled += 3;
    console.log(this.name, 'is walking', this.distance_traveled);
  },
  'run' : function(){
    this.distance_traveled += 10;
    console.log(this.name, 'is running', this.distance_traveled);
  },
  'crawl' : function(){
    this.distance_traveled += 1;
    console.log(this.name, 'is crawling', this.distance_traveled);
    return person;
  }
}
person.say_name();
person.say_something('Yooooo');
person.walk();
person.walk();
person.run();
person.crawl();
