CSS Lists, Tables, and Forms Notes
==================================

1\. Overview
------------

-   CSS properties target lists (`<ul>`, `<ol>`, `<li>`), tables (`<table>`, `<th>`, `<td>`), and forms (`<input>`, `<fieldset>`, `<legend>`).
-   Goals: Control bullet styles, table borders/backgrounds, form control appearance for consistency/usability.

2\. List Styling
----------------

-   **list-style-type**: Sets bullet/marker style.
    -   Unordered: `none`, `disc`, `circle`, `square`.
    -   Ordered: `decimal` (1,2,3), `decimal-leading-zero` (01,02,03), `lower-alpha` (a,b,c), `upper-alpha` (A,B,C), `lower-roman` (i,ii,iii), `upper-roman` (I,II,III).
-   **list-style-image**: Image as bullet (e.g., `list-style-image: url("images/star.png")`).
-   **list-style-position**: Marker placement.
    -   `outside`: Outside text (default).
    -   `inside`: Inside, indented.
-   **list-style**: Shorthand for type, image, position (e.g., `list-style: inside circle`).
-   **margin**: Vertical spacing (e.g., `margin: 10px 0px`).

3\. Table Styling
-----------------

-   **width**: Table width (e.g., `width: 600px`).
-   **padding**: Cell spacing (e.g., `padding: 7px 10px`).
-   **text-transform**: Uppercase headers (e.g., `text-transform: uppercase`).
-   **letter-spacing**, **font-size**: Header style (e.g., `letter-spacing: 0.1em; font-size: 90%`).
-   **border-top**, **border-bottom**: Header borders (e.g., `border-bottom: 2px solid #111111`).
-   **text-align**: Align content (e.g., `text-align: right` for numbers).
-   **background-color**: Shade rows (e.g., `tr.even { background-color: #efefef }`).
-   **:hover**: Highlight rows (e.g., `tr:hover { background-color: #e3e6e5 }`).
-   **empty-cells**: Empty cell borders (`show`, `hide`, `inherit`).
-   **border-spacing**: Cell gaps (e.g., `border-spacing: 5px 15px`).
-   **border-collapse**: Merge borders (`collapse`) or separate (`separate`).
-   **Design Tips**:
    -   Padding for readability.
    -   Bold/uppercase headers.
    -   Subtle row shading.
    -   Right-align numbers.

4\. Form Styling
----------------

-   **Text Inputs**:
    -   `font-size`, `color`, `background-color`: Text style (e.g., `font-size: 120%; color: #5a5854`).
    -   `border`, `border-radius`: Borders, corners (e.g., `border: 1px solid #bdbdbd; border-radius: 5px`).
    -   `padding`: Spacing (e.g., `padding: 5px 5px 5px 30px`).
    -   `background-image`: Icons (e.g., `background-image: url("images/email.png")`).
    -   `:focus`, `:hover`: Interaction styles (e.g., `background-color: #ffffff`).
-   **Submit Buttons**:
    -   `color`, `text-shadow`: Text style (e.g., `color: #444444; text-shadow: 0px 1px 1px #ffffff`).
    -   `border-bottom`: 3D effect (e.g., `border-bottom: 2px solid #b2b2b2`).
    -   `background-color`, gradients: Appearance (e.g., `background: -webkit-gradient(...)`).
    -   `:hover`: Hover style (e.g., `background-color: #a0dbc4`).
-   **Fieldsets & Legends**:
    -   `width`, `border`, `border-radius`: Fieldset style (e.g., `width: 350px; border-radius: 10px`).
    -   `background-color`, `padding`: Legend style (e.g., `background-color: #efefef; padding: 10px 20px`).
    -   `text-transform`: Uppercase legend (e.g., `text-transform: uppercase`).
-   **Aligning Controls**:
    -   Problem: Misaligned labels.
    -   Solution: `float: left`, fixed `width` (e.g., `width: 100px`), `text-align: right`, `padding`.
    -   Use `<div>` for row spacing (e.g., `margin: 10px`).
-   **cursor**: Cursor style (e.g., `cursor: pointer`).
-   **Cross-Browser Consistency**: Use Formalize ([http://formalize.me](http://formalize.me/)).
-   **Design Tips**:
    -   Vertical alignment for usability.
    -   Interactive styles for feedback.
    -   Consistent submit buttons.

5\. Web Developer Toolbar
-------------------------

-   Firefox/Chrome extension ([www.chrispederick.com/work/web-developer](http://www.chrispederick.com/work/web-developer)).
-   Shows CSS styles, HTML structure, element outlines; supports screen size changes, validation.

6\. Example Application
-----------------------

-   **List**: Poetry events with image bullets, increased line height.
-   **Table**: Workshop schedule, no cell gaps, shaded rows, rounded headers.
-   **Form**: Registration, styled fieldset, aligned controls, interactive inputs, prominent submit button.

7\. Summary
-----------

-   **Lists**: Control markers with `list-style-type`, `list-style-image`, `list-style-position`.
-   **Tables**: Manage borders, spacing with `border-spacing`, `border-collapse`, `empty-cells`.
-   **Forms**: Align controls, style inputs, enhance interactivity.
-   CSS ensures consistency and improves user experience.
