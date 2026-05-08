// TypeScript Aliases

type Age = number;
const age: Age = 25;

console.log(age);

// Alias for Object Types

type Person = {
    name: string;
    age: number;
};

const person: Person = {
    name: "Alice",
    age: 30,
};

// Here's the complete program to add two numbers using a type alias for the function:

type Adder = (a: number, b: number) => number;

const add: Adder = (x, y) => x + y;

console.log(add(5, 10));