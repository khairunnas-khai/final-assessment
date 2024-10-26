import { sum } from "./index.js";
import { test } from "node:test";
import assert from "node:assert";

test("should add correctly", () => {
  const operandA = 1;
  const operandB = 1;
  const actualValue = sum(operandA, operandB);
  const expectValue = 2;
  assert.equal(actualValue, expectValue);
});

/**import { test } from 'node:test';
import { sum } from './index.js';
import assert from 'node:assert';

test('sum function returns the correct result', () => {
  // Test case 1: Positive numbers
  assert.strictEqual(sum(2, 3), 5);

  // Test case 2: Negative numbers
  assert.strictEqual(sum(-2, 3), 1);

  // Test case 3: Zero
  assert.strictEqual(sum(0, 0), 0);
}); 
https://www.blackbox.ai/share/586ff1d6-9d93-44c2-bfad-b92edd79a23b
*/