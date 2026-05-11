// TypeScript NameSpace

namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtils.add(5, 10)); 
// Output: 
// 15


// NameSpace with Multiple Functions
namespace StringUtils {
  export function toUpper(text: string): string {
    return text.toUpperCase();
  }

  export function toLower(text: string): string {
    return text.toLowerCase();
  }
}

console.log(StringUtils.toUpper("hello")); // HELLO
console.log(StringUtils.toLower("WORLD")); // world


// NameSpace with a Class
namespace App {
  export class User {
    constructor(public name: string) {}
    greet() {
      console.log("Hello, " + this.name);
    }
  }
}

const user = new App.User("Alice");
user.greet(); // Hello, Alice


// Nested NameSpace
namespace Company {
  export namespace HR {
    export class Employee {
      constructor(public name: string) {}
    }
  }
}

const emp = new Company.HR.Employee("John");
console.log(emp.name); // John