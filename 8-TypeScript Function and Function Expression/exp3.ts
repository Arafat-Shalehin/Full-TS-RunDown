// TypeScript Optional Parameters

// Function with optional parameter num3
function sum(num1: number, num2: number, num3?: number) {
    if (typeof num3 === "undefined")
        return num1 + num2;
    return num1 + num2 + num3;
}

// Don't pass optional argument
let result: number = sum(5, 10);
console.log(result);

// Output: 15


// Default Parameters Should Come After Required Parameters

function sumM(x: number, y: number, z: number = 10): number {
    return x + y + z;
}

// Don't pass argument to z
// So z = 10 by default
let resultT: number = sum(5, 15);
console.log(`5 + 15 + 10 = ${resultT}`);

// Pass argument to z
result = sum(5, 15, 13);
console.log(`5 + 15 + 13 = ${resultT}`);