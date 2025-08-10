JavaScript Variable Scope Notes
===============================

Overview
--------

Variable scope determines where variables can be accessed in your code. JavaScript has several types of scope that control variable visibility and lifetime.

Types of Scope
--------------

### 1\. Global Scope

Variables declared outside any function or block have global scope.

```
var globalVar = "I'm global";
let globalLet = "Also global";
const globalConst = "Global too";

function test() {
    console.log(globalVar); // Accessible
}

```

**Characteristics:**

-   Accessible from anywhere in the program
-   Attached to the global object (window in browsers, global in Node.js)
-   Can lead to naming conflicts and pollution

### 2\. Function Scope

Variables declared inside a function are only accessible within that function.

```
function myFunction() {
    var functionScoped = "Only inside function";
    let alsoFunctionScoped = "Me too";

    console.log(functionScoped); // Works
}

console.log(functionScoped); // ReferenceError

```

**Key Points:**

-   `var`, `let`, and `const` all have function scope
-   Parameters are also function-scoped
-   Inner functions can access outer function variables (closure)

### 3\. Block Scope

Variables declared with `let` and `const` inside a block `{}` are block-scoped.

```
if (true) {
    var varVariable = "Function scoped";
    let letVariable = "Block scoped";
    const constVariable = "Also block scoped";
}

console.log(varVariable); // Works
console.log(letVariable); // ReferenceError
console.log(constVariable); // ReferenceError

```

**Important:**

-   Only `let` and `const` have block scope
-   `var` does NOT have block scope
-   Applies to: if statements, loops, try/catch blocks, etc.

Variable Declaration Keywords
-----------------------------

### var

```
function varExample() {
    if (true) {
        var x = 1;
    }
    console.log(x); // 1 - accessible outside block
}

```

**Characteristics:**

-   Function-scoped or globally-scoped
-   Hoisted (can be used before declaration)
-   Can be redeclared
-   No block scope

### let

```
function letExample() {
    if (true) {
        let y = 1;
    }
    console.log(y); // ReferenceError - not accessible outside block
}

```

**Characteristics:**

-   Block-scoped
-   Hoisted but in "temporal dead zone"
-   Cannot be redeclared in same scope
-   Must be initialized before use

### const

```
function constExample() {
    if (true) {
        const z = 1;
        // z = 2; // TypeError - cannot reassign
    }
    console.log(z); // ReferenceError - not accessible outside block
}

```

**Characteristics:**

-   Block-scoped
-   Must be initialized at declaration
-   Cannot be reassigned
-   Hoisted but in "temporal dead zone"

Hoisting
--------

### var Hoisting

```
console.log(hoistedVar); // undefined (not ReferenceError)
var hoistedVar = "I'm hoisted";

```

Equivalent to:

```
var hoistedVar;
console.log(hoistedVar); // undefined
hoistedVar = "I'm hoisted";

```

### let/const Hoisting

```
console.log(hoistedLet); // ReferenceError: Cannot access before initialization
let hoistedLet = "I'm in temporal dead zone";

```

Lexical Scoping (Closures)
--------------------------

JavaScript uses lexical scoping - inner functions have access to variables in their outer scope.

```
function outerFunction(x) {
    // Outer scope

    function innerFunction(y) {
        // Inner scope
        console.log(x + y); // Can access x from outer scope
    }

    return innerFunction;
}

const closure = outerFunction(10);
closure(5); // 15

```

Scope Chain
-----------

When JavaScript looks for a variable, it searches:

1.  Current scope
2.  Parent scope
3.  Parent's parent scope
4.  ... up to global scope

```
var a = 1; // Global

function first() {
    var b = 2; // first() scope

    function second() {
        var c = 3; // second() scope
        console.log(a + b + c); // 6 - accesses all three scopes
    }

    second();
}

first();

```

Common Pitfalls
---------------

### 1\. Loop Variable Scope

```
// Problem with var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints: 3, 3, 3
}

// Solution with let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints: 0, 1, 2
}

```

### 2\. Accidental Global Variables

```
function oops() {
    undeclaredVariable = "I'm accidentally global!";
}

oops();
console.log(undeclaredVariable); // Works, but shouldn't!

```

### 3\. Variable Shadowing

```
var name = "Global";

function test() {
    var name = "Local"; // Shadows global variable
    console.log(name); // "Local"
}

test();
console.log(name); // "Global"

```

Best Practices
--------------

1.  **Use `let` and `const`** instead of `var`
2.  **Declare variables at the top** of their scope
3.  **Minimize global variables** to avoid pollution
4.  **Use meaningful names** to avoid shadowing
5.  **Prefer `const`** for values that don't change
6.  **Use block scope** to limit variable lifetime

Module Scope
------------

With ES6 modules, each module has its own scope:

```
// module1.js
const moduleVariable = "Private to this module";
export const publicVariable = "Exported";

// module2.js
import { publicVariable } from './module1.js';
console.log(publicVariable); // Works
console.log(moduleVariable); // ReferenceError

```

Summary
-------

-   **Global Scope**: Accessible everywhere, avoid overuse
-   **Function Scope**: Variables accessible within function only
-   **Block Scope**: `let`/`const` variables accessible within block only
-   **Hoisting**: `var` is hoisted with `undefined`, `let`/`const` hoisted but inaccessible
-   **Scope Chain**: JavaScript searches from inner to outer scope
-   **Best Practice**: Use `let`/`const`, minimize globals, understand closures
