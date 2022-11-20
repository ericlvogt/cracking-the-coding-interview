'use-strict';

/**
 * Linked list implementation from Cracking the coding interview
 */
export class LinkedList {
  next;
  value;

  /**
   *
   * @param {any[]} list
   */
  constructor(list = []) {
    for (const item of list) {
      this.appendToEnd(item);
    }
  }

  [Symbol.iterator](){
    let node;
    let firstNode = this;
    return {
      next(){
        if(!firstNode.value){
          return {value: undefined, done: true};
        }
        if(!node){
          node = firstNode;
          return {value: node, done: false};
        }
        if(node.next){
          node = node.next;
          return {value: node, done: false};
        }
        return {value: node, done: true};
      }

    }
  }

  /**
   *
   * @return {LinkedList}
   */
  clone() {
    const result = new LinkedList();
    if (this.length === 0) {
      return result;
    }
    
    for (let node of this){
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
    for (let node of this){
      result++;
    }
    return result;
  }
}
