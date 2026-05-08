// TypeScript Interface

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 30,
};

console.log(person);

// Output: { name: 'Alice', age: 30 }

// Interface with Optional Properties

interface Car {
    brand: string;
    model: string;
    color?: string;  // Optional property
}

let myCar: Car = { brand: "Toyota", model: "Corolla" };
let anotherCar: Car = { brand: "Honda", model: "Civic", color: "Red" };

console.log(myCar);        
console.log(anotherCar);

// Interface for Function Types

interface Greet {
    (name: string): string;
}

const greet: Greet = (name) => `Hello, ${name}!`;

// Call the greet() function and log the result
console.log(greet("Selena"));

// Interfaces with TypeScript Classes

// Define an interface for animals
interface Animal {
    name: string;
    sound: string;
    makeSound(): void;
}

// Dog class implements the Animal interface
class Dog implements Animal {
    name: string;
    sound: string;

    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound;
  }

    makeSound() {
        console.log(`${this.name} says: ${this.sound}`);
    }
}

// Create a Dog object and call makeSound()
let dog = new Dog("Buddy", "Woof");
dog.makeSound();  

// Output: Buddy says: Woof