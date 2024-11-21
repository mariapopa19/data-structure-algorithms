const strings: string[] = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes of storage 

console.log(strings[2]); // O(1)

//push - add an element at the end
strings.push('e'); //O(1)

//pop - removes an element from the end 
strings.pop();
strings.pop(); // O(1)

// undhift - add an element at the beginning
strings.unshift('x'); // O(n)

// splice - add the element in the middle 
strings.splice(2, 0, 'alien') // O(n)

console.log(strings);

// there are static arrays and dynimic arrays 
// when you add a new element in a static array, it's make a copy of the initial array with the element at the end 
// the dynamic array, copy the array, and the moves to another location with more space 
// add a new element to a static array is O(n), end for a dynamic is O(1)

// C++
// int a[20];
// int b[5] {1,2,3,4,5}