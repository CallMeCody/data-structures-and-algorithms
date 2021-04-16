'use strict';


/**
 * Normal Tree stuff!
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }


  preOrder() {

    let current = this.root;
    const arr = [];
    const preOrder = (node) => {
      arr[arr.length] = node.value;
      if (node.left) { preOrder(node.left); }
      if (node.right) { preOrder(node.right); }
    };

    preOrder(current);
    return arr;


  }

  postOrder() {

    let current = this.root;
    const arr = [];
    const postOrder = (node) => {
      if (node.left) { postOrder(node.left); }
      if (node.right) { postOrder(node.right); }
      arr[arr.length] = node.value;
    };

    postOrder(current);
    return arr;


  }


  inOrder() {

    let current = this.root;
    const arr = [];
    const inOrder = (node) => {
      if (node.left) { inOrder(node.left); }
      arr[arr.length] = node.value;
      if (node.right) { inOrder(node.right); }
    };

    inOrder(current);
    return arr;


  }


  maxValue() {
    let current = this.root;
    if (!current) { throw 'error'; }

    const findMax = (node) => {
      if (!node) { return; }
      let value = node.value;
      let leftValue = findMax(node.left);
      let rightValue = findMax(node.right);
      if (leftValue > value) { value = leftValue; }
      if (rightValue > value) { value = rightValue; }
      return value;
    };
    return findMax(current);
  }
}

module.exports = {
  Node,
  Tree
};