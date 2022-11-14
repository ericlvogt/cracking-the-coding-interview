'use-strict';

import {LinkedList} from '../helper-objects/linked-list.js';
import assert from 'node:assert';

describe('LinkedList', function() {
    describe('#appendToEnd', function() {
      it('should append item to end of list', function() {
        const first = 'first';
        const second = 'second';
        const third = 'third';
        let linkedList = new LinkedList(first);

        assert.strictEqual(linkedList.item, first);
        assert.strictEqual(linkedList.next, undefined);

        linkedList.appendToEnd(second);

        assert.strictEqual(linkedList.item, first);
        assert.strictEqual(linkedList.next.item, second);
        assert.strictEqual(linkedList.next.next, undefined);

        linkedList.appendToEnd(third);

        assert.strictEqual(linkedList.item, first);
        assert.strictEqual(linkedList.next.item, second);
        assert.strictEqual(linkedList.next.next.item, third);
        assert.strictEqual(linkedList.next.next.next, undefined);
      });
    });
});