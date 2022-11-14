'use-strict';

/** @class Linked list implementation from Cracking the coding interview */
export class LinkedList {
  next;
  item;
  constructor(item) {
    this.item = item;
  }

  /**
     *
     * @param {object} item
     */
  appendToEnd(item) {
    let newNode = new LinkedList(item);
    let node = this;
    while (node.next !== undefined) {
      node = node.next;
    }
    node.next = newNode;
  }
}
