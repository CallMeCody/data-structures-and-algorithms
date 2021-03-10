'use strict';

const LinkedList = require('./lib/linked-list.js');

let ll = new LinkedList();

ll.insert('first');
ll.insert('second');
ll.includes('first');

console.log(ll);
