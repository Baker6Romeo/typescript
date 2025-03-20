let a: null; // Not really a helpful type by itself
a = null;
// a = "Hi!" // Doesn't work

let b: null | string;
b = null;
b = "Hi!"

let c: undefined | string

// Null handling
const input = document.getElementById('user-name');

// console.log(input.value) // Could be null
if (input != null) { // input is typed as null | HTMLElement
  console.log(input.value); // type of input narrowed to just HTMLElement because it's passed null check
}

const otherInput = document.getElementById('user-name')!; // ! Tells typescript to ignore null because we promise not to let it happen...Danger, Will Robinson!
// Could also ... console.log(otherInput!.value) // but above is prefered.
console.log(otherInput.value); // No null warning
console.log(input?.value); // You know it could be null and this should only execute if it's not.

const difInput = document.getElementById('user-name') as HTMLInputElement; // Types it as an HTMLInputElement so we can access the value because not all HTMLElements have values.
console.log(difInput.value) //Can still be null so that has to be handled.
// Should be:
const rightInput = document.getElementById('user-name') as HTMLInputElement | null;
console.log(rightInput?.value);