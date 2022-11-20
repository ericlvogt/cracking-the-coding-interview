'use-strict';

/**
 * Describe how you could use a single array to implement 3 stacks
 */
export class SingleArrayStack {
    constructor (size, numberOfStacks){
        this._stack = [size];
        sizeOfStack = Math.floor(size / numberOfStacks);
        if (sizeOfStack === 0){
            throw new Error(`Size of stack is too small for ${numberOfStacks}`);
        }
        this._stackHeads = [numberOfStacks];
        this._stackBases = [numberOfStacks];
        for (let i = 0; i < numberOfStacks; i++){
            this._stackBases[i] = i * sizeOfStack;
            this._stackHeads[i] = this._stackBases[i];
        }
    }

    pop(index) {
        if (this.isEmpty(index)){
            throw new Error('Stack is empty');
        }
        let result = this._stack[this._stackHeads[index]];
        this._stackHeads[index]--;
        return result;
    }

    push(index, value) {
        if (this.isFull(index)){
            throw new Error('Stack is full');
        }
        this._stack[this._stackHeads[index]] = value;
        this._stackHeads[index]++;
    }

    peek(index) {
        return this._stack[this._stackHeads[index]];
    }

    isEmpty(index) {
        return this._stackHeads[index] === this._stackBases[index]
    }

    isFull(index){
        let nextStackBase;
        if (index + 1 > this._stackHeads.length){
            throw new Error('Index out of range');
        }
        else if(index + 1 === this._stackHeads.length){
            nextStackBase = this._stack.length;
        } else if (this._stackHeads[index] ){
            nextStackBase = this._stackBases[index + 1];
        }
        return this._stackHeads[index] >= nextStackBase;
    }
}
