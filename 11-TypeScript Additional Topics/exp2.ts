// TypeScript Generics

// Generic function that returns the input value
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(123));

/*
Output

Hello
123
*/


// Generic Interfaces
//Generic interfaces allow you to define the shape of data that can work with different data types while still being type-safe.
//Like generic functions, they use a type placeholder (like T) that can be set when the interface is used. For example,

// Define a generic interface Box
interface Box<T> {
  value: T; // The value can be of any type specified when using the interface
}

// Create a Box of type string
let stringBox: Box<string>;
stringBox = { value: "Hello" }; // value must be a string
console.log(stringBox.value);  

// Create a Box of type number
let numberBox: Box<number>;
numberBox = { value: 42 }; // value must be a number
console.log(numberBox.value); 

/*
Output

Hello
42

Here,
Box<T> is a generic interface where T can be any type.
Box<string> means the value must be a string.
Box<number> means the value must be a number.
*/


// Generics Classes
class Container<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  getData(): T {
    return this.data;
  }
}

// Create a container for a string
const stringContainer = new Container<string>("Programiz");
console.log(stringContainer.getData()); 

// Create a container for a number
const numberContainer = new Container<number>(123);
console.log(numberContainer.getData());

/**
Output

Programiz
123
 */


// Generic Constraints
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("Hello");       // Works: string has a length
logLength([1, 2, 3]);      // Works: array has a length
// logLength(123);         // Error: number doesn't have length

/*
Output

5
3
*/


// Using Generics with Arrays
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement<string>(["a", "b", "c"])); // Output: a
console.log(getFirstElement<number>([10, 20, 30]));    // Output: 10

