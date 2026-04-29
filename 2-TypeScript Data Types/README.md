
TypeScript provides various data types to define the kind of data a variable can hold. These data types help ensure type safety and better code maintainability. Below is a table summarizing the basic data types in TypeScript:

| Data Type | Description | Example |
|-----------|-------------|---------|
| number | Integer or floating-point data. | 3, 3.234, 3e-2 etc. |
| string | Textual data. | 'hello', "hello world!", etc. |
| boolean | Any of two values: true or false. | true, false |
| undefined | A variable that has not been assigned a value. | let firstName: string; |
| null | Represents the intentional absence of any object value. | let firstName = null; |
| Array | A list of elements of a single type. | let ages: number[] = [18, 23, 12]; |
| Tuple | An array with a fixed size and known data types. | let details: [number, string] = [7, "hello"] |
| Object | Key-value pairs of a collection of data. | let student = {name: "John"}; |
| any | Indicates a type of variable that can hold any value. | let anything: any = "Hello"; anything = 5; |
| unknown | Similar to any, but requires more checks. | let notSure: unknown = 4; |
| void | Used for functions that do not return a value. | function sayHello(): void {...} |
| never | Represents a value that never occurs. | function error(): never {...} |

### Detailed Explanation of Data Types

- **number**: Represents both integer and floating-point numbers. TypeScript uses the IEEE 754 standard for floating-point arithmetic. You can use decimal, hexadecimal, binary, or octal literals.

- **string**: Used for textual data. Strings can be enclosed in single quotes, double quotes, or backticks for template literals, which allow embedding expressions.

- **boolean**: A logical type that can only be true or false. It's essential for conditional statements and logical operations.

- **undefined**: The default value for uninitialized variables. It's often used to indicate that a variable has been declared but not yet assigned a value.

- **null**: Represents the absence of any object value. It's different from undefined and is used to explicitly set a variable to have no value.

- **Array**: A collection of elements of the same type. Arrays are zero-indexed and can be dynamically resized. You can define arrays using square brackets or the Array generic type.

- **Tuple**: A fixed-size array where each element can have a different type. Tuples are useful for representing structured data with a known number of elements.

- **Object**: Represents a collection of key-value pairs. Objects can have properties and methods, making them versatile for modeling real-world entities.

- **any**: Allows a variable to hold any type of value, bypassing TypeScript's type checking. Use it sparingly as it reduces type safety.

- **unknown**: Similar to any, but safer because you must perform type checks or assertions before using the value. It's recommended over any for better type safety.

- **void**: Used for functions that don't return a value. It's also the inferred return type for functions that don't have a return statement.

- **never**: Represents values that never occur. It's used for functions that throw errors or have infinite loops, indicating that the function never returns normally.

TypeScript data types are divided into primitive and non-primitive types.

| Types | Description | Examples |
|-------|-------------|----------|
| Primitive | Basic types that can hold a single value. | Strings, numbers, booleans, undefined, null. |
| Non-Primitive | Can hold a collection or a more complex structure. | Objects, arrays, tuples, enums, any, void, never, unknown. |

### Understanding Primitive vs. Non-Primitive Types

Primitive types are immutable and passed by value, meaning their values are copied when assigned or passed to functions. Non-primitive types, on the other hand, are mutable and passed by reference, allowing modifications to affect the original object. Understanding this distinction is crucial for managing memory and data flow in your TypeScript applications.


