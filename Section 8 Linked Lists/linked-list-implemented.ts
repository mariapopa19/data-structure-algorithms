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

    printList() {
        const array = [];
        let currentNode: LinkedListNode | null = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    }

    insert(index: number, value: number) {
        // check params
        if(index >= this.length) {
            return this.append(value);
        }

        const newNode: LinkedListNode | null = new LinkedListNode(value);

        const leader: LinkedListNode | null = this.traverseToIndex(index-1);
        const holdingPointer: LinkedListNode | null = leader !== null ? leader.next : null;
        if (leader !== null) {
            leader.next = newNode;
        }
        newNode.next = holdingPointer;
        this.length ++;
        return this.printList();
    }

    traverseToIndex(index: number): LinkedListNode | null {
        //check params
        let counter: number = 0;
        let currentNode:LinkedListNode|null = this.head;
        while (counter !== index && currentNode !== null) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index: number) {
        // check params 
        if(index >= this.length || index < 0) {
            return this.printList();
        }

        const leader: LinkedListNode | null = this.traverseToIndex(index-1);
        const holdingPointer: LinkedListNode | null = leader !== null ? leader.next : null;
        if (leader !== null && holdingPointer !== null) {
            leader.next = holdingPointer.next;
        }
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2,99);
myLinkedList.remove(1);
// console.log(myLinkedList);