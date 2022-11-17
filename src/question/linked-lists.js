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
    if (list.length == 0){
      return new LinkedList();
    }

    const uniqueValues = [];
    for (let node = list; node !== undefined; node = node.next) {
      if (!uniqueValues.includes(node.value)) {
        uniqueValues.push(node.value);
      }
    }
    return LinkedList.createFromList(uniqueValues);
  };

  /**
   * 2.1
   * Write code to remove duplicates from an unsorted linked list without a temporary buffer
   * @method
   * @param {LinkedList} list
   * @return {LinkedList}
   */
   removeDuplicatesNoBuffer(list) {
    
    return new LinkedList();
  };
}
