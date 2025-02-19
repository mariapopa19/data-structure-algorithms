// GIven 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain anu common items
// For example:
// const array1: string[] = ['a', 'b', 'c', 'x'];
// const array2: string[] = ['z', 'y', 'i'];
// should return false.
// ------
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

// Brute force - O(n^2)
const containsCommonItem = (arr1: string[], arr2: string[]): boolean => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};
// console.log(containsCommonItem(array1, array2));


// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
// }

// array2[index] === obj.properties


const containsCommonItem2 = (arr1: string[], arr2: string[]) => {
    // loop through first array and create object where properties === itwma in the array 
    // can we assume always 2 params?
    let map: { [key: string]: boolean } = {};
    for (let i = 0; i < arr1.length; i++) {
      const item: string = arr1[i];
      if(!map[item]) {
        map[item] = true;
      }
    }
    console.log(map);
    // loop through second array and check if ite, on second array exists on created object.
    for (let j = 0; j < arr2.length; j++) {
      if(map[arr2[j]]){
        return true;
      }
    }
    return false;
}
// console.log(containsCommonItem2(array1, array2)); 

// O(n) Time Complexity
// O(n) Space Complexity

const containsCommonItem3 = (arr1: string[], arr2: string[]) => {
  return arr1.some(item => arr2.includes(item));
}

console.log(containsCommonItem3(array1, array2));
