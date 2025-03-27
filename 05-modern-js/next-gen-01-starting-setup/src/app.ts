/* FUNCTIONS */
// const userName = 'Max';
// username = 'Maximillian'; // Can't change a const
// let age = 30;
// age = 29;

// const add = (a: number, b: number) => a + b // If only one expression in function body, no need for curly braces or return keyword.
// =
// const add = (a: number, b: number) => {
//   return a + b;
// }

// const add: (a: number | string ) => void = a => console.log(a) // if only one parameter can be written like this. Function needs type description.
// =
const printOut = (a: number | string ): void => { console.log(a); }

// Defaults allow for optional parameters, but they must be listed last
// const add = (a: number, b: number = 1) => a + b;

/* ARRAYS */
// spread operator
let hobbies = ["Horses", "Golf"];
let activeHobbies = ["Snowboarding"];
// hobbies.push(activeHobbies); // Can't add another array with push, only single values
activeHobbies.push(...hobbies); // Works because the spread operator separates each array value
// Also works on objects
const person = {
  name: 'Max',
  age: 30
}

// const copiedPerson = person; // This only makes another pointer to the person in memory
const copiedPerson = {...person}; // Creates a new object in memory with the person's properties

/* REST PARAMETERS */
const add = (...numbers: number[]): number => {
  let result = 0;
  result = numbers.reduce((total, value) => { return total += value }, 0);
  return result;
}; //parameter is any number of things passed to it

const addedNumbers = add(5, 10, 3.7, 9)
console.log(addedNumbers);

/* ARRAY AND OBJECT DESTRUCTURING */
const [hobby1, hobby2, ...remainingHobbies] = hobbies; // hobbies array is destructured and put into listed variables, with remaining put into a new array "remainingHobbies".
const {name: firstName, age} = person; // Same as above, but with object property values. User colon to rename property variable names
