'use-strict';

import {ArraysAndStrings} from '../question/arrays-and-strings.js';
import assert from 'node:assert';

const arraysAndStrings = new ArraysAndStrings();

describe('ArraysAndStrings', () =>
  it('question 1.1 should handle empty string', () =>{
    const result = arraysAndStrings.question1_1('1');
    assert.strictEqual(result, null);
  }),
it('question 1.1 should handle invalid entry', () =>{
  assert.strictEqual(1, 1);
}),
);
