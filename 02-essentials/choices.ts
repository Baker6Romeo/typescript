// enum Role {
//   Admin,
//   Editor,
//   Guest
// }

// let userRole: Role = Role.Admin;

// let userRole: 'admin' | 'editor' | 'guest' = 'guest' // Type literals, prefered to enums.  To make practical & reusable see below.
// userRole = 'editor';

let possibleResults: [1 | -1, 1 | -1]; // Using literal types to specify what can go in array.
possibleResults = [-1, 1];

type Role = 'admin' | 'editor' | 'guest';
let userRole: Role = 'admin'
function (Role) {
  // ...
}