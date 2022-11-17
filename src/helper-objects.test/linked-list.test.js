'use-strict';

import {LinkedList} from '../helper-objects/linked-list.js';
import assert from 'node:assert';

describe('LinkedList', function() {
  describe('#constructor', function() {
    it('should create from empty list', function() {
      const list = [];
      const actual = new LinkedList(list);
      assert.strictEqual(actual.length, list.length);
    });
    it('should create from list', function() {
      const list = ['a', 2, 22, 'c'];
      const actual = LinkedList.createFromList(list);
      assert.strictEqual(actual.length, list.length);
      assert.strictEqual(actual.value, list[0]);
      assert.strictEqual(actual.next.value, list[1]);
      assert.strictEqual(actual.next.next.value, list[2]);
      assert.strictEqual(actual.next.next.next.value, list[3]);
    });
    it('should create from linked list', function() {
      const list = ['a', 2, 22, 'c'];
      const linkedList = LinkedList.createFromList(list);
      const actual = LinkedList.createFromLinkedList(linkedList);
      assert.strictEqual(actual.length, list.length);
      assert.strictEqual(actual.value, list[0]);
      assert.strictEqual(actual.next.value, list[1]);
      assert.strictEqual(actual.next.next.value, list[2]);
      assert.strictEqual(actual.next.next.next.value, list[3]);
    });
  });
  describe('#appendToEnd', function() {
    it('should append item to end of list', function() {
      const first = 'first';
      const second = 'second';
      const third = 'third';
      const linkedList = new LinkedList();
      linkedList.appendToEnd(first);

      assert.strictEqual(linkedList.value, first);
      assert.strictEqual(linkedList.next, undefined);

      linkedList.appendToEnd(second);

      assert.strictEqual(linkedList.value, first);
      assert.strictEqual(linkedList.next.value, second);
      assert.strictEqual(linkedList.next.next, undefined);

      linkedList.appendToEnd(third);

      assert.strictEqual(linkedList.value, first);
      assert.strictEqual(linkedList.next.value, second);
      assert.strictEqual(linkedList.next.next.value, third);
      assert.strictEqual(linkedList.next.next.next, undefined);
    });
  });
  describe('#length', function() {
    it('should return 0 if no values have been added', function() {
      const linkedList = new LinkedList();
      assert.strictEqual(linkedList.length, 0);
    });
    it('should return 1 if a value has been added', function() {
      const linkedList = new LinkedList();
      linkedList.appendToEnd('first item');
      assert.strictEqual(linkedList.length, 1);
    });
    it('should return number of values in list', function() {
      const values = [1, 2];
      const linkedList = LinkedList.createFromList(values);
      assert.strictEqual(linkedList.length, values.length);
    });
  });
});
