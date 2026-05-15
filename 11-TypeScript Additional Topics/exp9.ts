// TypeScript Set

// Create a new Set that only holds numbers
const numbers = new Set<number>();

// Add items to the Set
numbers.add(1);
numbers.add(2);
numbers.add(1); // Duplicate, will be ignored

console.log(numbers); 

// Output: Set(2) { 1, 2 }


// Iterate Sets
const set1 = new Set<number>([1, 2, 3]);

// Loop through the Set
for (let value of set1) {
    console.log(value);
}


// TypeScript WeakSet
const weakSet = new WeakSet<object>();

let obj = { message: 'Hi', sendMessage: true };

// Add an object to the WeakSet
weakSet.add(obj);

console.log(weakSet); 


/**
WeakSet Methods

Method	        Description

add(value)	    Adds an object to the WeakSet
delete(value)	Removes an object
has(value)	    Checks if an object exists

WeakSets are not iterable and do not have size(), keys(), or values() methods.

Key Differences: Set vs. WeakSet

Feature	    Set	                                    WeakSet

Data types	Any type (string, number, object)	    Only objects
Iterable?	Yes	No
Methods	    add(), delete(), has(), clear(), etc.	add(), delete(), has() only
 */