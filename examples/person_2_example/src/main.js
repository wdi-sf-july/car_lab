var john = {
  name: "john",
  age: 23,
  friends: [],
  befriend: function(name){
    this.friends.push(name)
  },
  unfriend: function(name){
    var index = this.friends.indexOf(name);
    this.friends.splice(index, 1);
  }
};

// only try to export if you can
// that way you don't get an error
// if you paste this in the browser
if (module !== undefined && module.exports) {
  module.exports = john;
}