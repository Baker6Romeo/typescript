// Takes two numbers and returns a number
function add(a: number, b: number): number {
  return a + b;
}

// Takes a string and returns nothing(void)
function log(message: string): void {
  console.log(message);
}

// Where the above function logs a message and finishes this function "never" finishes because it throws an error, which could crash your program if it's not caught elsewhere.
function logAndThrowError(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

// Typed function that takes a callback
// Generic function
function performJob(cb: Function) {
  // ...
  cb();
}

// Specific function type: big arrow notation and return type, in this case void.
function performFunction(cb: () => void) {
  // ...
  cb();
}

function performStuff(cb: (m: string) => string) {
  // ...
  cb('Job Done');
}

// 1
const logMsg (msg: string) {
  console.log(msg);
}
// 2
performStuff(logMsg);

type User = {
  name: string;
  age: number;
  greet: () => string;
}

let user: User = {
  name: 'Danny Boy',
  age: 35,
  greet: () => { return 'Hello Danny Boy'}
}