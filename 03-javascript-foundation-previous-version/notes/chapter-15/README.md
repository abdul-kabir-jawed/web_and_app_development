
JavaScript Arrays Notes
=======================

Overview
--------

-   **Arrays**: Variables storing multiple values under one name.
    -   Example: `var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];`

Accessing Elements
------------------

-   Use index in square brackets, starting at 0.
    -   `cities[0]` is `"Atlanta"`, `cities[3]` is `"Denver"`.
    -   Example: `alert("Welcome to " + cities[3]);` displays `Welcome to Denver`.

Features
--------

-   Arrays can hold any type (numbers, strings, booleans, mixed): `var mixedArray = [1, "Bob", "Now is", true];`.
-   Index starts at 0 (e.g., 10 items means indices 0 to 9).

Naming Rules
------------

-   Same as variables: letters, numbers, `$`, `_`; no spaces; no number as first character.
-   Plural names preferred (e.g., `cities` not `city`).

Declaration
-----------

-   Use `var` only once for declaration.
-   Reassign values without `var`: `cities[0] = "New York";`.