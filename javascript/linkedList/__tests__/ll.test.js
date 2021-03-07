'use strict';

const LL = require('../lib/linked-list.js');

describe('LINKED LIST', () => {
  it('should create an empty list on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add items to the list', () => {
    let list = new LL();
    let first = 'first';
    let second = 'second';

    list.append(first);
    expect(list.head.value).toEqual(first);

    list.append(second);
    expect(list.head.next.value).toEqual(second);
  });

  it('should return true if searched value is in linked list', () => {
    let list = new LL();
    expect(list.includes('first')).toBeFalsy();
    list.append('first');
    list.append('second');
    expect(list.includes('first')).toBeTruthy();
    expect(list.includes('second')).toBeTruthy();
    expect(list.includes('third')).toBeFalsy();
  });
});
