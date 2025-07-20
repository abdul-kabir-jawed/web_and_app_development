JavaScript Array Manipulation Notes
===================================

Overview
--------

-   **Array Manipulation**: Arrays can be declared empty, assigned values, and modified.
    -   Declare empty array: `var pets = [];`.
    -   Assign values: `pets[0] = "dog"; pets[1] = "cat";`.
    -   Leave gaps: `pets[3] = "lizard"; pets[6] = "snake";` (indices 0--2, 4--5 are `undefined`).

Adding Elements
---------------

-   Assign to new indices: `pets[3] = "lizard";` adds `"lizard"` at index 3.
-   Use `push()` to add to the end: `pets.push("fish", "ferret");` adds multiple elements.

Removing Elements
-----------------

-   Use `pop()` to remove the last element: `pets.pop();` removes `"bird"` from `["dog", "cat", "bird"]`.

Updating Elements
-----------------

-   Reassign an index: `pets[0] = "newDog";` replaces `"dog"`.

Key Points
----------

-   Indices start at 0.
-   Gaps in arrays are valid but return `undefined` when accessed.
