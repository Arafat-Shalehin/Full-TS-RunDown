// TypeScript Arrays

let age: number[] = [10, 12, 3, 40, 5];
console.log(age);

// Add an element to the beginning of an array.

let fruits: string[] = ["apple", "banana", "cherry"];
fruits.unshift("strawberry");

console.log(fruits);

// Output: ["strawberry", "apple", "banana", "cherry"]


// Array Methods

let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];

// Use concat() to merge array1 and array2
let combinedArray: number[] = array1.concat(array2);
console.log("Combined Array:", combinedArray);  

// Use indexOf() to find the index of element '5' in the combinedArray
let index: number = combinedArray.indexOf(5);
console.log('Index of 5:', index);  

// Use slice() to get a portion of the combinedArray (elements at index 1 to 3)
let slicedArray: number[] = combinedArray.slice(1, 4);
console.log("Sliced Array:", slicedArray);  

// Use splice() to remove two elements starting from index 3 and add '7', '8'
combinedArray.splice(3, 2, 7, 8);
console.log("Modified Combined Array:", combinedArray); 

/**
Combined Array: [1, 2, 3, 4, 5, 6]
Index of 5: 4
Sliced Array: [2, 3, 4]
Modified Combined Array: [1, 2, 3, 7, 8, 6]
 */

// Create an Array using the new keyword.
// You can also create an array using the new keyword. For example,


// 1. Create an empty array.

let emptyArray: number[] = new Array();

// 2. Create an array of specified length.
// Creates an array with 5 empty slots.
let arrayWithSize: number[] = new Array(5); 

// 3. Create an array with elements.

let arrayWithElements: number[] = new Array(1, 2, 3, 4);