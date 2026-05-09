// TypeScript Abstract Class and Method

// Abstract Class and Method
// Abstract class
abstract class Shape {
  protected dimension: number;

  constructor(dimension: number) {
    this.dimension = dimension;
  }

  // Abstract method
  abstract calculateArea(): number;
}

// 'Square' is a subclass that inherits from 'Shape'
class Square extends Shape {
  calculateArea(): number {
    return this.dimension * this.dimension;
  }
}

const square = new Square(5);
console.log("Area of square:", square.calculateArea());

/*
Output

Area of square: 25
In the above example, we have created an abstract class named Shape that includes an abstract method calculateArea().

The Square class extends Shape and provides a concrete implementation of the calculateArea() method.

We then created an instance of the Square class and called the calculateArea() method using that instance:

square.calculateArea();
This method returns the area of the square, which is then logged to the console using:

console.log("Area of square:", square.calculateArea());

*/


// Abstract Class with Multiple Subclasses
// Abstract class
abstract class Animal {
  abstract Sound(): void;
}

// Sub class
class Dog extends Animal {
  Sound(): void {
    console.log("Woof! Woof!");
  }
}

// Sub class
class Cat extends Animal {
  Sound(): void {
    console.log("Meow!");
  }
}

const dog = new Dog();
dog.Sound();  

const cat = new Cat();
cat.Sound();  

/*
Output

Woof! Woof!
Meow!
Here, both Dog and Cat extend the abstract class Animal and implement the Sound() method.

We create their objects and call the method to produce different outputs.
*/

