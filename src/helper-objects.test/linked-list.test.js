'use-strict';

import {LinkedList} from '../helper-objects/linked-list.js';
import assert from 'node:assert';

describe('LinkedList', function() {
    describe('#appendToEnd', function() {
      it('should append item to end of list', function() {
        const first = 'first';
        const second = 'second';
        const third = 'third';
        let linkedList = new LinkedList();
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
    describe('#length', function(){
        it('should return 0 if no values have been added', function() {
            let linkedList = new LinkedList();
            assert.strictEqual(linkedList.length, 0);
        });
        it('should return 1 if a value has been added', function() {
            let linkedList = new LinkedList();
            linkedList.appendToEnd('first item');
            assert.strictEqual(linkedList.length, 1);
        });
        it('should return number of values in list', function() {
            let linkedList = new LinkedList();
            const values = [1, 2];

            for (const value in values){
                linkedList.appendToEnd(value);
            }
            assert.strictEqual(linkedList.length, values.length);
        });
    });
});