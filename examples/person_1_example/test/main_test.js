// test/main_test.js
var john = require("../src/main.js"),
  expect = require("chai").expect;

describe("john", function(){

  describe("#age", function(){
    it("should be 23", function(){
      expect(john.age).to.equal(23);
    });
  });

  describe("#name", function(){
    it("should be \'john\'", function(){
      expect(john.name).to.equal("john");
    });
  });
});