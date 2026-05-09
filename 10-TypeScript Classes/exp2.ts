// TypeScript Access Modifiers

// Public Access Modifier
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Alex");
console.log(person.name);  
person.greet();   

/*
Alex
Hello, my name is Alex
*/

// Private Access Modifier
class Personn {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  printAgee(): void {
    console.log(`Age is ${this.age}`); 
  }
}

const personN = new Personn(25);
personN.printAgee();

/**
Age is 25
Here, age is printed using the printAge() method because it is accessed from within the same class, which is allowed.
However, if we try to access age directly from outside the class as:
console.log(person.age)
It will result in a compile-time error, because age is marked as private and cannot be accessed from outside the class.
 */

// Protected Access Modifier
class Personnn {
  protected gender: string;

  constructor(gender: string) {
    this.gender = gender;
  }
}

class Student extends Personnn {
  showGender(): void {
    console.log(`Gender is ${this.gender}`);
  }
}

const student = new Student("Female");
student.showGender();

/*
Gender is Female
Here, the gender property is marked as protected, so it can't be accessed directly from outside the class.
But it works inside the Student subclass because protected allows access in child classes.
*/