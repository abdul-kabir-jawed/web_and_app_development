HTML Images Guide
=================

This document provides a comprehensive overview of using images in HTML, selecting the right formats, and optimizing them for the web, as extracted from "Wiley HTML and CSS, October 2011."

Why Use Images?
---------------

Images enhance webpages by including logos, photographs, illustrations, diagrams, or charts, making sites more attractive and professional. They set the tone quickly and convey information effectively.

Choosing Images
---------------

Images should:

-   Be relevant
-   Convey information
-   Convey the right mood
-   Be instantly recognizable
-   Fit the color palette

Images can be sourced from stock photography websites (e.g., istockphoto.com, gettyimages.com, veer.com, sxc.hu, fotolia.com), but all images are subject to copyright. Using a consistent background for multiple images (e.g., product photos or team portraits) improves visual coherence.

Storing Images
--------------

Organize images in a dedicated folder (e.g., `images/`) to maintain site structure. For larger sites, use subfolders like `interface/`, `products/`, or `news/`. Content management systems typically have built-in tools for uploading images to designated folders.

Adding Images
-------------

The `<img>` element, an empty element, is used to add images. Required attributes:

-   **src**: Specifies the image file's relative URL (e.g., `images/quokka.jpg`).
-   **alt**: Provides a text description for accessibility (e.g., screen readers) and search engines. Use empty quotes (`alt=""`) for decorative images.

Optional attribute:

-   **title**: Displays additional information in a tooltip on hover.

**Example**:

```
<img src="images/quokka.jpg" alt="A family of quokka" title="The quokka is an Australian marsupial similar in size to a domestic cat." />

```

Image Size
----------

Specify image dimensions using:

-   **width**: Sets width in pixels.
-   **height**: Sets height in pixels.

This ensures browsers reserve space while images load, improving page rendering. Increasingly, CSS is used for sizing (pages 409-410).

**Example**:

```
<img src="images/quokka.jpg" alt="A family of quokka" width="600" height="450" />

```

Image Placement
---------------

Image placement affects display:

1.  **Before a paragraph**: The paragraph starts on a new line after the image.
2.  **Inside a paragraph's start**: Text aligns with the image's bottom.
3.  **In the middle of a paragraph**: Text flows around the image.

**Example**:

```
<img src="images/bird.gif" alt="Bird" width="100" height="100" />
<p>There are around 10,000 living species of birds...</p>
<hr />
<p><img src="images/bird.gif" alt="Bird" width="100" height="100" />There are around 10,000 living species of birds...</p>
<hr />
<p>There are around 10,000 living species of birds... <img src="images/bird.gif" alt="Bird" width="100" height="100" /> ...migrations...</p>

```

Images are inline elements, sitting within block elements (e.g., `<p>`). Block elements (e.g., `<h1>`, `<p>`) start on new lines (pages 185-186).

Deprecated Alignment Attributes
-------------------------------

The `align` attribute (removed in HTML5) was used for horizontal and vertical alignment:

-   **Horizontal**: `left` (text flows right), `right` (text flows left).
-   **Vertical**: `top`, `middle`, `bottom` (aligns text with image's top, middle, or bottom).

**Example**:

```
<p><img src="images/bird.gif" alt="Bird" width="100" height="100" align="left" />There are around 10,000 living species of birds...</p>

```

Use CSS instead (pages 285-286, 313-314, 370-372, 411-412) to add gaps or wrap text.

Image Creation Rules
--------------------

1.  **Right Format**:
    -   **JPEG**: For photographs with many colors.
    -   **GIF/PNG**: For images with flat colors (e.g., logos, diagrams). GIFs support simple animations; PNGs support transparency.
2.  **Right Size**: Save images at their display size (e.g., 300x150 pixels) to avoid distortion or slow loading.
3.  **Correct Resolution**: Use 72 ppi for web images, as higher resolutions (e.g., 300 dpi) increase file size without improving quality.

Image Editing Tools
-------------------

-   **Software**: Adobe Photoshop, Photoshop Elements, Fireworks, Pixelmator, PaintShop Pro, Paint.net.
-   **Online Editors**: photoshop.com, pixlr.com, splashup.com, ipiccy.com.

Image Dimensions
----------------

-   **Reducing Size**: Shrink images (e.g., 600x300 to 300x150) for faster loading.
-   **Increasing Size**: Avoid enlarging small images (e.g., 100x50 to 300x150), as quality degrades.
-   **Cropping**: Crop carefully to avoid losing information. Match image shape (portrait/landscape) to requirements.

Image Resolution
----------------

Web images should be 72 ppi, matching screen resolution. Higher resolutions (e.g., 300 dpi) create larger files, slowing page loads.

**Example**:

-   JPEG at 300 dpi: 1,526 kb
-   JPEG at 72 ppi: 368 kb

Vector Images
-------------

Vector images (e.g., created in Adobe Illustrator) are resolution-independent, ideal for logos or diagrams. They use points and lines, scaling without quality loss. For web use, convert to bitmap (JPEG/GIF/PNG) or use SVG (not widely supported in 2011).

Animated GIFs
-------------

GIFs can display sequential frames for simple animations (e.g., loading indicators). Each frame increases file size, and GIFs suit illustrations, not photos. Avoid overuse due to 1990s stigma.

Transparency
------------

-   **GIF**: For 100% transparent areas with straight edges.
-   **PNG**: For semi-opaque or rounded-edge transparency, or drop shadows. PNGs may need JavaScript for Internet Explorer 6 compatibility.

Examining Images
----------------

-   **Check Size**: Right-click (or Ctrl-click on Mac) and select options like "Open Image in New Tab" (Chrome/Safari), "View Image Info" (Firefox), or "Properties" (IE).
-   **Download**: Use "Save Image As" from the same menu, respecting copyright.

HTML5 Figure and Caption
------------------------

The `<figure>` and `<figcaption>` elements group images with captions.

**Example**:

```
<figure>
  <img src="images/chocolate-islands.jpg" alt="Chocolate Islands" title="Chocolate Islands Individual Cakes" />
  <figcaption>This recipe for individual chocolate cakes is so simple and so delectable!</figcaption>
</figure>

```

Example
-------

A recipe page with images:

```
<html>
<head>
  <title>Images</title>
</head>
<body>
  <h1><img src="images/logo.gif" alt="From A to Zucchini" /></h1>
  <figure>
    <img src="images/chocolate-islands.jpg" alt="Chocolate Islands" title="Chocolate Islands Individual Cakes" />
    <figcaption>This recipe for individual chocolate cakes is so simple and so delectable!</figcaption>
  </figure>
  <h4>More Recipes:</h4>
  <p>
    <img src="images/lemon-posset.jpg" alt="Lemon Posset" title="Lemon Posset Dessert" />
    <img src="images/roasted-brussel-sprouts.jpg" alt="Roasted Brussel Sprouts" title="Roasted Brussel Sprouts Side Dish" />
    <img src="images/zucchini-cake.jpg" alt="Zucchini Cake" title="Zucchini Cake No Frosting" />
  </p>
</body>
</html>

```

Summary
-------

-   Use `<img>` with `src` and `alt` attributes.
-   Save images at intended size and in JPEG (photos) or GIF/PNG (flat colors).
-   Use 72 ppi resolution.
-   Prefer CSS for sizing and alignment over deprecated attributes.
-   Use `<figure>` and `<figcaption>` for captioned images.
