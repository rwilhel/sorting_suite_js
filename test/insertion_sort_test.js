const assert = require('chai').assert;
const insertionSort = require('../insertion_sort');

it('is a function', function() {
  assert.isFunction(insertionSort, 'this is a function');
});
