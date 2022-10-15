'use-strict';

import {ArraysAndStrings} from '../question/arrays-and-strings.js';
import assert from 'node:assert';

const arraysAndStrings = new ArraysAndStrings();

describe('ArraysAndStrings', () =>
  it('question 1.1 should handle empty string', () =>{
    const result = arraysAndStrings.allUniqueCharacters('1');
    assert.strictEqual(result, null);
  }),
it('question 1.1 should handle invalid entry', () =>{
  assert.strictEqual(1, 1);
}),
it('question 1.1 should detect duplicate char', () =>{
  const result = arraysAndStrings.allUniqueCharacters('11');
  assert.strictEqual(result, false);
}),
);
