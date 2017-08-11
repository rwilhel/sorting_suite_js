const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;

it('should sort an array', function() {
  var mixedUp = ["z", "m", "b", "e"];
  var sorted = bubbleSort(mixedUp);

  expect(sorted[0]).toEqual("b");
  expect(sorted[1]).toEqual("e");
  expect(sorted[2]).toEqual("m");
  expect(sorted[3]).toEqual("z");
});
