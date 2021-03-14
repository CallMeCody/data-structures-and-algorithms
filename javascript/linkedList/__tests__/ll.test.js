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

  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LL();
    expect(list.insertBefore(2, 22)).toEqual(
      'Exception: value not found, newValue not inserted'
    );
    list.append(1);
    list.append(3);
    list.append(3);
    list.append(2);
    list.append(3);
    list.insertBefore(2, 4);
    expect();
  });

  it('Can successfully insert a node after the last node of a linked list', () => {
    let list = new LL();
    expect(list.insertBefore(2, 22)).toEqual(
      'Exception: value not found, newValue not inserted'
    );
    list.append(1);
    list.insertAfter(1, 11);
    expect(list.head.next.value).toEqual(11);
  });

  it('Where k and the length of the list are the same', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.kthFromEnd(0)).toEqual(3);
  });

  it('Where k is not a positive integer', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    expect(list.kthFromEnd(-1)).toEqual('k must be greater than 0');
  });
  it('Where the linked list is of a size 1', () => {
    let list = new LL();
    list.append(1);
    expect(list.kthFromEnd(0)).toEqual(1);
  });
  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    expect(list.kthFromEnd(2)).toEqual(3);
  });
});
