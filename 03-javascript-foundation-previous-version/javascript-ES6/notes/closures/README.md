# JavaScript Lexical Scope and Closures

This document provides concise notes on JavaScript's lexical scope and closures, covering their definitions, behavior, and practical usage.

## 1. Lexical Scope

- **Definition**: Lexical scope (also called static scope) determines the accessibility of variables based on where they are defined in the source code. JavaScript uses lexical scoping, meaning a variable's scope is determined at the time the code is written, not when it is executed.
- **Key Points**:
  - Variables are accessible within the scope they are defined in and any nested scopes.
  - Inner functions can access variables from their outer function's scope, but not vice versa.
  - Scope is hierarchical, following the structure of the code (e.g., global scope, function scope, block scope).
  - Example:
    ```javascript
    let globalVar = "I am global";

    function outerFunction() {
      let outerVar = "I am in outer function";

      function innerFunction() {
        let innerVar = "I am in inner function";
        console.log(globalVar); // I am global
        console.log(outerVar);  // I am in outer function
        console.log(innerVar);  // I am in inner function
      }
      innerFunction();
      console.log(innerVar); // ReferenceError: innerVar is not defined
    }
    outerFunction();
    ```
- **Block Scope with `let`/`const`**:
  - Variables declared with `let` or `const` are block-scoped, limiting their accessibility to the `{}` block they are defined in.
  - Example:
    ```javascript
    if (true) {
      let blockVar = "I am block-scoped";
      console.log(blockVar); // I am block-scoped
    }
    console.log(blockVar); // ReferenceError: blockVar is not defined
    ```
- **Function Scope with `var`**:
  - Variables declared with `var` are function-scoped, not block-scoped.
  - Example:
    ```javascript
    if (true) {
      var functionVar = "I am function-scoped";
      console.log(functionVar); // I am function-scoped
    }
    console.log(functionVar); // I am function-scoped (if inside a function)
    ```
- **Lexical Scope Rules**:
  - JavaScript looks for variables in the current scope, then moves up to parent scopes until it reaches the global scope (scope chain).
  - Variables declared in a parent scope are accessible in child scopes, but not the other way around.

## 2. Closures

- **Definition**: A closure is a function that retains access to variables from its outer (enclosing) lexical scope, even after the outer function has finished executing. It "closes over" its outer scope's variables.
- **Key Points**:
  - Closures allow functions to maintain state by preserving access to variables in their lexical scope.
  - Created whenever a function is defined inside another function and references outer variables.
  - Commonly used for data privacy, event handlers, and functional programming patterns.
  - Example:
    ```javascript
    function outerFunction() {
      let outerVar = "I am from outer";

      function innerFunction() {
        console.log(outerVar); // Accesses outerVar via closure
      }
      return innerFunction;
    }

    const closureFunc = outerFunction();
    closureFunc(); // I am from outer
    ```
- **How Closures Work**:
  - When `outerFunction` returns `innerFunction`, `innerFunction` retains a reference to `outerVar` through its lexical scope.
  - The JavaScript engine keeps `outerVar` in memory as long as `innerFunction` exists, even after `outerFunction` finishes.
- **Practical Example (Counter)**:
    ```javascript
    function createCounter() {
      let count = 0;

      return {
        increment: function() {
          count++;
          return count;
        },
        getCount: function() {
          return count;
        }
      };
    }

    const counter = createCounter();
    console.log(counter.increment()); // 1
    console.log(counter.increment()); // 2
    console.log(counter.getCount());  // 2
    ```
  - The `increment` and `getCount` functions form closures over `count`, preserving its value and allowing controlled access.
- **Use Cases**:
  - **Data Encapsulation**: Hide variables from the global scope (e.g., private variables in modules).
    ```javascript
    const createPerson = () => {
      let name = "Alice";

      return {
        getName: () => name,
        setName: (newName) => { name = newName; }
      };
    };

    const person = createPerson();
    console.log(person.getName()); // Alice
    person.setName("Bob");
    console.log(person.getName()); // Bob
    console.log(person.name); // undefined (name is private)
    ```
  - **Event Handlers**:
    ```javascript
    function setupButton() {
      let clicks = 0;
      const button = document.createElement("button");
      button.addEventListener("click", () => {
        clicks++;
        console.log(`Clicked ${clicks} times`);
      });
      document.body.appendChild(button);
    }
    setupButton();
    ```
    - The event listener retains access to `clicks` via a closure.
  - **Partial Application/Currying**:
    ```javascript
    function multiply(a) {
      return function(b) {
        return a * b;
      };
    }
    const double = multiply(2);
    console.log(double(5)); // 10
    ```
- **Potential Pitfalls**:
  - **Memory Usage**: Closures keep outer variables in memory, which can lead to memory leaks if not managed properly.
  - **Unexpected Behavior**: Variables in closures are references, not copies, so changes to the outer variable affect all closures.
    ```javascript
    function createFunctions() {
      let arr = [];
      for (var i = 0; i < 3; i++) {
        arr.push(() => console.log(i));
      }
      return arr;
    }
    const funcs = createFunctions();
    funcs[0](); // 3 (var is function-scoped, shared by all closures)
    funcs[1](); // 3
    funcs[2](); // 3
    ```
    - Fix with `let` (block-scoped):
    ```javascript
    function createFunctions() {
      let arr = [];
      for (let i = 0; i < 3; i++) {
        arr.push(() => console.log(i));
      }
      return arr;
    }
    const funcs = createFunctions();
    funcs[0](); // 0
    funcs[1](); // 1
    funcs[2](); // 2
    ```

## Key Differences and Summary

- **Lexical Scope**: Determines where variables are accessible based on their position in the code. It’s static and predictable, enabling the scope chain.
- **Closures**: A mechanism where inner functions retain access to outer scope variables, even after the outer function has executed. Closures rely on lexical scoping.
- **Relationship**: Closures are a natural outcome of lexical scoping, allowing functions to "remember" their environment.
- **Use Cases**:
  - Lexical scope ensures predictable variable access.
  - Closures enable powerful patterns like data privacy, state management, and functional programming.

## Best Practices

- Use `let` or `const` for block-scoping to avoid issues with `var` in closures.
- Be mindful of memory usage when creating closures, especially in loops or long-lived functions.
- Use closures for encapsulation to mimic private variables in JavaScript.
- Test closure behavior in loops to ensure variables are captured as intended (use `let` for loop variables).

## Example Combining Lexical Scope and Closures

```javascript
function createGreeter(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Alice"); // Hello, Alice!
sayHi("Bob");     // Hi, Bob!
```

sayHello and sayHi are closures that retain access to their own greeting variable from their respective lexical scopes.
