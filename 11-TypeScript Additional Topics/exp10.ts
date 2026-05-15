// TypeScript typeof Operator

let word: string = "hello";

// Compile-time use (type copying)
let typeOfWord: typeof word;  // typeOfWord is of type 'string'

// Runtime use (type checking)
console.log(typeof word);     


/**
typeof Types
At runtime, the typeof operator returns one of the following string values:

Types	    typeof Result
String	    "string"
Number	    "number"
BigInt	    "bigint"
Boolean	    "boolean"
Object	    "object"
Symbol	    "symbol"
undefined	"undefined"
null	    "object"
function	"function"
 */