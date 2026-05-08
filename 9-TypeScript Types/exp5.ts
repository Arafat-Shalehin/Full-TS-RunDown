// TS Any

let item: any;

item = "A string"; // first, item variable is a string
item = 100;        // now, its a number
item = false;      // now, its a boolean

console.log(item); 

// Output: false

// Using any With Function

// Function that accepts any type of user detail
function processUserDetail(userDetail: any) {
    console.log(userDetail);
}

// Calls function with a string
processUserDetail("Jack"); 

// Calls function with a number
processUserDetail(27); 

// Calls function with a boolean
processUserDetail(true); 


// Using any With an Object

let employeeDetails: any = {
    name: "Carol",
    age: 35
}

// Adding a new property "country" to employeeDetails
employeeDetails.country = "UK";

console.log(employeeDetails);