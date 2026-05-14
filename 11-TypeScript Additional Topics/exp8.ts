// TypeScript Map

let idStudents: Map<number, string> = new Map();

// Add elements
idStudents.set(1, "Luke");
idStudents.set(2, "Leia");

console.log(idStudents);

// Output: Map(2) { 1 => 'Luke', 2 => 'Leia' }


// Insert Item to Map
let scores: Map<string, number> = new Map();

// Add elements
scores.set("Alice", 85);
scores.set("Bob", 92);

console.log(scores);


// Map with Object or Function Keys
// Create an empty Map
let map = new Map<object, object>();

// Create an object to use as key
let obj = {};

// Insert an object as key-value pair
map.set(obj, { name: "John", age: 27 });

// Get the value using the object key
console.log(map.get(obj));


// Map Operations
// Access in M.E (Map Element) with .get();
// Check in M.E with .has();
// Delete in M.E with delete();
// Clear in M.E with clear();


// Iterate Through a Map
let studentInfo: Map<string, string | number> = new Map();

studentInfo.set("name", "Jack");
studentInfo.set("score", 98);
studentInfo.set("subject", "Biology");

// Iterate over entries using for...of
for (let [key, value] of studentInfo) {
    console.log(`${key}: ${value}`);
}


/**
Methods	        Description

set(key,value)	Adds a new key-value pair to the map
get(key)	    Returns the value associated with a key
delete(key) 	Removes a key-value pair by key
clear()	        Removes all key-value pairs from the map
has(key)	    Returns a boolean indicating whether a key exists in the map
entries()	    Returns a new map iterator object that contains the key-value pairs for each element
 */


// TypeScript WeakMap
let weakMap: WeakMap<object, string> = new WeakMap();
console.log(weakMap);

let objj = {};

// Adding object (element) to WeakMap
weakMap.set(objj, 'hello');

console.log(weakMap); 


/*
Methods	        Description
get(key)	    Retrieves the value associated with the key from the WeakMap.
set(key, value)	Adds a new key-value pair associated with the WeakMap.
delete(key)	    Removes the key-value pair associated with the key.
has(key)	    Checks whether the WeakMap contains the specified key.
*/