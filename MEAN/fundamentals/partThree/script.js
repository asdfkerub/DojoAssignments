function Person(name){
    this.name = name;
    this.distance_traveled = 0;
    this.say_name = function(){
      console.log(this.name);
    };
    this.say_something = function(word){
      console.log(this.name,'says:', word);
    }
    this.walk = function(){
      this.distance_traveled += 3;
      console.log(this.name,'is walking',this.distance_traveled);
    }
    this.run = function(){
      this.distance_traveled += 10;
      console.log(this.name,'is running');
    }
    this.crawl = function(){
      this.distance_traveled += 1;
      console.log(this.name,'is crawling');
    }
}
function personFactory(name){
  var new_person = new Person(name)
  return new_person;
}

function Ninja(name){
  this.name = name;
  this.cohort = 'Burbank';
  this.belt_level = 'Yellow Belt';
  this.levelUp = function(){
    this.belt_level = 'Red Belt';
  }
}
function ninjaFactory(name){
  var new_ninja = new Ninja(name);
  return new_ninja;
}
var kkkk = ninjaFactory('kerub');
kkkk.levelUp();
console.log(kkkk);
