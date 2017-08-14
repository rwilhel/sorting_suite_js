var mixedUp = ["d", "b", "a", "c"];

function insertionSort(mixedUp) {
  var length = mixedUp.length;
  for(var i = 1; i < length; i++) {
    var temp = mixedUp[i];
    for(var j = i - 1; j >= 0; j--) {
      if (mixedUp[j] > temp) {
        mixedUp[j + 1] = mixedUp[j];
      }
      else {
        break;
      }
    }
    mixedUp[j + 1] = temp;
  }
  return mixedUp;
}

module.exports = insertionSort
