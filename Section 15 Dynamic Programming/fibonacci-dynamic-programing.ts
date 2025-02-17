// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

// recurring version
function fibonacci(n: number): number { //O(n^2)
    if(n < 2) {
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciMaster() { //O(n) - this is a top down 
    let cache: { [key: number]: number } = {};
    return function fib(n: number) { // this is closure, a way to avoid that global scope 
        if(n in cache) {
            return cache[n];
        } else {
            if(n < 2) {
                return n;
            } 
            cache[n] = fib(n-1) + fib(n-2);
            return cache[n];
        }
    }
}

function fibonacciMaster2(n: number) { //O(n) - this solution is called bottom-up 
    let answer = [0, 1];
    for(let i = 2; i <= n; i++){
        answer.push(answer[i-2] + answer[i-1]);
    }
    return answer.pop();
}
const memoization = fibonacciMaster();
fibonacci(7);
console.log(memoization(10));

console.log(fibonacciMaster2(100));