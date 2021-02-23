'use strict';

function arrayShift(arr, num) {
  let newArray = [];
  let length = arr.length;
  for( let i = 0; i < length + 1; i++) {
    if (i < Math.ceil(length / 2)){
      newArray[i] = arr[i];
    }
    if (i === Math.ceil(length / 2)) {
      newArray[i] = num;
    }
    if (i > Math.ceil(length / 2)) {
      newArray[i] = arr[i - 1];
    }
  }
  return newArray;
}

module.exports = arrayShift;
