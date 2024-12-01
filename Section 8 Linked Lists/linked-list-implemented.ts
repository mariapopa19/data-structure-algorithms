// 10 -->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class LinkedListNode {
    value: number;
    next: LinkedListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: LinkedListNode;
    tail: LinkedListNode;
    length: number;

    constructor(value: number) {
        const newNode = new LinkedListNode(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number) {
        const newNode = new LinkedListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value: number) {
        const newNode = new LinkedListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);