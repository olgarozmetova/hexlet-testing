import { strict as assert } from 'node:assert';
import set from '../src/set.js';

const obj = {};

set(obj, 'key1', 'value1');
assert.strictEqual(obj.key1, 'value1');

set(obj, 'key1', 'next value');
assert.strictEqual(obj.key1, 'value1');

console.log('Все тесты пройдены!');
