# TypeScript Deep Dive

> A systematic exploration of TypeScript through implementation, experimentation, and documentation.

![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)

---

## Overview

This repository documents my journey learning TypeScript in depth. Instead of following tutorials, I write code from scratch, experiment with edge cases, and document my understanding through extensive inline comments. Each topic is explored through practical examples, tests, and real-world implementation patterns.

This is not a tutorial repository—it's a living documentation of how TypeScript concepts work internally, why they matter, and how to use them effectively in production code.

---

## Why This Repository Exists

TypeScript is widely used, but truly understanding its type system, generics, utility types, and advanced features requires more than reading documentation. This repository exists to:

- Build muscle memory by writing code manually
- Document understanding through implementation
- Test edge cases that tutorials often skip
- Create a reference for future projects
- Demonstrate consistent learning habits

---

## Learning Philosophy

- **Write first, understand later**: I implement concepts before reading explanations, then refine based on understanding.
- **Test the boundaries**: Every topic includes edge cases and error scenarios.
- **Document as I learn**: Comments capture my thought process, not just the final answer.
- **Consistency over intensity**: Regular commits track progress over time.
- **Focus on internals**: Understanding how TypeScript compiles to JavaScript, not just syntax.

---

## Topics Covered

### Fundamentals
- Variables and constants
- Data types (primitive and complex)
- Operators and comparison operators
- Comments and documentation

### Control Flow
- `if...else` statements
- Ternary operators
- `for` loops
- `while` loops
- `for...each` loops
- `break` and `continue` statements
- `switch` statements

### Functions
- Function declarations and expressions
- Arrow functions
- Parameters (required, default, optional, rest)
- Function overloading
- Return type inference

### Type System
- All TypeScript types (primitive, object, union, intersection, etc.)
- Type narrowing
- Type guards
- Type assertions

### Object-Oriented Programming
- Classes and inheritance
- Access modifiers (`public`, `private`, `protected`)
- Getters and setters
- Abstract classes and methods
- Static methods and properties
- Constructors and parameter properties

### Advanced TypeScript
- Generics (constraints, defaults, variance)
- Utility types (`Partial`, `Pick`, `Omit`, `Record`, etc.)
- Decorators (class, method, property, parameter)
- Template literal types

### Data Structures
- Tuples
- Maps
- Sets

### Organization
- Modules (ESM)
- Namespaces

---

## Folder Structure

```
TS/
├── 01-variables-and-constants/
│   ├── examples/
│   └── edge-cases/
├── 02-data-types/
│   ├── examples/
│   └── edge-cases/
├── 03-operators/
│   ├── examples/
│   └── edge-cases/
├── 04-control-flow/
│   ├── examples/
│   └── edge-cases/
├── 05-functions/
│   ├── examples/
│   └── edge-cases/
├── 06-classes/
│   ├── examples/
│   └── edge-cases/
├── 07-advanced-types/
│   ├── examples/
│   └── edge-cases/
├── 08-generics/
│   ├── examples/
│   └── edge-cases/
├── 09-utility-types/
│   ├── examples/
│   └── edge-cases/
├── 10-decorators/
│   ├── examples/
│   └── edge-cases/
└── README.md
```

Each topic folder contains:
- **examples/**: Core implementations with detailed comments
- **edge-cases/**: Boundary conditions, error scenarios, and unusual behavior

---

## Code Philosophy

### Documentation
Every file includes inline comments explaining:
- What the code does
- Why it works that way
- Trade-offs and alternatives
- Common pitfalls

### Testing
Edge cases are explicitly tested to understand:
- Type inference boundaries
- Compiler behavior
- Runtime vs compile-time differences

### Consistency
- Naming conventions follow TypeScript best practices
- Code is formatted consistently
- Each topic builds on previous concepts

---

## Progress Tracking

Progress is tracked through GitHub commits, with each commit representing:
- A new topic or subtopic
- Refinement of existing code
- Addition of edge cases
- Documentation improvements

Check the commit history to see the learning journey chronologically.

---

## How to Use This Repository

### For Learning
1. Start with fundamentals (variables, types, operators)
2. Move through control flow and functions
3. Progress to classes and OOP concepts
4. Explore advanced features (generics, utility types)
5. Read comments to understand the reasoning

### For Reference
- Search by topic using the folder structure
- Check edge-cases folders for boundary conditions
- Review comments for implementation details

### For Practice
- Try to implement examples before reading the code
- Add your own edge cases
- Refactor existing code for better patterns

---

## Tech Stack

- **TypeScript**: 5.0+
- **Node.js**: For running TypeScript files
- **Editor**: VS Code with TypeScript extension

---

## Future Roadmap

- [ ] Add integration examples with popular frameworks
- [ ] Include performance benchmarks for type checking
- [ ] Add more advanced generic patterns
- [ ] Document TypeScript configuration options
- [ ] Create comparison guides (TypeScript vs similar languages)

---

## Contributing

This is a personal learning repository, but suggestions are welcome:
- Report errors or misunderstandings in the code
- Suggest additional edge cases to explore
- Recommend topics that should be added

---

**Note**: This repository represents my personal learning journey. Some implementations may be refined over time as my understanding deepens. Check the commit history for the evolution of each topic.
