class CrazyQueue {
    private first: string[];
    private last: string[];

    constructor(value: string) {
        this.first = [];
        this.last = [];
    }

    enqueue(value: string) {
        const length: number = this.first.length;

        for(let i=0; i < length; i++) {
            const item = this.first.pop();
            if (item !== undefined) {
                this.last.push(item);
            }
        }

        this.last.push(value);

        return this;
    }

    dequeue() {
        const length = this.last.length;    

        for(let i = 0; i < length; i++) {
            const item = this.last.pop();
            if (item !== undefined) {
                this.first.push(item);
            }
        }

        this.first.pop();

        return this;
    }

    peek() {
        if(this.first.length > 0) {
            return this.first[this.first.length - 1];
        }

        return this.last[0];
    }
}

const myQueueFromStack = new CrazyQueue('InitialValue');
console.log(myQueueFromStack.peek());
myQueueFromStack.enqueue('Joy');
myQueueFromStack.enqueue('Matt');
myQueueFromStack.enqueue('Pavel');
console.log(myQueueFromStack.peek());
console.log("========");
console.log(myQueueFromStack.dequeue());
console.log(myQueueFromStack.dequeue());
console.log(myQueueFromStack.dequeue());
console.log("========");
console.log(myQueueFromStack.peek());

console.log(myQueueFromStack);