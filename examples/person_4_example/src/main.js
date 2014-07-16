function Person(name, age){
  this.name = name;
  this.age = age;
  this.friends = [];

  this.befriend = function(name){
    this.friends.push(name)
  };
  
  this.unfriend = function(name){
    var index = this.friends.indexOf(name);
    this.friends.splice(index, 1);
  }
};



// only try to export if you can
// that way you don't get an error
// if you paste this in the browser
if (module !== undefined && module.exports) {
  module.exports = Person;
}