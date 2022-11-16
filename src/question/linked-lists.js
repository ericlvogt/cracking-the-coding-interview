'use-strict';

import {LinkedList} from '../helper-objects/linked-list.js';

/** @class Chapter 2 Linked Lists */
export class LinkedLists {
  /**
   * 2.1
   * Write code to remove duplicates from an unsorted linked list
   * @method
   * @param {LinkedList} list 
   * @returns {LinkedList}
   */
  removeDuplicates(list) {
    let uniqueValues = [];
    for(let node = list; node !== undefined; node = node.next){
      if(node.value !== undefined && !uniqueValues.includes(node.value)){
        uniqueValues.push(node.value);
      }
    }
    return new LinkedList(uniqueValues);
  };
}
