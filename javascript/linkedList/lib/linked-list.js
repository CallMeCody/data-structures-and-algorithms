'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
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

  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
    return this;
  }

  insertBefore(value, newValue){
    if(!this.includes(value)){
      return 'Exception: value not found, newValue not inserted';
    }
    if(this.head.value === value){
      this.insert(newValue);
      return this;
    }
    let node = new Node(newValue);
    let current = this.head;
    while(current.next){
      if(current.next.value === value){
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue){
    if(!this.includes(value)){
      return 'Exception: value not found, newValue not inserted';
    }
    let node = new Node(newValue);
    let current = this.head;
    while(current){
      if(current.value === value){
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
  }

  kthFromEnd(k){
    let counter = 0;
    let current = this.head;
    if(k < 0){
      return 'k must be greater than 0';
    }
    while(current.next){
      current = current.next;
      counter++;
    }
    if (k > counter){
      return 'k is greater than length of linked list';
    }
    let kFinder = counter - k;
    counter = 0;
    current = this.head;
    while(counter < kFinder){
      current = current.next;
      counter++;
    }
    return current.value;
  }
}

module.exports = LinkedList;
