// TS Null And Undefined

let userName: string;
console.log(userName); // undefined
console.log(typeof userName);

userName = "Felix";
console.log(typeof userName);

// Both null and undefined are falsy in TypeScript (just like JavaScript).

// null and undefined with Boolean()

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

// TypeScript typeof: null and undefined

const a = null;
console.log(typeof a); // "object"

let b: undefined;
console.log(typeof b); // "undefined"