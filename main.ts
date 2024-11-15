function compressBoxesTwice(boxes: string[], boxes2: string[]): void {
    boxes.forEach(function (boxes:string) {
        console.log(boxes);
    });

    boxes2.forEach((boxes: string) => {
        console.log(boxes);
    });
};

//O(a + b) -> O(a*b)

const boxes: number[] = ['a','b','c','d','e'];

let logAllPairsOfArray = ((array: string[]) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
});
 
// logAllPairsOfArray(boxes)

// O(n^2)

function printAllNumbersThenAllPairSums(numbers:number[]) {
    console.log('these are the numbers:');
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log('and these are their sums');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairSums([1,2,3,4,5]);

// O(n^2)


// Rule Book
// Rule 1: Worst Case
// Rule 2: Remove Constants
// Rule 3: Different terms for inputs 
// Rule 4: Drop Non Dominants
