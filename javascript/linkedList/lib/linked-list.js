'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    return this;
  }

  includes(value) {
    if(!this.head) {
      return false;
    }
    let current = this.head;
    while(current) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    
  }
}

module.exports = LinkedList;
