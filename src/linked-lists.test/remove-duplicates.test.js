'use-strict';

import {LinkedList} from '../linked-lists/linked-list.js';
import LinkedListHelper from '../linked-lists/remove-duplicates.js';
import assert from 'node:assert';

describe('LinkedLists', function() {
  describe('#removeDuplicates', function() {
    it('should return same list when empty', function() {
      const linkedList = new LinkedList();

      const actual = LinkedListHelper.removeDuplicates(linkedList);

      assert.strictEqual(actual.length, 0);
    });
    it('should return same list when there are no duplicates', function() {
      const values = [1, 2, 3, 4, 5];

      const linkedList = new LinkedList(values);

      const actual = LinkedListHelper.removeDuplicates(linkedList);

      assert.strictEqual(actual.length, values.length);

      let node = linkedList;
      for (const value of values) {
        assert.strictEqual(node.value, value);
        node = node.next;
      }
    });
    it('should return list with a removed duplicate', function() {
      const values = [1, 3, 2, 2, 4, 5, 3, 2];
      const expected = [1, 3, 2, 4, 5];

      const linkedList = new LinkedList(values);

      const actual = LinkedListHelper.removeDuplicates(linkedList);

      assert.strictEqual(actual.length, expected.length);

      let node = actual;
      for (const value of expected) {
        assert.strictEqual(node.value, value);
        node = node.next;
      }
    });
  });
  describe('#removeDuplicatesNoBuffer', function() {
    it('should return same list when empty', function() {
      const linkedList = new LinkedList();

      const actual = LinkedListHelper.removeDuplicatesNoBuffer(linkedList);

      assert.strictEqual(actual.length, 0);
    });
    it('should return same list when there are no duplicates', function() {
      const values = [1, 2, 3, 4, 5];

      const linkedList = new LinkedList(values);

      const actual = LinkedListHelper.removeDuplicatesNoBuffer(linkedList);

      assert.strictEqual(actual.length, values.length);

      let node = linkedList;
      for (const value of values) {
        assert.strictEqual(node.value, value);
        node = node.next;
      }
    });
    it('should return list with a removed duplicate', function() {
      const values = [1, 3, 2, 2, 4, 5, 3, 2];
      const expected = [1, 3, 2, 4, 5];

      const linkedList = new LinkedList(values);

      const actual = LinkedListHelper.removeDuplicatesNoBuffer(linkedList);

      assert.strictEqual(actual.length, expected.length);

      let node = actual;
      for (const value of expected) {
        assert.strictEqual(node.value, value);
        node = node.next;
      }
    });
  });
});
