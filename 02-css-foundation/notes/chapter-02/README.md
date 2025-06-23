CSS Color Notes
===============

1\. Introduction to Color
-------------------------

-   Enhances aesthetics, sets mood, evokes reactions.
-   Used for text (foreground) and backgrounds.

2\. Specifying Colors
---------------------

-   **RGB Values**: `rgb(red, green, blue)` (0--255). Example: `rgb(100,100,90)`.
-   **Hex Codes**: `#` + six digits. Example: `#ee3e80`.
-   **Color Names**: 147 names (e.g., `DarkCyan`). Limited, less common.
-   **CSS3 Methods**:
    -   **HSL**: `hsl(hue, saturation%, lightness%)`. Hue (0--360°), saturation/lightness (0--100%).
    -   **HSLA/RGBA**: Adds alpha (opacity, 0.0--1.0). Example: `rgba(0,0,0,0.5)`.

3\. Foreground Color
--------------------

-   `color` property sets text color.
-   Example: `h1 { color: DarkCyan; }` or `p { color: rgb(100,100,90); }`.

4\. Background Color
--------------------

-   `background-color` sets element background.
-   Uses RGB, hex, names, RGBA/HSLA.
-   Example: `body { background-color: rgb(200,200,200); }`.
-   Default: transparent; set on `<body>` for consistency.

5\. Color Terminology
---------------------

-   **Hue**: Core color (e.g., red, blue).
-   **Saturation**: Gray amount (0% = gray, 100% = vivid).
-   **Lightness**: White/black amount (0% = black, 100% = white).
-   **Brightness**: Black amount (differs from lightness).

6\. Contrast
------------

-   High contrast improves readability; low contrast hinders.
-   Medium contrast for long text.
-   Light text on dark background: Increase line height, font weight.
-   Tool: `www.snook.ca/technical/colour_contrast/colour.html`.

7\. Opacity (CSS3)
------------------

-   `opacity`: Element + children (0.0--1.0). Example: `opacity: 0.5`.
-   `rgba`/`hsla`: Opacity for element only.
-   Fallback: Use RGB/hex before RGBA/HSLA.

8\. Color Pickers
-----------------

-   Tools (e.g., Photoshop, `colorschemedesigner.com`) show RGB/hex.
-   Pixels mix red, green, blue.

9\. Summary
-----------

-   Colors: RGB, hex, names, HSL, RGBA, HSLA.
-   Ensure contrast for readability.
-   Use color pickers for precision.
