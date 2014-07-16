var john = {
  name: "john",
  age: 23
}

// only try to export if you can
// that way you don't get an error
// if you paste this in the browser
if (module !== undefined && module.exports) {
  module.exports = john;
}