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

        const result = linkedLists.removeDuplicates();
        
        assert.strictEqual(result.length, values.length);

      });
      it('should return list with a removed duplicate', function() {
        assert.fail();
      });
    });
});