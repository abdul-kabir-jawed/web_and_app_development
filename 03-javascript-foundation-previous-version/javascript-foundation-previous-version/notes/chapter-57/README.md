Summary of JavaScript Targeting Elements by Tag Name within a Container
=======================================================================

This document explains targeting a subset of elements by tag name within a specific HTML element using `getElementsByTagName`, extending Chapter 56:

-   **Targeting All Elements by Tag**: `document.getElementsByTagName("p")` creates a collection of all `<p>` elements, with properties like `innerHTML` accessed via `pars[1].innerHTML`.
-   **Targeting Elements within a Specific Element**: To target only `<p>` elements in a `div` with ID `rules`:
    -   Get the container: `var e = document.getElementById("rules");`.
    -   Collect paragraphs: `e.getElementsByTagName("p")`.
-   **Example with Table Cells**: To set the background color of all `<td>` elements in a table with ID `table9`:
    -   Code: `var t = document.getElementById("table9"); var cells = t.getElementsByTagName("td"); for (var i = 0; i < cells.length; i++) { cells[i].style.backgroundColor = "pink"; }`.
    -   This targets the table, collects `<td>` elements, and loops to set their background color.
-   **Process**:
    -   Step 1: Get container with `document.getElementById`.
    -   Step 2: Use `getElementsByTagName` for specific tags.
    -   Step 3: Loop to modify properties (e.g., `style.backgroundColor`).
-   **Context**: Inline event handling is implied, with professional methods to be covered later.