CSS Boxes Notes
===============

1\. Box Model Overview
----------------------

-   CSS treats HTML elements as boxes with **content**, **padding**, **border**, **margin**.
-   **Content**: Text, images, etc.
-   **Padding**: Space between content and border.
-   **Border**: Surrounds padding, styled by width, style, color.
-   **Margin**: External space, creates gaps between boxes.
-   Box dimensions: content + padding + border; margins are external.

2\. Box Dimensions
------------------

-   **width**, **height**: Set size (e.g., `300px`, `75%`, `1.4em`).
    -   Pixels: Precise.
    -   Percentages: Relative to parent/window.
    -   Ems: Relative to text size.
-   **min-width**, **max-width**: Limit width (e.g., `min-width: 450px`).
-   **min-height**, **max-height**: Limit height.
-   **overflow**: Manages excess content.
    -   `hidden`: Hides overflow.
    -   `scroll`: Adds scrollbars.

3\. Borders
-----------

-   **border-width**: Thickness (e.g., `2px`, `thin`, `medium`, `thick`).
    -   Individual: `border-top-width`, etc.
    -   Shorthand: `border-width: 2px 1px 1px 2px` (top, right, bottom, left).
-   **border-style**: Style (e.g., `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset`).
    -   Individual: `border-top-style`, etc.
-   **border-color**: Color (e.g., `#0088dd`, `darkcyan`).
    -   Individual: `border-top-color`, etc.
    -   Shorthand: `border-color: darkcyan deeppink darkcyan deeppink`.
-   **border**: Shorthand (e.g., `3px dotted #0088dd`).
-   **CSS3**:
    -   **border-image**: Image border, sliced into nine pieces (e.g., `border-image: url("dots.gif") 11 stretch`).
    -   **border-radius**: Rounded corners (e.g., `border-radius: 10px`).
    -   **Elliptical shapes**: Different radii (e.g., `border-top-left-radius: 80px 50px`).

4\. Padding and Margin
----------------------

-   **padding**: Space between content and border (e.g., `10px`).
    -   Individual: `padding-top`, etc.
    -   Shorthand: `padding: 10px 5px 3px 1px`.
-   **margin**: Space outside border (e.g., `20px`).
    -   Individual: `margin-top`, etc.
    -   Shorthand: `margin: 1px 2px 3px 4px`.
    -   Collapsing: Larger vertical margin applies.
-   **Centering**: `margin-left: auto; margin-right: auto` with `width`.

5\. Visibility and Display
--------------------------

-   **display**:
    -   `inline`: Block to inline.
    -   `block`: Inline to block.
    -   `inline-block`: Inline flow, block features.
    -   `none`: Hides, removes from layout.
-   **visibility**:
    -   `hidden`: Hides, leaves space.
    -   `visible`: Shows.
-   Hidden elements remain in source code.

6\. CSS3 Enhancements
---------------------

-   **box-shadow**: Shadows (e.g., `box-shadow: 5px 5px 5px #777777`).
-   Vendor prefixes (`-moz-`, `-webkit-`) for older browsers.

7\. IE6 Box Model Issue
-----------------------

-   IE6 includes padding/margins in `width` without DOCTYPE.
-   Fix: Use DOCTYPE (e.g., HTML5, HTML 4 Strict).

8\. Design Tips
---------------

-   Use `min-width`/`max-width` for responsive layouts.
-   Enhance readability with padding.
-   Test CSS3 features across browsers.
-   Include DOCTYPE for consistent rendering.

9\. Example Application
-----------------------

-   Music shop homepage:
    -   Centered `<div>` with `margin: auto`.
    -   `min-width`/`max-width` for responsive width.
    -   Inline navigation with `display: inline`.
    -   Double borders, padding for spacing, consistent typography.

10\. Summary
------------

-   Control dimensions with `width`, `height`, `min/max` properties.
-   Style borders with width, style, color, or images.
-   Adjust spacing with `padding`, `margin`.
-   Manage visibility with `display`, `visibility`.
-   CSS3: Rounded corners, shadows, image borders.
