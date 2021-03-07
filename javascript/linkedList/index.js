'use strict';

const LinkedList = require('./lib/linked-list.js');

let ll = new LinkedList();

ll.append('first');
ll.append('second');
ll.includes('first');

console.log(ll);
