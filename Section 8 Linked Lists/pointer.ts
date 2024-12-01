let obj1: {[index:string]: any} | undefined = {a: true};
let obj2 = obj1; // a pointer is a reference to an object 
// both objects point to the same location in memory

obj1.a = 'booya'
// in typescript i can delete an object by setting to undefined
// delete only removes a property of an object
obj1 = undefined;

console.log('1', obj1);
console.log('2', obj2);