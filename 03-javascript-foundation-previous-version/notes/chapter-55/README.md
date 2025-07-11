Summary of JavaScript Style Manipulation
===========================================

This document explains how to manipulate CSS styles in JavaScript using the `style` property, extending Chapter 52:

1.  **Setting Styles Directly**:
    -   Styles can be set using `document.getElementById("p1").style.property` instead of adding a class (e.g., `className += " big"`).
    -   Example: `document.getElementById("p1").style.fontSize = "2em"` doubles font size while preserving other styles (e.g., bold, italic).
2.  **Example Style Changes**:
    -   Float an image: `document.getElementById("pic99").style.cssFloat = "left"`.
    -   Hide an element: `document.getElementById("div9").style.visibility = "hidden"`.
    -   Set margins: `document.getElementById("mainPic").style.margin = "10px 10px"`.
3.  **Property Naming**: JavaScript uses camelCase for CSS properties (e.g., `cssFloat` for `float`). Verify property names to avoid errors.
4.  **Reading Styles**:
    -   `document.getElementById("mainPic").style.margin` reads only inline styles, not CSS-defined ones.
    -   `document.getComputedStyle("mainPic").margin` retrieves all styles but is unsupported in Internet Explorer before version 9.
5.  **Context**: Inline event handling is used for simplicity, with advanced methods to be covered later.