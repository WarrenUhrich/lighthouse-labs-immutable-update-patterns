/**
 * Primitives
 * 
 * Immutable / Passed By-Value
 * 
 * - string
 * - number (integer / float)
 * - bigint
 * - boolean
 * - undefined
 * - symbol
 * - null
 */

let myString = 'Hello, World!';
// console.log(myString);

let concatenatedString = myString + ' 👋';
// console.log(concatenatedString);

let myNum = 54;
// console.log(myNum);

myString = 'Goodbye!';
// console.log('updated myString:', myString);
// console.log('concatenatedString:', concatenatedString);

/**
 * More Complex Data Structures
 * 
 * Mutable / Passed By-Reference (Pointer)
 * 
 * - object
 * - array
 * - function
 */

const array1 = [1, 2, 3, 4];
const array2 = array1;

console.log(
    'array1:', array1, // [1, 2, 3, 4]
    '\r\n',
    'array2:', array2  // [1, 2, 3, 4]
);

array2.push(5);
array2.push(6);
array2.push(7);

console.log(
    'array1:', array1, // [1, 2, 3, 4]
    '\r\n',
    'array2:', array2  // [1, 2, 3, 4, 5, 6, 7]
);

console.log('array1 === array2', array1 === array2);

console.log(
    '[1, 2, 3] === [1, 2, 3]',
    [1, 2, 3] === [1, 2, 3] // Are these the SAME array?
);

const arrayOne = [1, 2, 3]; // These two are in SEPARATE references/memory.
const arrayTwo = [1, 2, 3]; // These two are in SEPARATE references/memory.

const animals = ['dog', 'cat', 'fish', 'parrot'];
const animalsFull = ['cow', 'horse', ...animals, 'elephant', 'tiger'];

console.log('animals:', animals);
console.log('animalsFull:', animalsFull);
console.log('animals === animalsFull:', animals === animalsFull);

animals.push('hamster');
console.log('animals:', animals);
console.log('animalsFull:', animalsFull);

// 1. Not the most readable...
// 2. It can be sort of overkill...
// 3. It cannot handle functions/methods...
const animalsFullCopy = JSON.parse(JSON.stringify(animalsFull));
console.log('animalsFullCopy:', animalsFullCopy);
