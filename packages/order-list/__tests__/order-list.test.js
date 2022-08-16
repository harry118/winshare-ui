'use strict';

const orderList = require('..');
const assert = require('assert').strict;

assert.strictEqual(orderList(), 'Hello from orderList');
console.info('orderList tests passed');
