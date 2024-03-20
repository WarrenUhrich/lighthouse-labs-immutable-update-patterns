// Primitive / Immutable (we always REPLACE entirely the value.)

let myString = 'Hello, World!';
let myString2 = myString;

myString += ' And goodbye!'; // Replacing myString with a new updated myString.

console.log('myString2:', myString2); // What do we expect to see?
console.log('myString:', myString);

// Complex / By-reference; Mutable (we CAN manipulate if we'd like, not just replace)

const array1 = [1, 2, 3, 4, 5];
const array2 = array1;

array1.push(6);
array1.push(7);
array1.push(8);

console.log('array2:', array2); // What do we expect to see?
console.log('array1:', array1);

// Comparisons in Primitives vs. References

const string1 = 'Hello!';
const string2 = 'Hello!';

// When comparing primitives, if they have the same contents... TRUE!
const stringComparison = string1 === string2;
console.log('stringComparison:', stringComparison); // true

const obj1 = {name: 'Eric', school: 'Lighthouse Labs'};
const obj2 = {name: 'Eric', school: 'Lighthouse Labs'};
const obj3 = obj1;

const objComparison = obj1 === obj2;
console.log('objComparison:', objComparison); // false

const objComparison2 = obj1 === obj3;
console.log('objComparison2:', objComparison2);

// What if I want to make a copy of an array/object?

const obj4 = {...obj1}; // Spread syntax to seed object with values from another.
const compareObj4ToObj1 = obj4 === obj1; // false
console.log('obj4:', obj4, 'compareObj4ToObj1:', compareObj4ToObj1);

// Limitation to the spread syntax?
// It only makes a shallow copy.

const jake1 = {name: 'Jake', hobbies: ['coding', 'gym']};
const jake2 = {...jake1};

jake1.hobbies.push('hiking');

console.log('jake2:', jake2);
console.log('compareJake1AndJake2:', jake1 === jake2); // false

jake2.school = 'Lighthouse Labs';

// Will Jake1 have the school?
console.log('jake1:', jake1, 'jake2:', jake2);

// Easy deep copy!
const jake3 = JSON.parse(JSON.stringify(jake2)); // stringify/JSON will not carry over functions.
jake3.hobbies.push('researching React');

console.log('jake2:', jake2, 'jake3:', jake3);
