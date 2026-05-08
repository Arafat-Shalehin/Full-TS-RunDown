// TypeScript Enums

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Using the enum to set a direction
const currentDirection = Direction.Up;
console.log("Moving in direction:", currentDirection);

// Output: Moving in direction: UP

/**
Types of Enums
There are 2 types of enums.

Numeric Enums
String Enums
Let's learn about them in detail.
 */

// Numeric Enums

/**
In numeric enums, we group related numeric constants under a single name.
By default, the first member of the numeric enum is assigned the value 0, and each subsequent member's value is incremented by one.
 */

enum Level {
  Low,    // Automatically set to 0
  Medium, // Automatically set to 1
  High    // Automatically set to 2
}

console.log(Level.Low);
console.log(Level.Medium);
console.log(Level.High);

// String Enums

/**
The string enums allow you to assign string literals to the enum members, providing a more meaningful way to handle named constants.
To define a string enum, each member must be initialized with a string value.
 */

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let favoriteColor: Color = Color.Green;
console.log("Favorite Color is:", favoriteColor); 