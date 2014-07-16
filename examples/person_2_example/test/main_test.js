// test/main_test.js
var john = require("../src/main.js"),
  expect = require("chai").expect;

describe("john", function(){

  beforeEach(function(){
    // we want to make friends is 
    // empty before each test
    john.friends = [];
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