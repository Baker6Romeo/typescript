"use strict";
// Getters: variables compiled at runtime
// class User {
//   constructor(private firstName: string, private lastName: string) {}
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// Setters: For conditions to be run when setting a parameter value, like validating it
class User {
    _firstName = ''; // _ to indicate's it's set by a setter with it's name.
    _lastName = '';
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Empty strings not allowed.');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Empty strings not allowed.');
        }
        this._lastName = name;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    // Static properties
    static eid = 'USER';
}
console.log(User.eid);
const max = new User();
max.firstName = 'Max';
max.lastName = 'Schwartzmuller';
console.log(max.fullName);
console.log(max);
class Employee extends User {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
    }
    work() {
        // this._firstName = 'Bob' // This doesn't work because _firstName needs to be protected instead of private.
    }
}
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // Logic to duplicate the UI element
    }
}
