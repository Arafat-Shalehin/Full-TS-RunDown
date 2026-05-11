// TypeScript Utility Types

/**
Used Utility Types

Utility Type	                    Description

Partial <Type>	                    Makes all properties optional.
Required<Type>	                    Makes all properties required.
Readonly<Type>	                    Makes all properties read-only.
Pick    <Type, Keys>	            Keeps only certain properties.
Omit    <Type, Keys>	            Removes certain properties.
Record  <Keys, Type>	            Creates objects with specific keys and types.
Exclude <UnionType, ExcludedMembers>Removes specific types from a union.
Extract <Type, Union>	            Extracts specific types from a union.
ReturnType<Type>	                Gets the return type of a function.
Parameters<Type>	                Gets the parameter types of a function as a tuple.
ConstructorParameters<Type>	        Gets the parameter types of the constructor of a class.
 */


// Partial
// The Partial type makes all properties in a type optional. Use it when you only want some properties from an object.
// Interface with 3 required properties
interface Student {
    id: number;
    name: string;
    gpa: number;
}

// Create a partial type from Student
// All Student properties are now optional
type PartialStudent = Partial<Student>;

// Object with only id property
let student1: PartialStudent = {id: 101};
console.log(student1);

// Object with only name and gpa properties
let student2: PartialStudent = {name: "Peter Parker", gpa: 4};
console.log(student2);

// Object with only id and gpa properties
let student3: Partial<Student> = {id: 105, gpa: 3.5};
console.log(student3);

/*
Output

{ id: 101 }
{ name: 'Peter Parker', gpa: 4 }
{ id: 105, gpa: 3.5 }
Here, the Student interface has three required properties: id, name, and gpa. Thus, you can't create any Student object that doesn't include these properties:

// Error: name and gpa are missing
let student: Student = {id: 101};
However, we can accomplish this task by creating a partial type from Student:

type PartialStudent = Partial<Student>;
So, PartialStudent is like a version of the Student type, but with all its properties being optional.

Notice the following code in our program:

let student3: Partial<Student> = {id: 105, gpa: 3.5};
This code is equivalent to

let student3: PartialStudent = {id: 105, gpa: 3.5};
*/


/**
Required
Readonly

The above two utility works exactly as it is sounds like.
 */


// Pick
// Pick creates a type with only the specified properties. Use it when you only need a few fields from a bigger type.
type Studentt = {
    id: number;
    name: string;
    gpa: number;
    phone: number;
}

// Create a type that only has id and gpa
type IdGPA = Pick<Studentt, "id" | "gpa">;

// Create another type that only has name
type StudentName = Pick<Studentt, "name">;

// Create object of IdGPA type
let student11: IdGPA = {id: 101, gpa: 2.6};
console.log(student1);

// Create object of StudentName type
let student22: StudentName = {name: "Peter Parker"};
console.log(student2);

/**
Output

{ id: 101, gpa: 2.6 }
{ name: 'Peter Parker' }
 */


// Omit
// Omit creates a type by removing the specified properties.
type Studenttt = {
    id: number;
    name: string;
    gpa: number;
    phone: number;
}

// Create a type that doesn't have id
type NoId = Omit<Studenttt, "id">;

// Create another type that doesn't have gpa and phone
type IdName = Omit<Studenttt, "gpa" | "phone">;

// Create object of NoId type
let student111: NoId = {name: "Peter Parker", gpa: 4, phone: 5786389};
console.log(student111);

// Create object of IdName type
let student222: IdName = {id: 103, name: "Gwen Stacy"};
console.log(student222);

/**
Output

{ name: 'Peter Parker', gpa: 4, phone: 5786389 }
{ id: 103, name: 'Gwen Stacy' }
 */


// Record
// Record creates an object type with specific keys and value types. You use it when you know all the keys and want them to follow a pattern.
type Party = "Democrat" | "Republican" | "Independent";

// New type where Party values are keys
// Each key has a numerical value
type VoteCount = Record<Party, number>;

let presidentialVote: VoteCount = {
    Democrat: 71,
    Republican: 96,
    Independent: 2
};

console.log(presidentialVote);

