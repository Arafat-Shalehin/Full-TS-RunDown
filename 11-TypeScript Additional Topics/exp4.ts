// TypeScript Modules

// Export Multiple Objects
//In the file square.ts,

// Export the name variable
export const name: string = "TypeScript Program";

// Export the square() function
export function square(number: number): number {
    return number * number;
}

//In app.ts file,
//import { name, square } from './square';

console.log(name);
let result = square(6);
console.log(result); // 36

// Here,
//import { name, square } from './square';