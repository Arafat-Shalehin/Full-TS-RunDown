// TypeScript Decorators

// Decorator function that logs when a class is created
function logger(value: Function, context: ClassDecoratorContext) {

    // Print the name of the class being decorated
    console.log(`Creating class - ${context.name}`)
}

// Here, @logger is a decorator that calls the logger() function
@logger
class Person {
    constructor(public name: string) {}
}

// Output: Creating class - Person


/**
Enabling Decorators
To use decorators, you need to add the following settings in your TypeScript configuration file, i.e., tsconfig.json:
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": true
  }
}
*/


// Decorator to Seal a Class
function sealed<T extends Function>(value: T, context: ClassDecoratorContext) {
    Object.seal(value);
    Object.seal(value.prototype);
    console.log("Class sealed!");
}

@sealed
class Vehicle {
    wheels: number = 4;
}

// Try to add a new property
// Will fail silently or throw error in strict mode
(Vehicle as any).newProp = "test";
console.log((Vehicle as any).newProp);


// Property Decorators
function logAccess(value: undefined, context: ClassFieldDecoratorContext) {
    let backingField = Symbol();

    context.addInitializer(function () {
        Object.defineProperty(this, context.name, {
            get() {
                console.log(`Getting property: ${String(context.name)}`);
                return this[backingField];
            },
            set(newValue: any) {
                console.log(`Setting property: ${String(context.name)} to ${newValue}`);
                this[backingField] = newValue;
            },
            enumerable: true,
            configurable: true
        });
    });
}

class Product {
    @logAccess
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const laptop = new Product("Laptop");
console.log(laptop.name); // Logs access
laptop.name = "Gaming Laptop"; // Logs change


// Method Decorator
function measureTime(target: any, context: ClassMethodDecoratorContext) {
    const originalMethod = target;

    return function (this: any, ...args: any[]) {
        console.time("Execution");
        const result = originalMethod.apply(this, args);
        console.timeEnd("Execution");
        return result;
    };
}

class Calculator {
    @measureTime
    add(a: number, b: number): number {
        // Simulate delay
        for (let i = 0; i < 1000000; i++) {}
        return a + b;
    }
}

const calc = new Calculator();
calc.add(5, 3);


// Accessor Decorators
function isHidden(
    value: any,
    context: ClassGetterDecoratorContext | ClassSetterDecoratorContext
) {
    context.addInitializer(function () {
        Object.defineProperty(this, context.name, {
            enumerable: false
        });
    });
    return value;
}

class UserProfile {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    @isHidden
    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

const user = new UserProfile(30);

// Using the getter gives 'undefined' because it is hidden
console.log(user.age);

// Verifying that '_age' property still exists
console.log(Object.keys(user));