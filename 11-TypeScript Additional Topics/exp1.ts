// TypeScript Type Narrowing

function printValue(value: string | number) {

    if (typeof value === "string") {
        
        // TypeScript knows 'value' is a string here
        // So, we can use toUpperCase()
        console.log(value.toUpperCase());
    }
    else {

        // At this point, TypeScript knows 'value' is a number
        console.log(value.toFixed(2));
    }
}

// Pass string argument
printValue("TypeScript");

// Pass number argument
printValue(36.36589);

/**
Output

TYPESCRIPT
36.37
 */


// Narrowing with Truthy/Falsy Checks
// Function with optional parameter 'name'
function greet(name?: string) {
    
    // Check if an argument has been passed
    if (name) {
        console.log(`Hello, ${name}!`);
    }
    else {
        console.log("No name provided.");
    }
}

// Provide string argument
greet("James Bond");

// Provide no argument
greet();

/**
Output

Hello, James Bond!
No name provided.
 */


// Narrowing with Equality Checks
function compare(x: string | number, y: string | boolean) {
    if (x === y) {
        // TypeScript knows x and y are both strings
        console.log(`Identical String Arguments: ${x.toUpperCase()}`);
    }
    else {
        console.log("Arguments are not identical in value or type or both.");
    }
}

// Pass two identical string arguments
compare("Saturday", "Saturday");

// Pass different string arguments
compare("Saturday", "Monday");

// Pass a number and a string
compare(7, "Saturday");

// Pass a string and a boolean
compare("Saturday", false);

/**
Output

Identical String Arguments: SATURDAY
Arguments are not identical in value or type or both.
Arguments are not identical in value or type or both.
Arguments are not identical in value or type or both.
 */


// Narrowing with the in Operator
type Admin = { role: string };
type Guest = { guestToken: string };

function handleUser(user: Admin | Guest) {
    if ("role" in user) {
        console.log("Admin Role:", user.role);
    }
    else {
        console.log("Guest Token:", user.guestToken);
    }
}

// Create object of Admin type
let admin: Admin = { role: "Maintenance" };

// Create object of Guest Type
let guest: Guest = { guestToken : "token1" };

// Pass admin as argument to handleUser()
handleUser(admin);

// Pass guest as argument to handleUser()
handleUser(guest);

/**
Output

Admin Role: Maintenance
Guest Token: token1
 */


// Narrowing with instanceof(Using a Date Instance)
function dateString(input: Date | string) {
    if (input instanceof Date) {
        console.log(`Year: ${input.getFullYear()}`);
    }
    else {
        console.log(`String: ${input.toLowerCase()}`);
    }
}

// Create a Date object
let today: Date = new Date();

// Pass the Date object as argument
dateString(today);

// Pass a string as argument
dateString("This is a string");

/**
Output

Year: 2025
String: this is a string
 */

// Using a Custom Class
// Create a class
class Adminn { 
    constructor(public role: string) {}
}

function instanceString(input: Adminn | string) {
    if (input instanceof Adminn) {
        console.log(`Admin Role: ${input.role}`);
    }
    else {
        console.log(`String: ${input.toLowerCase()}`);
    }
}

// Create an instance of Admin
let adminn: Adminn = new Adminn("Maintenance");

// Pass the instance as argument
instanceString(admin);

// Pass a string as argument
instanceString("This is a string");

/*
Output

Admin Role: Maintenance
String: this is a string
*/

