// TypeScript Getter and Setter

// TypeScript Getter
class Student {
  // Data property
  private _firstName: string = "Monica";

  // Getter method
  get getName(): string {
    return this._firstName;
  }
}

const student = new Student();
 
// Accessing the getter
console.log(student.getName); 

// TypeScript Setter
class Studentt {
  private _firstNamee: string = 'Monica';

  // Getter method
  get firstName(): string {
    return this._firstNamee;
  }

  // Setter method
  set changeName(newName: string) {
      this._firstNamee = newName;
  }
}

const studentt = new Studentt();

console.log(studentt.firstName); // Monica

// Change(set) object property using a setter
studentt.changeName = 'Sarah';
console.log(studentt.firstName); // Sarah


// TypeScript Getter and Setter
// Define a class named 'Person'
class Person {
  private _name = "";
  private _age = 0;

  // Getter for 'name'
  get name() {
    return this._name;
  }

  // Setter for 'name' - converts any value to string
  set name(value: string | number | boolean) {
    this._name = String(value);
  }

  // Getter for 'age'
  get age() {
    return this._age;
  }

  // Setter for 'age' - converts to number, uses 0 if invalid
  set age(value: string | number | boolean) {
    const num = Number(value);
    this._age = Number.isFinite(num) ? num : 0;
  }
}

const person = new Person();
person.name = "Alice";
person.age = "30";
console.log(person.name); 
console.log(person.age);

/**
Output:
Alice
30
Here, the Person class has two data properties: _name and _age. So, we've created their respective getter and setter methods.
We have implemented the following logic inside the setter methods:
name() - This setter converts its argument to string type with the String() method and assigns it to the _name property.
age() - This setter converts its argument to number type with the Number() method and assigns it to the _age property. If the argument is invalid, it sets _age to 0.
 */