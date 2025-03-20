function generateError(msg?: string) { //msg is an optional parameter
  throw new Error(msg);
}

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest'; // question mark makes role an optional property
}
// valid user
let user: User = {
  name: 'Bob',
  age: 33
}
// also valid user
let user2: User = {
  name: 'John',
  age: 45,
  role: 'admin'
}

// Null coalescing
let input = '';
const didProvideInput = input ?? false; // If input is null or undefined it returns false