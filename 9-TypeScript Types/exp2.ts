// TypeScript Strings

let message: string = "Good Morning!";
console.log(message);

// Output: Good Morning!

// Backticks Allow Variable and Expressions

// String enclosed within backticks
let userName: string = "Jack";
console.log(`Hello, ${userName}`);

// Access String Characters

let greeting: string = "Hello";

// Access the first character, 'H'
let firstCharacter = greeting[0];
console.log(firstCharacter);

// Access the second character, 'e'
let secondCharacter = greeting[1];
console.log(secondCharacter);


// String Methods

// Initial string declaration
let baseString: string = "    Hello World!";

// Using trim() to ensure there are no leading or trailing whitespaces
let trimmedString: string = baseString.trim();

// Using toUpperCase() to convert the entire string to uppercase
let upperCaseString: string = trimmedString.toUpperCase();

// Using replace() to replace "WORLD" with "TS"
let replacedString: string = upperCaseString.replace("WORLD", "TS");

// Using slice() to extract a part of the string
let sliceOfString: string = replacedString.slice(0, 5); // Extracts 'HELLO'

// Using charAt() to find the first character of the trimmed string
let firstChar: string = trimmedString.charAt(0); // 'H'

console.log(`Original string: ${baseString}`);
console.log(`Trimmed: ${trimmedString}`);
console.log(`Uppercase: ${upperCaseString}`);
console.log(`Replaced "WORLD" with "TS": ${replacedString}`);
console.log(`Slice of the first part: ${sliceOfString}`);
console.log(`First character: ${firstChar}`);

/**
Original string:     Hello World!
Trimmed: Hello World!
Uppercase: HELLO WORLD!
Replaced "WORLD" with "TS": HELLO TS!
Slice of the first part: HELLO
First character: H
 */