// TypeScript Type Assertion

let value: any = "hello";
let strLength = (value as string).length;

console.log(strLength);

// Output: 5

// Type Assertion Syntax

//There are two ways to write a type assertion:

//1. Using as (recommended)
let valuee = "hello" as string;

//2. Using angle-bracket <>
let valueee = <string>"hello";

// Type Assertion with API Data

const response = await fetch("/api/user");
const data = await response.json();

// Tell TypeScript what structure to expect
const user = data as { id: number; name: string };

console.log(user.name); // Now safely accessible