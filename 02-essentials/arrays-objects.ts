// Arrays

let hobbies = ['Sports', 'Cooking']
// hobbies.push(10); // Error because string array was inferred

let users: (string | number)[];
// let users: Array<string | number>; //Generic typing

// let possibleResults: number[]; // We only want two results [-1, 1]
// possibleResults = [1, -1]; // valid
// possibleResults = [1, 5, 10] // also valid, not what we want though

// let possibleResults: [number, number];
// possibleResults = [-1, 1]; //valid
// possibleResults = [1, 5, 10]; //invalid

// Objects
// let user = {
//   name: 'Max',
//   age: '38'
// }

let user: {
  name: string;
  age: number | string;
  hobbies: (string | number)[];
  role: {
    description: string;
    id: number;
  }
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cooking'] ,
  role: {
    description: 'admin',
    id: 12345
  }
}

let val: {} = 'some text'; // Not an object type but any value other than null or undefined

 let data: Record<string, number | string>; // typing as an object, when you don't know exactly what it will be yet. The key will be a string and the value can be a string or number.
 