function Person(name, age){
  this.name = name;
  this.age = age;
  this.friends = [];
};

// Separate out the befriend into the prototype
Person.prototype.befriend = function(name){
  this.friends.push(name)
};

// Separate out the unfriend method into the prototype
Person.prototype.unfriend = function(name){
  var index = this.friends.indexOf(name);
  this.friends.splice(index, 1);
}




// only try to export if you can
// that way you don't get an error
// if you paste this in the browser
if (module !== undefined && module.exports) {
  module.exports = Person;
}