// TypeScript Constructors

class Student {
    name: string;

    constructor(name: string) {
        this.name = name;  // Initialize the property
        console.log("Constructor is called");
    }

    greet(): string {
        return `Welcome, ${this.name}!`;
    }
}

// Create an instance of Student class
// Pass "Leon Kennedy" as argument to the constructor
let student1 = new Student("Leon Kennedy");
console.log(student1.greet());

// Output:
// Constructor is called
// Welcome, Leon Kennedy!


// TypeScript Constructor Method 
class Studentt {
    name: string;
    gpa: number;

    constructor(name: string, gpa: number) {
        // Initialize the properties
        this.name = name;
        this.gpa = gpa;
    }
}

// Create an instance of Student class
// Pass "Leon Kennedy" and 3.8 as arguments to its constructor
let student11 = new Studentt("Leon Kennedy", 3.8);

// Print the name and gpa properties of student1
console.log(`Name: ${student11.name}`);
console.log(`GPA: ${student11.gpa}`);


// Creating Multiple Instances
class Studenttt {
    name: string;
    gpa: number;

    constructor(name: string, gpa: number) {
        // Initialize the properties
        this.name = name;
        this.gpa = gpa;
    }

    // Method to print student details
    printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`GPA: ${this.gpa}`);
        console.log();
    }
}

// Create an instance of Student class
// Pass "Leon Kennedy" and 3.8 as arguments to its constructor
let student111 = new Studenttt("Leon Kennedy", 3.8);

// Create another instance of Student class
// Pass "Ada Wong" and 3.6 as arguments to its constructor
let student222 = new Studenttt("Ada Wong", 3.6);

// Call the printInfo() method of the two instances
student111.printInfo();
student222.printInfo();


// Constructor Parameter Properties (Shorthand)
class Studentttt {
    constructor(public name: string, private gpa: number) {}

    getGPA(): number {
        return this.gpa;
    }
}

let student1111 = new Studentttt("Leon Kennedy", 3.8);
console.log(`Name: ${student1111.name}`);
console.log(`GPA: ${student1111.getGPA()}`);