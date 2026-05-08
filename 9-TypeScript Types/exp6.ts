// TypeScript unknown Type

let userInput: unknown = "Hello";

// Type checking
if (typeof userInput === "string") {
    // Now it's safe to use string methods
    console.log(userInput.toUpperCase());  
}

// Output: HELLO

// Using unknown with Function

function handleData(input: unknown) {
    // Check if the input is an array
    if (Array.isArray(input)) {
        console.log(input);
    }
    // Check if the input is a string
    else if (typeof input === "string") {
        console.log(input.toUpperCase());
    }
}

// Call the function with different types of inputs
handleData("programiz");          
handleData([1, 2, 3]);    