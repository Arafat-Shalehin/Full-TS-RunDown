// Program to check pass or fail

// prompt() returns either string or null
let userInput: string | null = prompt("Enter your marks: ");

// Type Narrowing: check if the input is valid
// String is valid input, null is invalid
if (typeof userInput === "string") {
    
    // Convert input to number
    let marks = Number(userInput);
    
    // Check the condition
    let result: string = (marks >= 40) ? "passed" : "failed";

    console.log(`You ${result} the exam.`);
}
else {
    console.log("Invalid input!");
}