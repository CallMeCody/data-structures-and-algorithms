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
    expect(list.print()).toEqual([1, 3, 3, 4, 2, 3]);
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
});
