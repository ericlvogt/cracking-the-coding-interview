'use-strict';

import {SingleArrayStack} from '../stacks-and-queues/single-array-stack.js';
import assert from 'node:assert';

describe('SingleArrayStack', () => {
  describe('#constructor', () =>{
    it('should return a class with 3 stacks of size 1', () => {
      const actual = new SingleArrayStack(1, 3);

      actual.push(0, 1);
      actual.push(1, 2);
      actual.push(2, 3);

      assert.strictEqual(actual.peek(0), 1);
      assert.strictEqual(actual.isFull(0), true);
      assert.strictEqual(actual.peek(1), 2);
      assert.strictEqual(actual.isFull(1), true);
      assert.strictEqual(actual.peek(2), 3);
      assert.strictEqual(actual.isFull(2), true);
    });
    it('should return a class with 1 stack of size 3', () => {
      const actual = new SingleArrayStack(3, 1);

      actual.push(0, 1);
      actual.push(0, 2);
      actual.push(0, 3);

      assert.strictEqual(actual.isFull(0), true);
      assert.strictEqual(actual.pop(0), 3);
      assert.strictEqual(actual.pop(0), 2);
      assert.strictEqual(actual.pop(0), 1);
    })
  });
  describe('#pop', () => {
    it('should return top stack and remove item from top of stack', () => {
      const stack = new SingleArrayStack(1, 1);
      const expected = 0;
      stack.push(0, expected);
      
      const actual = stack.pop(0);

      assert.strictEqual(stack.isEmpty(), true)
      assert.strictEqual(actual, expected);
    });
  });
  describe('#push', () => {
    it('should return true for an empty string', () => {
      const stack = new SingleArrayStack(1, 1);
      const expected = 'expected';

      stack.push(0, expected);
      const actual = stack.peek(0);

      assert.strictEqual(actual, expected);
    });
  });
  describe('#peek', () => {
    it('should return top of stack', () => {
      const stack = new SingleArrayStack(1, 1);
      const expected = 'expected';

      stack.push(0, expected);
      const actual = stack.peek(0);

      assert.strictEqual(actual, expected);
    });
  });
  describe('#isEmpty', () => {
    it('should return true for empty stack', () => {
      const stack = new SingleArrayStack(1, 1);
      
      assert.strictEqual(stack.isEmpty(0), true);
    });
    it('should return false for populated stack', () => {
      const stack = new SingleArrayStack(1, 1);

      stack.push(0,  'content');

      assert.strictEqual(stack.isEmpty(0), false);
    })
  });
  describe('isFull', () => {
    it('should return true for full stack', () => {
      const stack = new SingleArrayStack(1, 1);

      stack.push(0,  'content');
      
      assert.strictEqual(stack.isFull(0), true);
    });
    it('should return false for not full stack', () => {
      const stack = new SingleArrayStack(2, 1);

      stack.push(0,  'content');

      assert.strictEqual(stack.isFull(0), false);
    })
  });
});

