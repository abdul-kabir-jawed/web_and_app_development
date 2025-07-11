Summary of JavaScript Switch Statement Completion
=================================================

This document details how to complete a JavaScript `switch` statement, building on an example that checks the `dayofWk` variable. Key components include:

1.  **Case Statements and Indentation**: Each `case` clause (e.g., `case "Sat":`) is followed by indented statements (commonly 2 spaces) that execute if the condition is true, mirroring `if` statement behavior.
2.  **Break Statements**: A `break` statement follows each `case` (except the last) to exit the `switch` block, preventing JavaScript from executing subsequent case statements unintentionally, which would otherwise trigger all alerts (e.g., "Whoopee!", "TGIF!", "Shoot me now!").
3.  **Default Clause**: The `default` keyword, followed by a colon, executes if no `case` conditions match, similar to an `else` clause. No `break` is needed as it is the final clause.
4.  **Optional Default and Precautionary Break**: The `default` clause is optional; without it, no action occurs if no cases match. Adding a `break` after the last `case` is a best practice to avoid issues if new cases are added later.
