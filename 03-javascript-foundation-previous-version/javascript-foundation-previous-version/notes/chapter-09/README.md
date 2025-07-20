

JavaScript Prompts Notes
========================

Overview
--------

-   **Prompts**: Ask users for input with a response field.
    -   Example: `var spec = prompt("Your species?", "human");` (asks question, defaults to `"human"`, stores response in `spec`).

Syntax
------

-   Declare a variable to capture response: `var spec = prompt(...);`.
-   Two parameters: question string and optional default response.
-   Use variables for strings: `var question = "Your species?"; var defaultAnswer = "human"; var spec = prompt(question, defaultAnswer);`.

Response Type
-------------

-   Always a string, even if a number is entered (e.g., `"3"` not `3`).
    -   Math issue: `var num = prompt("How many cats?"); var result = num + 1;` concatenates (e.g., `"31"` not `4`).
-   User actions:
    -   OK with no input: Returns empty string (`""`).
    -   Cancel: Returns `null`.

Style
-----

-   Use double quotes (`" "`) for strings.
-   Prefer `prompt` over `window.prompt` for simplicity.