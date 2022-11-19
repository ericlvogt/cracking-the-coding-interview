'use-strict';

import {LinkedList} from '../linked-lists/linked-list.js';
import {LinkedLists} from '../linked-lists/linked-lists.js';
import assert from 'node:assert';

const linkedLists = new LinkedLists();

describe('LinkedLists', function() {
  describe('#removeDuplicates', function() {
    it('should return same list when empty', function() {
      const linkedList = new LinkedList();

      const actual = linkedLists.removeDuplicates(linkedList);

      assert.strictEqual(actual.length, 0);
    });
    it('should return same list when there are no duplicates', function() {
      const values = [1, 2, 3, 4, 5];

      const linkedList = new LinkedList(values);

      const actual = linkedLists.removeDuplicates(linkedList);

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

      const actual = linkedLists.removeDuplicates(linkedList);

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

      const actual = linkedLists.removeDuplicatesNoBuffer(linkedList);

      assert.strictEqual(actual.length, 0);
    });
    it('should return same list when there are no duplicates', function() {
      const values = [1, 2, 3, 4, 5];

      const linkedList = new LinkedList(values);

      const actual = linkedLists.removeDuplicatesNoBuffer(linkedList);

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

      const actual = linkedLists.removeDuplicatesNoBuffer(linkedList);

      assert.strictEqual(actual.length, expected.length);

      let node = actual;
      for (const value of expected) {
        assert.strictEqual(node.value, value);
        node = node.next;
      }
    });
  });
});
