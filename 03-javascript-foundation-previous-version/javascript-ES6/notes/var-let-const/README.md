# JavaScript Variable Declarations: `var`, `let`, and `const`

This document provides concise notes on JavaScript's `var`, `let`, and `const` for variable declarations, covering their scope, hoisting, re-declaration, re-assignment, and best practices.

## 1. `var`

- **Scope**: Function-scoped or globally scoped (if declared outside a function).
  - Not block-scoped, accessible outside `{}` blocks (e.g., `if`, `for`).
  - Example:
    ```javascript
    if (true) {
      var x = 10;
    }
    console.log(x); // 10
    ```
- **Hoisting**: Hoisted to the top of their scope, initialized as `undefined`.
  - Example:
    ```javascript
    console.log(y); // undefined
    var y = 20;
    ```
- **Re-declaration**: Can be re-declared in the same scope.
  - Example:
    ```javascript
    var z = 30;
    var z = 40; // No error
    ```
- **Re-assignment**: Can be reassigned.
  - Example:
    ```javascript
    var a = 50;
    a = 60; // Works
    ```
- **Issues**:
  - Lack of block scoping causes errors.
  - Hoisting leads to unpredictable behavior.
  - Avoided in modern JavaScript.

## 2. `let`

- **Scope**: Block-scoped (limited to `{}` block).
  - Example:
    ```javascript
    if (true) {
      let b = 15;
      console.log(b); // 15
    }
    console.log(b); // ReferenceError: b is not defined
    ```
- **Hoisting**: Hoisted but not initialized (Temporal Dead Zone, TDZ).
  - Example:
    ```javascript
    console.log(c); // ReferenceError: Cannot access 'c' before initialization
    let c = 25;
    ```
- **Re-declaration**: Cannot be re-declared in the same scope.
  - Example:
    ```javascript
    let d = 35;
    let d = 45; // SyntaxError: Identifier 'd' has already been declared
    ```
- **Re-assignment**: Can be reassigned.
  - Example:
    ```javascript
    let e = 55;
    e = 65; // Works
    ```
- **Use Case**: Use for variables that need reassignment within a block.

## 3. `const`

- **Scope**: Block-scoped, like `let`.
  - Example:
    ```javascript
    if (true) {
      const f = 70;
      console.log(f); // 70
    }
    console.log(f); // ReferenceError: f is not defined
    ```
- **Hoisting**: Hoisted but not initialized (TDZ applies).
  - Example:
    ```javascript
    console.log(g); // ReferenceError: Cannot access 'g' before initialization
    const g = 80;
    ```
- **Re-declaration**: Cannot be re-declared in the same scope.
  - Example:
    ```javascript
    const h = 90;
    const h = 100; // SyntaxError: Identifier 'h' has already been declared
    ```
- **Re-assignment**: Cannot be reassigned.
  - Example:
    ```javascript
    const i = 110;
    i = 120; // TypeError: Assignment to constant variable
    ```
- **Object/Array Mutability**: Variable binding is constant, but object/array contents can be modified.
  - Example:
    ```javascript
    const obj = { name: "Alice" };
    obj.name = "Bob"; // Works
    obj = {}; // TypeError: Assignment to constant variable
    ```
- **Use Case**: Use for variables that should not be reassigned.

## Key Differences

| Feature            | `var`                          | `let`                          | `const`                        |
|--------------------|--------------------------------|--------------------------------|--------------------------------|
| Scope              | Function or global            | Block                         | Block                         |
| Hoisting           | Hoisted, initialized `undefined` | Hoisted, TDZ applies          | Hoisted, TDZ applies          |
| Re-declaration     | Allowed                       | Not allowed                   | Not allowed                   |
| Re-assignment      | Allowed                       | Allowed                       | Not allowed                   |
| Modern Usage       | Rarely used                   | Common for variables          | Used for constants            |

## Best Practices

- Use `const` by default for immutability.
- Use `let` for variables needing reassignment (e.g., loop counters).
- Avoid `var` due to its quirks (hoisting, no block scope).
- Always declare variables to avoid implicit globals.

## Example Combining All

```javascript
function example() {
  var x = 1; // Function-scoped
  let y = 2; // Block-scoped
  const z = 3; // Block-scoped, non-reassignable

  if (true) {
    var x = 10; // Re-declares same x
    let y = 20; // New y in block
    const z = 30; // New z in block
    console.log(x, y, z); // 10, 20, 30
  }

  console.log(x, y, z); // 10, 2, 3
}
example();
```

```
