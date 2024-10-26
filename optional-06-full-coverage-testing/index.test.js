import { test } from 'node:test';
import { sum } from './index.js';

test('sum function returns the correct result for positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 20), 30);
});

test('sum function returns the correct result for negative numbers', () => {
  assert.strictEqual(sum(-2, -3), -5);
  assert.strictEqual(sum(-10, -20), -30);
});

test('sum function returns the correct result for mixed numbers', () => {
  assert.strictEqual(sum(2, -3), -1);
  assert.strictEqual(sum(-10, 20), 10);
});

test('sum function returns the correct result for zero', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(2, 0), 2);
  assert.strictEqual(sum(0, 3), 3);
});

test('sum function throws an error when input is not a number', () => {
  assert.throws(() => sum('a', 3), TypeError);
  assert.throws(() => sum(2, 'b'), TypeError);
  assert.throws(() => sum('a', 'b'), TypeError);
});