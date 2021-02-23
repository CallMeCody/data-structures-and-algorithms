'use strict';

const insertShiftArray = require('../array-shift.js');

describe('Array Shift', () => {
  it('should insert number into middle of the array', () => {
    let myArray = insertShiftArray([1, 2, 4, 5], 3);
    let expected = [1, 2, 3, 4, 5];
    insertShiftArray(myArray);
    expect(myArray).toEqual(expected);
  });

});
