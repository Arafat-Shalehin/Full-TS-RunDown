// FOR EACH Loop

let nums: number[] = [1, 2, 3, 4];

// Function that prints the number passed to it
function printNumber(arg: number): void {
    console.log(arg);
}

// Use forEach() to execute printNumber()
// on each element in the numbers array 
nums.forEach(printNumber);

// Output: 
// 1
// 2
// 3
// 4


// Updating Array Elements
let students: string[] = ["John", "Sara", "Jack"];

function addText(item: string, index: number, arr: string[]) {
    // Add "Hello" to the array elements
    arr[index] = "Hello" + item;
}

// Use forEach() to execute addText()
// on each element of the students array
students.forEach(addText);

console.log(students);