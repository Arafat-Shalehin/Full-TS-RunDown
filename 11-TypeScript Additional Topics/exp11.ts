// TypeScript Template Literals

let username: string = "Alice";
let greeting = `Hello, ${username}`;

console.log(greeting);

// Output: Hello Alice


// TypeScript Template Literals
let number1: number = 8;
let number2: number = 3;

// Embed expression within template literal 
let result = `The sum of ${number1} and ${number2} is ${number1 + number2}.`;

console.log(result); 

// Output: The sum of 8 and 3 is 11.


// Tagged Templates
/**
Tagged templates are an advanced form of template literals in TypeScript. They allow you to parse template literals with a function.
Furthermore, you don't need to use parentheses () when passing the template literal to the function. For example,
 */
function displayMessage(message: TemplateStringsArray) {
    return message;
}

// Create a tagged template
let resultt = displayMessage`Hello Jack`;

console.log(resultt);  // [ 'Hello Jack' ]