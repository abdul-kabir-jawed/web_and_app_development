
JavaScript Variable Names: Legal & Illegal
==========================================

This project demonstrates the rules for naming variables in JavaScript, including legal and illegal variable names, as per the requirements of Chapter 4: Variable Names - Legal & Illegal. Below is a solution that addresses all the specified tasks and displays the results in a browser with a clean, styled layout.

Tasks Completed
---------------

1.  **Declare 3 variables in one statement**: Three variables are declared using a single `var` statement.
2.  **Declare 5 legal & 5 illegal variable names**: Examples of valid and invalid variable names are provided to illustrate JavaScript naming rules.
3.  **Display in the browser**:
    -   A heading: "Rules for naming JS variables"
    -   Rules for variable naming, including allowed characters, valid starting characters, case sensitivity, and restrictions on JavaScript keywords.

Solution
--------

### HTML File (index.html)

The following HTML file contains the JavaScript code and styles to display the variable naming rules in a browser.

Rules for naming JS variables
=============================

**a)** Variable names can only contain **letters**, **numbers**, **underscores**, and **dollar signs**.

For example: `$my_1stVariable`

**b)** Variables must begin with a **letter**, **underscore**, or **dollar sign**.

For example: `$name`, `_name`, or `name`

**c)** Variable names are **case sensitive**.

**d)** Variable names should not be JavaScript **keywords**.

**Examples of Legal Variable Names:**

**Examples of Illegal Variable Names:**

```
<script>
    // Task 1: Declare 3 variables in one statement
    var firstName = "John", age = 25, isStudent = true;

    // Task 2: Declare 5 legal and 5 illegal variable names
    // Legal variable names
    var $price = 10;
    var _count = 5;
    var userName = "Alice";
    var my_variable = true;
    var item2 = "Book";

    // Illegal variable names (commented to avoid syntax errors)
    // var 1stItem = "Pen"; // Starts with a number
    // var user-name = "Bob"; // Contains hyphen
    // var for = 100; // JavaScript keyword
    // var my variable = 50; // Contains space
    // var @email = "test"; // Invalid character

    // Task 3: Display legal and illegal variable names in the browser
    const legalNames = ['$price', '_count', 'userName', 'my_variable', 'item2'];
    const illegalNames = ['1stItem', 'user-name', 'for', 'my variable', '@email'];

    const legalList = document.getElementById('legal');
    const illegalList = document.getElementById('illegal');

    legalNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        legalList.appendChild(li);
    });

    illegalNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        illegalList.appendChild(li);
    });
</script>

```