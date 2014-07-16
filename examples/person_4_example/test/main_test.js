//test/main_test.js

// test/main_test.js
var Person = require("../src/main.js"),
  expect = require("chai").expect;

describe("Person", function(){

  var john;
  beforeEach(function(){
    // create a new john object each time
    john = new Person('john', 23);
  });

  describe("#friends", function(){
    it("should be initially be empty ", function(){
      // we need the eql to use `==` 
      // because [] === [] //=> false
      // but [] == [] //=> true
      expect(john.friends).to.eql([]);
    });
  });

  describe("#befriend", function(){
    it("should add a friend", function(){
      john.befriend('jane');
      expect(john.friends).to.eql(['jane']);
    });
  });

  describe("#unfriend", function(){
    it("should remove a friend", function(){
      john.befriend('jane');
      john.unfriend('jane');
      expect(john.friends).to.eql([]);
    });
  });
});