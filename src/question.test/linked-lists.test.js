'use-strict';

import { LinkedList } from "../helper-objects/linked-list.js";
import { LinkedLists } from "../question/linked-lists.js";
import assert from 'node:assert';

const linkedLists = new LinkedLists();

describe('LinkedLists', function() {
    describe('#removeDuplicates', function() {
      it('should return same list when there are no duplicates', function() {
        const values = [1, 2, 3, 4, 5];

        let linkedList = new LinkedList();
        for(let value in values){
          linkedList.appendToEnd(value);
        }

        const actual = linkedLists.removeDuplicates(linkedList);
        
        assert.strictEqual(actual.length, values.length);

        let node = linkedList;
        for(let value in values){
          assert.strictEqual(node.value, value)
          node = node.next;
        }

      });
      it('should return list with a removed duplicate', function() {
        const values = [1, 3, 2, 2, 4, 5, 3, 2];
        const expected = [1, 3, 2, 4, 5];

        let linkedList = new LinkedList();
        for(let value in values){
          linkedList.appendToEnd(value);
        }

        const actual = linkedLists.removeDuplicates(linkedList);

        assert.strictEqual(actual.length, expected.length);

        let node = linkedList;
        for(let value in expected){
          assert.strictEqual(node.value, value)
          node = node.next;
        }
      });
    });
});