// Program to check if the student passed or failed

let score: number = 35;

// Check if score is greater than or equal to 40
if (score >= 40) {
    // The body of the if statement
    console.log("You passed the examination.");
}
else {
    // The body of the else statement
    console.log("You failed the examination.");
}

console.log("Program executed!");


// Nested if...else Statement

let marks: number = 45;

// Outer if...else statement
// Student passed if score 40 or above
// Otherwise, student failed

if (marks >= 40) {

    // Inner if...else statement
    // Distinction if marks is 80 or above

    if (marks >= 80) {
        console.log("Distinction");
    }
    else {
        console.log("Passed");
    }
}

else {
    console.log("Failed");
}

// Output: Passed