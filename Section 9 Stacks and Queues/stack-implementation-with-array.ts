class StackArray {
    private readonly array: Array<string | number>;

    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length-1];
    }

    push(value: string | number) {
        this.array.push(value);
        return this;
    }

    pop() {
       this.array.pop();
        return this;
    }
}

const myStackArray = new StackArray();
myStackArray.push('google');
myStackArray.push('udemy');
myStackArray.push('discord');
console.log(myStackArray.peek());
myStackArray.pop();
myStackArray.pop();
console.log(myStackArray);