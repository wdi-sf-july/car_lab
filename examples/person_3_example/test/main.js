// test/main_test.js
var Person = require("../src/main.js"),
  expect = require("chai").expect;


describe("Person", function(){

  describe("#age", function(){
    it("should be 23", function(){
      var john = new Person("john", 23);
      expect(john.age).to.equal(23);
    });
  });

  describe("#name", function(){
    it("should be \'john\'", function(){
      var john = new Person("john", 23);
      expect(john.name).to.equal("john");
    });
  });
});
