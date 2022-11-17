'use-strict';

/**
 * Linked list implementation from Cracking the coding interview
 */
export class LinkedList {
  
  next;
  value;

  static createFromList(list){
    let result = new LinkedList();
    for (const item of list) {
      result.appendToEnd(item);
    }
    return result;
  }

  static createFromLinkedList(linkedList){
    let result = new LinkedList();
    for (let node = linkedList; node !== undefined; node = node.next) {
      result.appendToEnd(node.value);
    }
    return result;
  }

  /**
     *
     * @param {object} value
     */
  appendToEnd(value) {
    if (value === undefined) {
      throw new Error('cannot add value undefined to linked list');
    }

    if (this.value === undefined) {
      this.value = value;
      return;
    }

    if (this.next === undefined) {
      this.next = new LinkedList();
    }
    this.next.appendToEnd(value);
  }

  /**
   *
   */
  get length() {
    let result = 0;
    if (this.value !== undefined) {
      result++;
    }
    let node = this.next;
    while (node !== undefined) {
      node = node.next;
      result++;
    }
    return result;
  }
}
