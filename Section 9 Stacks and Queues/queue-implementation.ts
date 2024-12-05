class QueueNode {
    private readonly value: number | string;
    public next: QueueNode | null;
    constructor(value: number | string) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    private first: QueueNode | null;
    private last: QueueNode | null;
    private length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0
    }

    peek() {
        return this.first;
    }

    enqueue(value: number | string) {
        const newNode = new QueueNode(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {          
            this.last = newNode;
            this.last.next = newNode;
        }

        this.length++;

        return this;
    }

    dequeue() {
        if(!this.first) {
            return null;
        }

        if(this.first === this.last) {
            this.last = null;
        }

        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;

        return holdingPointer;

    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue);
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue); 