// TypeScript Type Conversion

// TypeScript Implicit Conversion

let result: any;

// Convert number to string
result = "3" + 2;
console.log(result, "-", typeof result);

// Convert boolean to string
result = "3" + true;
console.log(result, "-", typeof result);

// Convert null to string
result = "3" + null;
console.log(result, "-", typeof result);

/*
32 - string
3true - string
3null - string
*/

// TypeScript Explicit Conversion

let resultt: any;

// Convert string to number
resultt = Number("5");
console.log(resultt, "-", typeof resultt);

// Convert boolean to string
resultt = String(true);
console.log(resultt, "-", typeof resultt);

// Convert number to boolean
resultt = Boolean(0);
console.log(resultt, "-", typeof resultt);

/**
5 - number
true - string
false - boolean
 */