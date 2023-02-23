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

let myString1 = 'Hello, World!';
let myString2 = myString1; // myString2 = 'Hello, World!'

myString2 = 'test'; // myString2 = 'test'
                    // myString1 = ???

console.log(
    'myString1 =', myString1,
    'myString2 =', myString2
);

let myNum1 = 3.14;
let myNum2 = myNum1;

myNum1 = 2;

console.log(
    'myNum1 =', myNum1, // = 2
    'myNum2 =', myNum2  // = 3.14
);

/**
 * More Complex Data Structures
 * 
 * Mutable / Passed By-Reference
 * 
 * - object (array)
 * - function
 */

const array1 = [1, 2, 3, 4];
const array2 = array1;

array2.push(5);

console.log(
    'array1 =', array1, // [1, 2, 3, 4] ? 
    'array2 =', array2  // [1, 2, 3, 4, 5] ?
);

const newerArray1 = ['dog', 'cat', 'fish'];
const newerArray2 = [...newerArray1]; // ['dog', 'cat', 'fish']
// Spread operator is not a DEEP COPY; it is SHALLOW
// for(const animal of newerArray1) newerArray2.push(animal);

newerArray1.push('bird');

console.log(
    'newerArray1 =', newerArray1,
    'newerArray2 =', newerArray2
);

const obj1 = {
    name: 'Lighthouse Labs',
    languages: ['JavaScript', 'HTML', 'CSS']
};
// const obj2 = {...obj1}; // {name: 'Lighthouse Labs', languages: REF}
// obj2.languages = [...obj1.languages]; // DEEP COPY!
const obj2 = JSON.parse(JSON.stringify(obj1)); // DEEP COPY!
// LIMITATION: JSON is not capable of storing functions / instructions.

obj1.name = 'New School';
obj1.languages.push('Ruby');
obj1.languages.push('SQL');

console.log(
    'obj1 =', obj1, // {name: 'New School', languages: []}
    'obj2 =', obj2  // {name: 'Lighthouse Labs', languages: []}
);
