# Comparison and Logical Operators

Comparison operators are fundamental tools in TypeScript that allow you to compare two values and determine their relationship. These operators are essential for making decisions in conditional statements, loops, and control flow logic. The result of a comparison is always a boolean value: `true` or `false`.

## Commonly Used Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| == | Equal to | 3 == 5 (Output: false) |
| != | Not equal to | 3 != 4 (Output: true) |
| === | Strictly equal to | 3 === "3" (Output: false) |
| !== | Strictly not equal to | 3 !== "3" (Output: true) |
| > | Greater than | 4 > 4 (Output: false) |
| < | Less than | 3 < 3 (Output: false) |
| >= | Greater than or equal to | 4 >= 4 (Output: true) |
| <= | Less than or equal to | 3 <= 3 (Output: true) |

### Detailed Explanation of Comparison Operators

- **== (Equal to)**: Compares two values for equality after type coercion. This means `3 == "3"` would return `true` because the string is converted to a number.

- **!= (Not equal to)**: Checks if two values are not equal after type coercion. The inverse of the `==` operator.

- **=== (Strictly equal to)**: Compares two values for both value and type equality without any type coercion. `3 === "3"` returns `false` because the number and string types are different.

- **!== (Strictly not equal to)**: Checks if two values are not equal in both value and type. The inverse of the `===` operator. This is the preferred choice for reliable comparisons.

- **> (Greater than)**: Checks if the left operand is strictly greater than the right operand.

- **< (Less than)**: Checks if the left operand is strictly less than the right operand.

- **>= (Greater than or equal to)**: Checks if the left operand is greater than or equal to the right operand.

- **<= (Less than or equal to)**: Checks if the left operand is less than or equal to the right operand.

### Best Practices for Comparison Operators

**Always prefer strict equality (`===`) over loose equality (`==`)** in TypeScript and JavaScript to avoid unexpected type coercion issues. For example, `0 == false` returns `true`, but `0 === false` returns `false`. Using strict equality makes your code more predictable and safer.

Comparison operators are frequently used in conditional statements:

```typescript
if (age >= 18) {
    console.log("You are an adult");
}

while (count < 10) {
    count++;
}
```

Understanding these operators is crucial for writing correct logic in your applications, especially when handling user input, validating data, or controlling program flow.