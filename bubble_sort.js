var mixedUp = ["d", "b", "a", "c"];

function bubbleSort(mixedUp) {
  for(var i = 0; i < mixedUp.length; i++) {
    for(var j = 1; j < mixedUp.length; j++) {
      if(mixedUp[j] < mixedUp[j - 1]) {
        var temp = mixedUp[j];
        mixedUp[j] = mixedUp[j - 1];
        mixedUp[j - 1] = temp;
      }
    }
  }
  return mixedUp;
};

module.exports = bubbleSort
