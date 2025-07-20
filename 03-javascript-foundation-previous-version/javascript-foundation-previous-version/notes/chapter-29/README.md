JavaScript Number Conversion Notes
==================================

Overview
--------

-   Convert between strings and numbers for arithmetic or formatting purposes.

Key Concepts
------------

-   **String to Number**:
    -   Use `Number()` to convert strings to numbers (integers or floating-point).
        -   Example: `var num = Number("24");` → `num` is `24` (integer).
        -   Example: `var num = Number("24.9876");` → `num` is `24.9876` (floating-point).
        -   Alternative to `parseInt()` (integers, truncates decimals) and `parseFloat()` (preserves decimals).
-   **Number to String**:
    -   Use `toString()` to convert numbers to strings for formatting.
        -   Example: `var numberAsNumber = 1234; var numberAsString = numberAsNumber.toString();` → `numberAsString` is `"1234"`.
-   **Use Case**:
    -   Convert numbers to strings for display formatting (e.g., adding commas).
    -   Convert strings to numbers for arithmetic when `parseInt` or `parseFloat` isn't specific enough.
