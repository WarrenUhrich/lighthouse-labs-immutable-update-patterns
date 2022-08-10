/**
 * Primitives (Mutable) in JavaScript:
 * These pass by-value:
 * * String
 * * Number/ BigInt
 * * Boolean
 * * null
 * * undefined
 * * Symbol
 */

let myString1 = 'Hello!';
let myString2 = myString1;

myString1 = 'Goodbye!';

console.log(myString1, myString2);

/**
 * More complex (immutable) structures:
 * These are by-reference:
 * * Arrays
 * * Objects
 * * Functions
 */

let myArray1 = [1, 2, 3, ['bird', 'dog', 'cat']];
// let myArray2 = [...myArray1]; // Shallow copy.
// let myArray2 = JSON.parse(JSON.stringify(myArray1)); // Deep copy (JSON does DATA only! You lose functions.)
let myArray2 = [...myArray1];
myArray2[3] = [...myArray2[3]];

myArray1.push(15);
myArray1[3].push('giraffe');

myArray2.push(4);
myArray2.push(5);
myArray2[3].push('fish');

console.log(myArray1, myArray2);

// Object example!

const obj1 = {name: 'JavaScript', type: ['weak', 'dynamic']};
// const obj2 = {...obj1}; // Shallow copy.
const obj2 = JSON.parse(JSON.stringify(obj1)); // Deep (data-only) copy.

obj2.year = 1995;
obj2.type.push('duck');

console.log(obj1, obj2);
