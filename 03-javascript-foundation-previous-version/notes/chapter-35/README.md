JavaScript Functions Notes
==========================

Overview
--------

-   Functions are reusable blocks of JavaScript code executed when invoked, reducing repetition and improving readability.

Example (Time Display)
----------------------

```
function tellTime() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  alert("Current time: " + theHr + ":" + theMin);
}

```

-   Invoke with: `tellTime();`.

Structure
---------

-   **Declaration**: `function functionName() {`.
-   **Code Block**: Indented (typically 2 spaces) for clarity.
-   **Closing**: `}` on its own line.

Key Points
----------

-   Function names follow variable naming rules (letters, numbers, `$`, `_`, no spaces, no starting with a number).
-   Functions are technically variables.
-   Place functions before main code (e.g., in external JS file, HTML `<head>`, or before main code in `<body>`).
-   Invoke by name with parentheses: `functionName();`.
