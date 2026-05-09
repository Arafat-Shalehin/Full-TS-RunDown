// Define a class named 'Person'
class Person {
    name: string;
    age: number;

    // Constructor to initialize 'name' and 'age'
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to display a message
    greet(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create instances of the Person class
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);

// Call greet() method
person1.greet();
person2.greet();

// Output
// My name is Jack and I am 30 years old.
// My name is Tina and I am 33 years old.


// Create Objects Without Classes

// Create an object 'person' with type annotation
let person: { 
  name: string; 
  age: number; 
  greet: () => void;
} = {
  name: "Jack",  
  age: 30,       
  greet() { 
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
};

// Call the greet() method on the person object
person.greet();