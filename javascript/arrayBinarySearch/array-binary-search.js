'use strict';

function binarySearch(arr, key){
  let start = 0;
  let end = arr.length - 1;

  while (start <= end){
    let mid = Math.floor((start + end) / 2);

    if(key === arr[mid]){
      return mid;
    }
    if(key < arr[mid]){
      end = mid - 1;
    }
    if(key > arr[mid]){
      start = mid + 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
