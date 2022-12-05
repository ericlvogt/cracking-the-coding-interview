'use-strict';

/**
 * Describe how you could use a single array to implement 3 stacks
 */
export class SingleArrayStack {
    #stack
    #stackHeads
    #stackBases

    /**
     * 
     * @param {number} sizeOfStack 
     * @param {number} numberOfStacks 
     */
    constructor (sizeOfStack, numberOfStacks){
        this.#stack = Array(sizeOfStack * numberOfStacks);
        this.#stackHeads = Array(numberOfStacks);
        this.#stackBases = Array(numberOfStacks);
        for (let i = 0; i < numberOfStacks; i++){
            this.#stackBases[i] = i * sizeOfStack;
            this.#stackHeads[i] = this.#stackBases[i];
        }
    }

    pop(index) {
        if (this.isEmpty(index)){
            throw new Error('Stack is empty');
        }
        this.#stackHeads[index]--;
        let result = this.#stack[this.#stackHeads[index]];
        return result;
    }

    push(index, value) {
        if (this.isFull(index)){
            throw new Error('Stack is full');
        }
        this.#stack[this.#stackHeads[index]] = value;
        this.#stackHeads[index]++;
    }

    peek(index) {
        //head points to index after last entered
        return this.#stack[this.#stackHeads[index] - 1];
    }

    isEmpty(index) {
        return this.#stackHeads[index] === this.#stackBases[index]
    }

    isFull(index){
        let nextStackBase;
        if (index + 1 > this.#stackHeads.length){
            throw new Error('Index out of range');
        } else if(index + 1 === this.#stackHeads.length){
            nextStackBase = this.#stack.length;
        } else {
            nextStackBase = this.#stackBases[index + 1];
        }
        return this.#stackHeads[index] === nextStackBase;
    }
}
