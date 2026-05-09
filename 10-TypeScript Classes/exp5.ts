// TypeScript Static Properties and Methods

// TypeScript Static Properties
class Dog {
    // Declare a static property
    static bark: string = "Woof!";

    constructor(private name: string, private owner: string) {}
    
    dogIntro(): string {
        return `${this.name} loves its owner, ${this.owner}, and says ${Dog.bark}`;
    }
}

// Create instances of Dog class
let dog1 = new Dog("Wolfie", "Jessica");
let dog2 = new Dog("Honey", "James");

console.log(dog1.dogIntro());
console.log(dog2.dogIntro());

// Access the static property outside the class
console.log(`All dogs say ${Dog.bark}`);

// TypeScript Static Properties
class Employee {
    static headcount: number = 0; // Static property

    constructor(private name: string, private jobTitle: string) {
        // Increment headcount whenever a new instance is created
        Employee.headcount++;
    }
    
    getInfo(): void {
        console.log(`Employee: ${this.name}`);
        console.log(`Job Title: ${this.jobTitle}\n`);
    }
}

let employee1 = new Employee("John Doe", "Developer");
let employee2 = new Employee("Jane Doe", "Designer");

// Print the employee details
employee1.getInfo();
employee2.getInfo();

// Print the static property
console.log(`Headcount: ${Employee.headcount}`);

/*
Output

Employee: John Doe
Job Title: Developer

Employee: Jane Doe
Job Title: Designer

Headcount: 2
In this program, we've created a static property headcount that is incremented each time we create an instance of the Employee class.

Initially, the value of headcount is 0.

And since we then proceeded to create two Employee instances (employee1 and employee2), the final value of headcount is 2.
*/


// TypeScript Static Methods

class Dogg {
    private static bark: string = "Woof!";

    constructor(private name: string, private owner: string) {}
    
    dogIntro(): string {
        return `${this.name} loves its owner, ${this.owner}, and says ${Dog.bark}`;
    }

    // Create a static method that returns the static property
    static getBark(): string {
        return Dogg.bark;
    }
}

// Create instances of Dog class
let dog11 = new Dog("Wolfie", "Jessica");
let dog22 = new Dog("Honey", "James");

console.log(dog11.dogIntro());
console.log(dog22.dogIntro());

// Access the static method
let dogBark: string = Dogg.getBark();

console.log(`All dogs say ${dogBark}`);

/*
Output

Wolfie loves its owner, Jessica, and says Woof!
Honey loves its owner, James, and says Woof!
All dogs say Woof!
Here, the static method getBark() returns the value of the private static property bark.

Outside the class, we accessed the static method by using the class name instead of the objects dog1 or dog2:

// Access the static method
let dogBark: string = Dog.getBark();
*/