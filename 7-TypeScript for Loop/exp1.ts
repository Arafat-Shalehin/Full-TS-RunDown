// FOR LOOP

for (let i: number = 0; i < 3; i++) {
    console.log("Hello World");
}

// Example 2: Display Sum of n Natural Numbers
const n: number = 100;
let sum: number = 0;

for (let i: number = 0; i <= n; i++) {
    sum += i;
}

console.log("Sum of natural numbers would  be: ", sum);

//Iterate Through an Array

const fruits: string[] = ["apple", "banana", "cherry"];

for (let i: number = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

}