// Function with a string parameter called 'name'
function greet(name: string): void {
    console.log(`Hello ${name}`);
}

// Pass argument to the function
greet("John");

// Output: Hello John


// TypeScript Function to Add Two Numbers

let sum: number = 0;

function addTwo(num1: number, num2: number) {
    sum = num1 + num2;
    return sum;
}

addTwo(5, 10);
console.log(sum)