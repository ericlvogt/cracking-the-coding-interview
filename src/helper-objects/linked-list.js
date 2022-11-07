'use-strict';

/** @class Linked list implementation from Cracking the coding interview */
export class LinkedListNode {
  constructor(next) {
    this.next = next;
  }
  /**
     *
     * @param {LinkedListNode} newNode
     */
  appendToEnd(newNode) {
    let node = this;
    while (node.next != null) {
      node = node.next;
    }
    node.next = newNode;
  }
}
