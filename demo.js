// Primitives are passed by-value.

/**
 * String
 * Number / BigInt
 * Boolean
 * null
 * undefined
 * Symbol
 */

let myString1 = 'Hello';
let myString2 = myString1;

myString2 = 'Goodbye!';

console.log(myString1, myString2);

// More complex structures are passed by-reference.

/**
 * Objects
 * Arrays
 * Functions
 */

// const array1 = [1, 2, 3];
// const array2 = array1;

// array2.push(4);
// array2.push(5);

// console.log(array1, array2);

// const object1 = {name: 'JavaScript'};
// const object2 = object1;

// object2.year = 1995;

// console.log(object1, object2);

// How to clone or copy arrays and objects?

const array1 = [1, 2, 3, ['bird', 'dog', 'cat']];
const array2 = [...array1]; // [1, 2, 3] // Shallow copy.
// Spread sprinkles this variable's values into the current context.

array2.push(4);
array2.push(5);
// array2[3].push('fish');
array2[3] = [...array2[3]];
array2[3].push('fish');

console.log(array1, array2);

// Same with an object...

const object1 = {name: 'JavaScript', type: ['weak', 'dynamic']};
// const object2 = { ...object1 }; // {name: 'JavaScript'}
const object2 = JSON.parse(JSON.stringify(object1)); // Deep copy!!

object2.year = 1995;
object2.type.push('duck');

console.log(object1, object2);


