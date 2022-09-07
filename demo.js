/**
 * Primitives:
 * * Boolean
 * * Number
 * * String
 * * null
 * * undefined
 * * Symbol
 */

let myString1 = 'Hello';
myString1 += '!';
console.log(myString1);

/* *** */

let myString2 = 'Test string';
let myString3 = myString2;
console.log(myString2, myString3);
console.log('Are the strings the same?', myString2 === myString3);

// What if we change myString2?
myString2 = 'A different string.';
console.log(myString2, myString3); // 
console.log('Are the strings the same after change?', myString2 === myString3);

/**
 * Primitives are passed by-value!
 */

/**
 * What are our more complex structures in JavaScript? (Immutable)
 * * Array
 * * Object
 * * Function / Class
 */

let myArray1 = [1, 2, 3];
let myArray2 = [...myArray1];
console.log('myArray1, myArray2', myArray1, myArray2);

// myArray2.push(4);
// myArray2.push(5);
// myArray2.push(6);
console.log('myArray1, myArray2', myArray1, myArray2);
console.log('myArray1 === myArray2', myArray1 === myArray2);

// Objects!?

const obj1 = {
    name: 'JavaScript',
    type: ['weak', 'dynamic']
};
let obj2 = obj1;
console.log('obj1, obj2', obj1, obj2);
console.log('obj1 === obj2', obj1 === obj2);

obj2.type.push('duck');
console.log('obj1, obj2', obj1, obj2);
console.log('obj1 === obj2', obj1 === obj2);

// Let's try to assign a new obj...
obj2 = {...obj1}; // Spread to make a new obj.
console.log('obj1, obj2', obj1, obj2);
console.log('obj1 === obj2', obj1 === obj2);

obj2.type.pop(); // Remove "duck"
console.log('obj1, obj2', obj1, obj2);
console.log('obj1 === obj2', obj1 === obj2);

// If it is just data...
obj2 = JSON.stringify(obj1);
obj2 = JSON.parse(obj2);
obj2.type.push('duck'); // Put duck back in, only to 2.
console.log('obj1, obj2', obj1, obj2);
console.log('obj1 === obj2', obj1 === obj2);