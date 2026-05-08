// TypeScript Union and Intersection Type

let value: string | number;
value = "hello";  // valid
value = 42;       // also valid

function printId(id: number | string) {
  console.log("ID:", id);
}

printId(101);       // valid
printId("101A");    // valid


// TypeScript Intersection Type

type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person1: Person = {
  name: "Alex",
  age: 30
};

// Intersecting more than two types.

type Namee = { name: string };
type Agee = { age: number };
type Address = { city: string };

type FullPerson = Namee & Agee & Address;

const person: FullPerson = {
  name: "Daniel",
  age: 25,
  city: "New York"
};