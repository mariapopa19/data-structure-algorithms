// this is an example without memoization
function addTo80(n: number) {
    console.log('long time');
    return n + 80;
}

addTo80(5); // 85
addTo80(5); // 85
addTo80(5); // 85

// this is an improved vwrsion with cache added

function memoizedAddTo80() {
    let cache: { [key: number]: number } = {};
    return function(n: number) { // this is closure, a way to avoid that global scope 
        if(n in cache) {
            return cache[n];
        } else {
            console.log('long time');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

console.log('1', memoized(5)); 
console.log('2', memoized(5)); 
