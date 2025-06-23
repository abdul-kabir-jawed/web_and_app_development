CSS Notes

=========

1\. What is CSS?

----------------

-   Controls web page design and appearance.

-   Styles HTML elements (e.g., background, font).

2\. How CSS Works

-----------------

-   Each HTML element is treated as a box.

-   Rules: **Selectors** (target elements) + **Declarations** (properties & values).

-   Example: `p { font-family: Arial; }`.

3\. Key Concepts

----------------

-   **Block Elements**: New line (e.g., `<h1>`, `<p>`).

-   **Inline Elements**: Within text (e.g., `<b>`, `<span>`).

-   **Box Model**: Width, height, borders, background, position.

-   **Text Styling**: Typeface, size, color, bold, italics.

4\. CSS Rule Structure

----------------------

-   **Selector**: Targets elements (e.g., `h1, h2`).

-   **Declaration**: Property (e.g., `color`) + value (e.g., `yellow`).

-   Example: `h1, h2 { color: yellow; font-family: Arial; }`.

5\. Applying CSS

----------------

-   **External CSS**: `<link href="css/styles.css" type="text/css" rel="stylesheet">`.

    -   Shared styles, faster loading, easy updates.

-   **Internal CSS**: `<style>` in `<head>` for page-specific styles.

-   **Inline CSS**: `style` attribute (avoid).

6\. CSS Selectors

-----------------

-   **Universal**: `*` (all elements).

-   **Type**: `h1`, `p`.

-   **Class**: `.note`.

-   **ID**: `#intro`.

-   **Descendant/Child/Sibling**: Nested or related elements.

7\. Cascading Rules

-------------------

-   **Last Rule**: Later rule overrides identical selectors.

-   **Specificity**: Specific selectors win (e.g., `p#intro` > `p`).

-   **Important**: `!important` prioritizes.

-   **Inheritance**: Properties like `font-family` pass to children; use `inherit`.

8\. Why External CSS?

---------------------

-   Shared styles, smaller HTML, easy maintenance.

-   Internal CSS for single pages; avoid inline.

9\. CSS Versions & Browser Quirks

---------------------------------

-   CSS1 (1996), CSS2 (1998), CSS3 (ongoing).

-   Test across browsers (e.g., BrowserCam).

-   Fix quirks with resources (e.g., PositionIsEverything.net).

10\. Summary

------------

-   Styles HTML elements as boxes.

-   Selectors target; declarations style.

-   Use external CSS for multi-page sites.
