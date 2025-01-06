// Write two functions that finds the factorial and any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number: number): number { // O(n)
    if(number <= 1) {
        return 1;
    } else {
        return number * findFactorialRecursive(number - 1);
    }
}

function findFactorialIterative(number: number): number { // O(n)
    let answer: number = 1;
    for(let i = number; i >= 1; i--) {
        answer *=  i;
    }
    return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));