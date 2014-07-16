function Car(make, model, year, color){
  this.make = make;
  this.model = model
  // do the same for year and color
  this.state = "off"
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};