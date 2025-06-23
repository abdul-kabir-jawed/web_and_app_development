CSS Text Notes
==============

1\. Text Properties Overview
----------------------------

-   **Font-Related**: Typeface, size, weight, style (e.g., bold, italic).
-   **Text Formatting**: Color, spacing (line, word, letter), alignment, indentation.
-   Enhances readability.

2\. Typeface Terminology
------------------------

-   **Serif**: Decorative stroke ends (e.g., Georgia, Times).
-   **Sans-Serif**: Clean, straight ends (e.g., Arial, Verdana).
-   **Monospace**: Fixed-width (e.g., Courier).
-   **Cursive**: Handwriting style (e.g., Comic Sans MS).
-   **Fantasy**: Decorative, for titles (e.g., Impact).

3\. Font Characteristics
------------------------

-   **Weight**: Light, Medium, Bold, Black (affects emphasis, whitespace).
-   **Style**: Normal, Italic, Oblique.
-   **Stretch**: Condensed, Regular, Extended.

4\. Choosing Typefaces
----------------------

-   Browsers use installed fonts.
-   Common: Georgia, Times, Arial, Verdana, Helvetica, Courier.
-   **Font Stack**: Fallbacks (e.g., `font-family: Georgia, Times, serif`).
-   Custom font methods (license-dependent):
    -   **@font-face**: Download font.
    -   **Images**: Text as graphics.
    -   **sIFR**: Flash-based replacement.
    -   **Cufon**: JavaScript SVG/VML.

5\. Font and Text Properties
----------------------------

-   **font-size**: Text size (e.g., `250%`, `16px`, `1.4em`).
-   **font-weight**: Normal, Bold.
-   **font-style**: Normal, Italic, Oblique.
-   **text-transform**: Uppercase, Lowercase, Capitalize.
-   **text-decoration**: None, Underline, Overline, Line-through.
-   **line-height**: Line spacing (e.g., `1.4em`).
-   **letter-spacing**, **word-spacing**: Letter/word gaps (e.g., `0.2em`).
-   **text-align**: Left, Right, Center, Justify.
-   **text-indent**: First line indent (e.g., `20px`).
-   **text-shadow**: Shadow (e.g., `text-shadow: 2px 2px 3px #666666`).

6\. Pseudo-Elements and Pseudo-Classes
--------------------------------------

-   **Pseudo-Elements**:
    -   `:first-letter`: Styles first letter (e.g., `font-size: 200%`).
    -   `:first-line`: Styles first line (e.g., `font-weight: bold`).
-   **Pseudo-Classes**:
    -   `:link`: Unvisited links (e.g., `color: deeppink`).
    -   `:visited`: Visited links (e.g., `color: black`).
    -   `:hover`: Mouse hover (e.g., `text-decoration: underline`).
    -   `:active`: During click (e.g., `color: darkcyan`).
    -   `:focus`: Ready for interaction (e.g., form input).
    -   Order: `:link`, `:visited`, `:hover`, `:focus`, `:active`.

7\. Attribute Selectors
-----------------------

-   Target attributes:
    -   `[attr]`: Has attribute (e.g., `p[class]`).
    -   `[attr="value"]`: Exact value (e.g., `p[class="dog"]`).
    -   `[attr~="value"]`: Space-separated value.
    -   `[attr^="value"]`: Starts with.
    -   `[attr*="value"]`: Contains.
    -   `[attr$="value"]`: Ends with.

8\. Design Tips
---------------

-   Check Mac vs. PC font rendering (PCs less smooth).
-   Increase `line-height` for readability.
-   Use `letter-spacing` for uppercase clarity.
-   Ensure contrast for readability.

9\. Summary
-----------

-   Control font (typeface, size, weight, style) and spacing.
-   Limited default fonts; use `@font-face` or alternatives.
-   Pseudo-classes/elements for interactivity.
-   Attribute selectors for specific attributes.
