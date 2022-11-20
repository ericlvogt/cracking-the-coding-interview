'use-strict';

import {LinkedList} from './linked-list.js';

/**
 * 2.1
 * Write code to remove duplicates from an unsorted linked list without a
 * temporary buffer
 */
const removeDuplicates = (list) => {
  if (list.length == 0) {
    return new LinkedList();
  }

  const uniqueValues = [];
  for (let node of list) {
    if (!uniqueValues.includes(node.value)) {
      uniqueValues.push(node.value);
    }
  }
  return new LinkedList(uniqueValues);
};

/**
 * 2.1
 * Write code to remove duplicates from an unsorted linked list without a
 * temporary buffer
 */
const removeDuplicatesNoBuffer = (list) => {
  const result = list.clone();
  for (let node of result) {
    for (let compareNode = node; compareNode.next !== undefined; compareNode = compareNode.next) {
      if (node.value === compareNode.next.value) {
        if (compareNode.next.next === undefined) {
          compareNode.next = undefined;
          break;
        } else {
          compareNode.next = compareNode.next.next;
        }
      }
    }
  }
  return result;
};

export default { removeDuplicates, removeDuplicatesNoBuffer };
