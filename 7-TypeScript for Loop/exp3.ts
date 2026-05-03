// DO...WHILE Loop

let i: number = 3;

// Loop body is executed first
// Then, loop continues as long as i is positive
do {
    console.log(i);

    // Decrement value of i by 1
    i--;
} while (i > 0);

// Sum of Positive Numbers

let inputNumber: number = 0;
let sum: number = 0;

// Create a variable to take user input
// The variable can be either string or null 
let userInput: string | null;

do {

    // Add all positive numbers
    sum += inputNumber;

    // Take input from the user
    userInput = prompt("Enter a number: ");

    // Convert userInput to number
    inputNumber = Number(userInput);

    // Loop terminates if inputNumber is negative
} while (inputNumber >= 0);

// Finally, display the sum
console.log(`The sum is ${sum}`);