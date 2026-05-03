// WHILE LOOP

// Initialize variable i
let i: number = 1;

// Loop runs until i is less than 4
while (i < 4) {
    console.log(i);

    // Increase value of i by 1
    i += 1;
}

// Sum of Only Positive Numbers

let inputNumber: number = 0;
let sum: number = 0;
let userInput: string | null;

while (inputNumber >= 0) {
    sum += inputNumber;

    userInput = prompt("Enter a number: ");

    inputNumber = Number(userInput);
}

// Display the sum outside the loop
console.log(`The sum is ${sum}`);

/**
 * Note: prompt() returns null if the user doesn't give any input (by pressing the Cancel button). In this case, pressing Cancel will exit the loop as null will not be converted to a valid number.
 */