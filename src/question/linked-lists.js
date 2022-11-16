'use-strict';

import {LinkedList} from '../helper-objects/linked-list.js';

/** Chapter 2 Linked Lists */
export class LinkedLists {
  /**
   * 2.1
   * Write code to remove duplicates from an unsorted linked list
   * @method
   * @param {LinkedList} list
   * @return {LinkedList}
   */
  removeDuplicates(list) {
    const uniqueValues = [];
    for (let node = list; node !== undefined; node = node.next) {
      if (node.value !== undefined && !uniqueValues.includes(node.value)) {
        uniqueValues.push(node.value);
      }
    }
    return new LinkedList(uniqueValues);
  };
}
