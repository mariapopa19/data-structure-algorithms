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

class DoublyLinkedListNode {
    value: number;
    next: DoublyLinkedListNode | null;
    prev: DoublyLinkedListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: DoublyLinkedListNode;
    tail: DoublyLinkedListNode;
    length: number;

    constructor(value: number) {
        const newNode = new DoublyLinkedListNode(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number) {
        const newNode = new DoublyLinkedListNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value: number) {
        const newNode = new DoublyLinkedListNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode: DoublyLinkedListNode | null = this.head;
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

        const newNode: DoublyLinkedListNode | null = new DoublyLinkedListNode(value);

        const leader: DoublyLinkedListNode | null = this.traverseToIndex(index-1);
        const follower: DoublyLinkedListNode | null = leader !== null ? leader.next : null;
        if (leader !== null) {
            leader.next = newNode;
        }
        newNode.prev = leader;
        newNode.next = follower;
        if(follower !== null) {
            follower.prev = newNode
        }
        this.length ++;
        return this.printList();
    }

    traverseToIndex(index: number): DoublyLinkedListNode | null {
        //check params
        let counter: number = 0;
        let currentNode:DoublyLinkedListNode|null = this.head;
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

        const leader: DoublyLinkedListNode | null = this.traverseToIndex(index-1);
        const follower: DoublyLinkedListNode | null = leader !== null ? leader.next : null;
        if (leader !== null && follower !== null) {
            leader.next = follower.next;
            leader.prev = follower.prev;
        }
        this.length--;
        return this.printList();
    }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2,99);
myDoublyLinkedList.remove(1);
// console.log(myDoublyLinkedList);
// myDoublyLinkedList.printList();