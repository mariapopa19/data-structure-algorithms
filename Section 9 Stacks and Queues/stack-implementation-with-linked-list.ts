class NodeStacks {
    private readonly value: string | number;
    public next: NodeStacks | null;
    constructor(value: string | number) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    private top: NodeStacks | null;
    private bottom: NodeStacks | null;
    private length: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        // see the top element of the stack 
        return this.top;
    }

    push(value: string | number) {
        const newNode = new NodeStacks(value);
        if(this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;

        return this;
    }

    pop() {
        if(!this.top) {
            return null;
        }

        if(this.top === this.bottom) {
            this.bottom = null;
        }

        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;

        return this;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.peek());
myStack.pop();
myStack.pop();
console.log(myStack);