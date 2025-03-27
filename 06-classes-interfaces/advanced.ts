// Getters: variables compiled at runtime
// class User {
//   constructor(private firstName: string, private lastName: string) {}

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// Setters: For conditions to be run when setting a parameter value, like validating it
class User {
  private _firstName: string = ''; // _ to indicate's it's set by a setter with it's name.
  private _lastName: string = '';

  set firstName(name: string) { // One use case. Check if the input, trimmed of white space, is an empty string.
    if (name.trim() === ''){
      throw new Error('Empty strings not allowed.');
    }
    this._firstName = name;
  }
  set lastName(name: string) {
    if (name.trim() === ''){
      throw new Error('Empty strings not allowed.');
    }
    this._lastName = name;
  }
    get fullName() {
    return `${this._firstName} ${this._lastName}`
  }
}

const max = new User();
max.firstName = 'Max';
max.lastName = 'Schwartzmuller'
console.log(max.fullName);