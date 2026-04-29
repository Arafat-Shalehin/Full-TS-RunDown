Arithmetic operators in TypeScript are used to perform mathematical calculations on numeric values. They allow you to add, subtract, multiply, divide, and more, forming the foundation of computational logic in your code.

Some commonly used arithmetic operators are:

| Operator | Name | Example |
|----------|------|---------|
| + | Addition | 3 + 4 (Results in 7) |
| - | Subtraction | 5 - 2 (Results in 3) |
| * | Multiplication | 2 * 3 (Results in 6) |
| / | Division | 4 / 2 (Results in 2) |
| % | Remainder | 5 % 2 (Results in 1) |
| ++ | Increment | let num: number = 5; ++num; // num == 6 |
| -- | Decrement | let num: number = 5; num--; // num == 4 |
| ** | Exponentiation | 4 ** 2 (Results in 16) |

**Note**: The increment (`++`) and decrement (`--`) operators can be used in prefix form (e.g., `++num`) or postfix form (e.g., `num++`). In prefix form, the value is incremented/decremented before the expression is evaluated, while in postfix form, it's done after. The remainder operator (`%`) is particularly useful for checking divisibility or cycling through values.

Assignment operators are used to assign values to variables. They can combine assignment with other operations, making code more concise and readable.

Some commonly used assignment operators in TypeScript are:

| Operator | Name | Example |
|----------|------|---------|
| = | Assignment Operator | let a: number = 7; (Value of a is 7) |
| += | Addition Assignment | a += 5; (Same as a = a + 5;) |
| -= | Subtraction Assignment | a -= 2; (Same as a = a - 2;) |
| *= | Multiplication Assignment | a *= 3; (Same as a = a * 3;) |
| /= | Division Assignment | a /= 2; (Same as a = a / 2;) |
| %= | Remainder Assignment | a %= 4; (Same as a = a % 4;) |
| **= | Exponentiation Assignment | a **= 2; (Same as a = a ** 2;) |

**Note**: These compound assignment operators not only perform the operation but also assign the result back to the variable. They are efficient and commonly used in loops and iterative calculations.

Comparison operators compare two values and return a boolean result. They are essential for decision-making in conditional statements and loops.

Some commonly used comparison operators are:

| Operator | Name | Example |
|----------|------|---------|
| == | Equal to | 3 == 5 (Output: false) |
| != | Not equal to | 3 != 4 (Output: true) |
| > | Greater than | 4 > 4 (Output: false) |
| < | Less than | 3 < 3 (Output: false) |
| >= | Greater than or equal to | 4 >= 4 (Output: true) |
| <= | Less than or equal to | 3 <= 3 (Output: true) |
| === | Strictly equal to | 3 === "3" (Output: false) |
| !== | Strictly not equal to | 3 !== "3" (Output: true) |

**Note**: The strict equality operators (`===` and `!==`) check both value and type, preventing type coercion issues that can occur with loose equality (`==` and `!=`). Always prefer strict equality for reliable comparisons.

Logical operators are used to combine or invert boolean expressions. They are crucial for creating complex conditions in if statements, loops, and other control structures.

The commonly used logical operators are:

| Operator | Syntax | Description |
|----------|--------|-------------|
| && (Logical AND) | expression1 && expression2 | true only if both expression1 and expression2 are true |
| || (Logical OR) | expression1 || expression2 | true if either expression1 or expression2 is true |
| ! (Logical NOT) | !expression | false if expression is true and vice versa |

**Note**: Logical operators follow short-circuit evaluation: `&&` stops at the first false value, and `||` stops at the first true value. This can be leveraged for conditional execution or default value assignment.