function VehicleConstructor(name,wheels,passenger,speed){
  if(!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passenger,speed);
  }
  var self = this;
  var vin = Math.floor((Math.random() * 99999) + 1);
  this.distance_travelled = 0;
  this.name = name;
  this.wheels = wheels;
  this.passnger = passenger;
  this.speed = speed;
}
VehicleConstructor.prototype.makeNoise = function(){
  console.log('VRROOOMM.');
  return this;
}
VehicleConstructor.prototype.move = function(){
  this.distance_travelled += this.speed;
  this.makeNoise();
  return this;
}
VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distance_travelled);
  return this;
}
var car = new VehicleConstructor('car', 4, 1,15);
car.move().move().move().checkMiles().move().move().move().checkMiles();
