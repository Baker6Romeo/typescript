"use strict";
// Javascript: Properties can be added on the fly in constructor
// class User {
//   constructor() {
//     this.name = 'Max';
//   }
// }
// Typescript: Properties and their defaults are defined as properties outside of constructor. No need for default constructor.
// class User {
//   name = 'Max';
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// TS Shortcut: Adding scope to constructor parameters automatically creates the class properties
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // No need to assign the parameters to variables here. It's done automatically.
    }
}
let newUser = new User('Max', 39);
const bob = new User('Bob', 45);
