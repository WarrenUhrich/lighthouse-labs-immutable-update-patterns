/**
 * Primitive Types in JavaScript (Mutable)
 * - Number (int/float)
 * - String
 * - Boolean
 * - undefined
 * - null
 * - Symbol
 */

let myString1 = 'Hello, World!';
let myString2 = myString1;

console.log('initial compare:', myString1, myString2);

myString1 = 'Goodbye, thanks for visiting!';

console.log('after changing string1:', myString1, myString2);

let myNum1 = 3.14;
let myNum2 = myNum1;

myNum2++; // myNum2 = myNum2 + 1;

console.log('nums after addition:', myNum1, myNum2);

/**
 * By-Reference / Complex Types (Immutable)
 * - Object
 * - Array
 * - Function
 */

const array1 = [1, 2, 3, 4, 5];
const array2 = array1;

console.log('initial arrays:', array1, array2);

array2.push(6);

console.log('arrays after push:', array1, array2);

const obj1 = {name: 'Michael', school: 'Lighthouse Labs', hobbies: ['programming', 'hiking']};
const obj2 = {...obj1}; // Easy way to shallow copy.
const obj3 = JSON.parse(JSON.stringify(obj1)); // Deep copy*
// JSON.stringify / parse cannot store functions / logic.

obj1.hobbies.push('dancing');

console.log('obj1:', obj1);
console.log('obj2:', obj2);
console.log('obj3:', obj3);

// Comparing Arrays

console.log('array with same contents:', [1, 2, 3] === [1, 2, 3]);

const myArr1 = [1, 2, 3];
const myArr2 = myArr1;

console.log('compare the same pointer', myArr1 === myArr2);
