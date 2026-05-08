// TypeScript void Type

function logMessage(message: string): void {
    console.log(message);
}

logMessage("Good Morning!");  

// Output: Good Morning!

// void With Arrow Function

const logClick = (): void => {
    console.log("Button clicked!");
}

logClick();