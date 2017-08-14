const assert = require('chai').assert;
const insertionSort = require('../insertion_sort');

it('is a function', function() {
  assert.isFunction(insertionSort, 'this is a function');
});

it('can sort an array of 2 letters', function() {
  assert.deepEqual(insertionSort(["z", "a"]), ["a", "z"]);
});

it('can sort an array of 4 letters', function() {
  assert.deepEqual(insertionSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"]);
});

it('can sort an array of 2 numbers', function() {
  assert.deepEqual(insertionSort([8, 2]), [2, 8]);
});
