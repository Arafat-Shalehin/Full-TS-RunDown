// TypeScript Rest Parameters

function addNumbers(...numbers: number[]): number{
    let sum: number = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(addNumbers(5, 10, 15)); // Output: 30
console.log(addNumbers(5, 10));  // Output: 15
console.log(addNumbers(5));  // Output: 5
console.log(addNumbers());  // Output: 0


// Function with rest parameter 'deposits'
function studentInfo(name: string, ...marks: number[]): void {
 
    console.log(`Student Name: ${name}`);
    console.log("Marks Obtained:");

    // Print the rest parameter
    for (let mark of marks) {
        console.log(mark);
    }
    console.log();
}

// Pass a single argument to the rest parameter
studentInfo("Joe Smith", 100);

// Pass two arguments to the rest parameter
studentInfo("Jane Doe", 85, 92);