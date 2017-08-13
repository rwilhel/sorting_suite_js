const assert = require('chai').assert;
const bubbleSort = require('../bubble_sort');

it('is a function', function() {
  assert.isFunction(bubbleSort, 'this is a function');
});

it('can sort an array of 2 letters', function() {
  assert.deepEqual(bubbleSort(["z", "a"]), ["a", "z"]);
});

it('can sort an array of 4 letters', function() {
  assert.deepEqual(bubbleSort(["z", "e", "m", "b"]), ["b", "e", "m", "z"]);
});

it('can sort an array of 2 numbers', function() {
  assert.deepEqual(bubbleSort([8, 3]), [3, 8]);
})

it('can sort an array of 4 numbers', function() {
  assert.deepEqual(bubbleSort([23, 3, 54, 14]), [3, 14, 23, 54]);
})

it('can sort an array of 10 letters', function() {
  assert.deepEqual(bubbleSort(["a", "s", "r", "m", "b", "d", "y", "z", "i", "q"]), ["a", "b", "d", "i", "m", "q", "r", "s", "y", "z"]);
})
