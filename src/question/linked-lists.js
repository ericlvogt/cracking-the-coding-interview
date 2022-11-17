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
    return new LinkedList(uniqueValues);
  };

  /**
   * 2.1
   * Write code to remove duplicates from an unsorted linked list without a temporary buffer
   * @method
   * @param {LinkedList} list
   * @return {LinkedList}
   */
   removeDuplicatesNoBuffer(list) {
    let result = list.clone();
    for(let node = result; node !== undefined; node = node.next){
      for(let nodeToCompare = node; nodeToCompare.next !== undefined; nodeToCompare = nodeToCompare.next){
        if (node.value === nodeToCompare.next.value){
          if(nodeToCompare.next.next === undefined){
            nodeToCompare.next = undefined;
            break;
          } else{
            nodeToCompare.next = nodeToCompare.next.next;
          }
          
        }
      }
    }
    return result;
  };
}
