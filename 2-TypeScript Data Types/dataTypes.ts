let integerNumber: number = -3; 
console.log(integerNumber); 

let floatNumber: number = 3.15; 
console.log(floatNumber); 

// String enclosed within single quotes
let language: string = 'English';
console.log(language);  

// String enclosed within double quotes
let country: string = "USA";
console.log(country);  

// String enclosed within backticks
let result: string = `fail`;
console.log(result);

let item: undefined;
console.log(item);

// Output: undefined

let person: { name: string; age: number; hobbies: string[] } = {
    name: "John",
    age: 30,
    hobbies: ["reading", "cycling"]
};

console.log(person);

let value: unknown = "Hello, TypeScript"; // Value is unknown

// Direct operations on 'unknown' type are not allowed
// console.log(value.toUpperCase()); // Error: Object is of type 'unknown'.

// Correct usage requires type checking
if (typeof value === "string") {
    console.log(value.toUpperCase()); 
}

// This function never returns
function throwError(message: string): never {
    throw new Error(message);
}

try {
    // Call the function
    throwError("Something went wrong!");
}
catch (error) {
    // Print the error message
    console.log((error as Error).message);
}

// Output: Something went wrong!