/**
Output

{ Democrat: 71, Republican: 96, Independent: 2 }

Here, the Party type can have one of three values: "Democrat", "Republican", or "Independent".

Then, we created a VoteCount type using Record, which stores key-value pairs in the following way:

Keys: The values permitted by the Party type serve as the keys.
Values: Each key is assigned a numerical value.
type VoteCount = Record<Party, number>;
We then created a presidentialVote object of VoteCount type:

let presidentialVote: VoteCount = {
    Democrat: 71,
    Republican: 96,
    Independent: 2
};
The key-value pairs of presidentialVote are given below:

Key	        Value
Democrat	71
Republican	96
Independent	2
*/


// Exclude
// Exclude creates a type by removing specific types from a union. This type is useful for narrowing down possible values.
type OrderStatus = "cart" | "bought" | "cancelled" | "error";

// Create a new type by excluding "error" status
type ValidStatus = Exclude<OrderStatus, "error">;

// Valid code
let order1: ValidStatus = "bought";
let order2: ValidStatus = "cancelled";
let order3: ValidStatus = "cart";

// Invalid code because "error" doesn't exist in ValidStatus
// let order4: ValidStatus = "error";

console.log(order1);
console.log(order2);
console.log(order3);

/**
Output

bought
cancelled
cart

Here, the ValidStatus type has all the values of OrderStatus except for the "error" type

type OrderStatus = "cart" | "bought" | "cancelled" | "error";

type ValidStatus = Exclude<OrderStatus, "error">;
You can add further exclusions with the | operator:

Exclude<OrderStatus, "cancelled" | "error">;
The above code excludes "cancelled" and "error".
 */


// Extract
// Extract creates a type by extracting specific types from a union. This type is useful for narrowing down possible values.
type OrderStatuss = "cart" | "bought" | "cancelled" | "error";

// Create a new type by extracting "bought" status
type Bought = Extract<OrderStatus, "bought">;

// Create object of Bought type
let order11: Bought = "bought";
console.log(order1);

// Invalid: "cart" is absent in Bought type
// let order2: Bought = "cart";

// Output: bought

/**
Here, the Bought type can only store "bought":

type OrderStatus = "cart" | "bought" | "cancelled" | "error";

type Bought = Extract<OrderStatus, "bought">;
You can extract further values with the | operator:

Extract<OrderStatus, "cancelled" | "error">;
The above code creates a type that can only store "cancelled" and "error".
 */


// ReturnType
// ReturnType gets the return type of a function.
function greet(name: string): string {
    return `Welcome, ${name}!`;
}

// Get the return type of greet() i.e. string
type GreetReturn = ReturnType<typeof greet>;

// Create a variable of GreetReturn type
let message: GreetReturn = greet("Lord Vader");
console.log(message);

/*
Output

Welcome, Lord Vader!
Here, the greet() function returns a string. So, the GreetReturn type will be identical to the string type.

Therefore, the following code:

let message: GreetReturn = greet("Lord Vader");
is equivalent to

let message: string = greet("Lord Vader");
*/


// Parameters
// The Parameters utility type gets the parameter types of a function as a tuple.
function greett(name: string, age: number): string {
    return `Welcome, ${name}. You are ${age} years old!`;
}

// GreetParams is a [string, number] tuple
type GreetParams = Parameters<typeof greett>;

// Create a variable of GreetParams type
let personInfoo: GreetParams = ["Vader", 45];

// Print the tuple elements
console.log(personInfoo[0]);
console.log(personInfoo[1]);

// Pass the tuple elements as arguments to greet()
let messagee: string = greett(personInfoo[0], personInfoo[1]);
console.log(messagee);


// ConstructorParameters
// The ConstructorParameters type is similar to Parameters, except that it returns the parameter types of the constructor of an object.
class Person {

    constructor(private name: string, private age: number) {}
    
    greet(): void {
        console.log(`Welcome, ${this.name}. You are ${this.age} years old!`);
    }
}

// PersonParams is a [string, number] tuple
type PersonParams = ConstructorParameters<typeof Person>;

// Create a variable of PersonParams type
let personInfo: PersonParams = ["Vader", 45];

// Print the tuple elements
console.log(personInfo[0]);
console.log(personInfo[1]);

// Create an instance of Person and pass the
// Tuple elements as arguments to the constructor
let person1 = new Person(personInfo[0], personInfo[1]);
person1.greet();

/**
Output

Vader
45
Welcome, Vader. You are 45 years old!
Here, the PersonParams type is a tuple consisting of the constructor parameter types of Person.
*/