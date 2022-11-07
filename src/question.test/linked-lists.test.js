'use-strict';

import { LinkedLists } from '../question/linked-lists.js';
import { LinkedListNode } from "../helper-objects/linked-list";
import assert from 'node:assert';
import { link } from 'node:fs';

describe('LinkedLists', function() {
    describe('#removeDuplicates', function() {
      it('should return same list when no duplicates', function() {
        const first = new LinkedListNode();
        const second = new LinkedListNode();
        const third = new LinkedListNode();
        first.appendToEnd(second);
        first.appendToEnd(third);
        assert.strictEqual(result, true);
      });
    });
});