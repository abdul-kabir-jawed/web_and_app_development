Chapter 8: Extra Markup
=======================

Introduction
------------

This chapter focuses on helpful topics that do not easily fit into groups. You will learn about:

-   The different versions of HTML and how to indicate which version you are using
-   How to add comments to your code
-   Global attributes, including the `id` and `class` attributes
-   Elements used to group parts of the page where no other element is suitable
-   How to embed a page within a page using iframes
-   How to add information about the web page using the `<meta>` element
-   Adding characters such as angled brackets and copyright symbols

The Evolution of HTML
---------------------

Since the web was created, there have been several versions of HTML, each designed to improve upon the last by adding new elements and attributes while removing outdated code.

-   **HTML 4 (Released 1997)**:
    -   Included presentational elements like `<center>`, `<font>`, and `<strike>`, which are now deprecated in favor of CSS.
    -   Most elements in this book (except some HTML5 additions) were available in HTML 4.
-   **XHTML 1.0 (Released 2000)**:
    -   Reformulated HTML 4 to follow XML rules, enforcing stricter syntax:
        -   Every element needed a closing tag (except empty elements like `<img />`).
        -   Attribute names in lowercase.
        -   All attributes required a value, in double quotes.
        -   Deprecated elements were discouraged.
        -   Nested elements had to be properly closed.
    -   Benefits included compatibility with XML-based formats like SVG, MathML, and CML.
    -   Variants:
        -   **Strict XHTML 1.0**: Required strict adherence to rules.
        -   **Transitional XHTML 1.0**: Allowed use of deprecated presentational elements.
        -   **XHTML 1.0 Frameset**: Supported partitioning a browser window into frames (now rarely used).
-   **HTML5 (Released 2000, Ongoing Development)**:
    -   Relaxes some XHTML strictness (e.g., not all tags need closing).
    -   Introduces new elements and attributes, many already implemented by major browsers.
    -   Safe to use new features if fallback content ensures older browsers can still view pages.

DOCTYPES
--------

A DOCTYPE declaration at the start of a web page tells browsers which HTML version is used, aiding correct rendering. Examples include:

-   **HTML5**:

    ```
    <!DOCTYPE html>

    ```

-   **HTML 4 Transitional**:

    ```
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

    ```

-   **Transitional XHTML 1.0**:

    ```
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

    ```

-   **Strict XHTML 1.0**:

    ```
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

    ```

-   **XML Declaration** (Optional for XHTML):

    ```
    <?xml version="1.0"?>

    ```

    Must be the first line, with no preceding content.

Comments in HTML
----------------

Comments are added between `<!--` and `-->` markers to document code without affecting the page display. They are useful for:

-   Marking sections of code (e.g., start/end of introduction).
-   Temporarily disabling code for testing.

**Example**:

```
<!-- start of introduction -->
<h1>Current Exhibitions</h1>
<h2>Olafur Eliasson</h2>
<!-- end of introduction -->
<!-- start of main text -->
<p>Olafur Eliasson was born in Copenhagen, Denmark in 1967 to Icelandic parents.</p>
<p>He is known for sculptures and large-scale installation art employing elemental materials such as light, water, and air temperature to enhance the viewer's experience.</p>
<!-- end of main text -->
<!--
  <a href="mailto:info@example.org">Contact</a>
-->
<a href="mailto:info@example.org">Contact</a>

```

ID Attribute
------------

The `id` attribute uniquely identifies an element on a page, with a value starting with a letter or underscore (not a number). No two elements on the same page should share the same `id`.

-   Used in CSS to style specific elements uniquely.
-   Used in JavaScript to interact with specific elements.
-   A global attribute, applicable to any HTML element.

**Example**:

```
<p>Water and air. So very commonplace are these substances, they hardly attract attention - and yet they vouchsafe our very existence.</p>
<p id="pullquote">EVERY TIME I VIEW THE SEA I FEEL A CALMING SENSE OF SECURITY, AS IF VISITING MY ANCESTRAL HOME; I EMBARK ON A VOYAGE OF SEEING.</p>
<p>Mystery of mysteries, water and air are right there before us in the sea.</p>

```

CSS can make the `pullquote` paragraph uppercase.

Class Attribute
---------------

The `class` attribute identifies multiple elements as belonging to the same group, with values describing the group. Multiple classes can be applied to an element, separated by spaces.

-   Used in CSS to apply styles to all elements with a specific class.
-   A global attribute, applicable to any HTML element.

**Example**:

```
<p class="important">For a one-year period from November 2010, the Marugame Genichiro-Inokuma Museum of Contemporary Art (MIMOCA) will host a cycle of four Hiroshi Sugimoto exhibitions.</p>
<p>Each will showcase works by the artist thematically contextualized under the headings "Science," "Architecture," "History" and "Religion" so as to present a comprehensive panorama of the artist's oeuvre.</p>
<p class="important admittance">Hours: 10:00 - 18:00 (No admittance after 17:30)</p>

```

CSS can make `important` elements uppercase and `admittance` elements red.

Block Elements
--------------

Block-level elements start on a new line in the browser. Examples include `<h1>`, `<p>`, `<ul>`, and `<li>`.

**Example**:

```
<h1>Hiroshi Sugimoto</h1>
<p>The dates for the ORIGIN OF ART exhibition are as follows:</p>
<ul>
  <li>Science: 21 Nov - 20 Feb 2010/11</li>
  <li>Architecture: 6 Mar - 15 May 2011</li>
  <li>History: 29 May - 21 Aug 2011</li>
  <li>Religion: 28 Aug - 6 Nov 2011</li>
</ul>

```

Inline Elements
---------------

Inline elements continue on the same line as their neighbors. Examples include `<a>`, `<b>`, `<em>`, and `<img>`.

**Example**:

```
<p>Timed to a single revolution of the planet around the sun at a 23.4 degrees tilt that plays out the rhythm of the seasons, this <em>Origins of Art</em> cycle is organized around four themes: <b>science, architecture, history</b> and <b>religion</b>.</p>

```

Grouping Text & Elements in a Block
-----------------------------------

The `<div>` element groups elements into a block-level box, starting on a new line. It has no visual effect unless styled with CSS using `id` or `class` attributes.

-   Useful for organizing sections like headers or comments.
-   Comments after closing `</div>` tags clarify structure.

**Example**:

```
<div id="header">
  <img src="images/logo.gif" alt="Anish Kapoor" />
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="biography.html">Biography</a></li>
    <li><a href="works.html">Works</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</div><!-- end of header -->

```

Grouping Text & Elements Inline
-------------------------------

The `<span>` element is an inline equivalent of `<div>`, used to:

-   Mark text with no other suitable element.
-   Group inline elements for CSS styling.

**Example**:

```
<p>Anish Kapoor won the Turner Prize in 1991 and exhibited at the <span class="gallery">Tate Modern</span> gallery in London in 2003.</p>

```

Iframes
-------

The `<iframe>` element embeds another HTML page within a page, like a window. Common uses include embedding Google Maps.

-   **Attributes**:
    -   `src`: URL of the page to display.
    -   `height`, `width`: Size in pixels.
    -   `frameborder` (HTML 4/XHTML): 0 (no border) or 1 (border). Not supported in HTML5.
    -   `scrolling` (HTML 4/XHTML): `yes`, `no`, or `auto`. Not supported in HTML5.
    -   `seamless` (HTML5): Removes scrollbars and borders (not widely supported in older browsers).

**Example**:

```
<iframe width="450" height="350" src="http://maps.google.co.uk/maps?q=manhattan+new+york&amp;output=embed"></iframe>

```

```
<iframe src="http://maps.google.co.uk/maps?q=manhattan+new+york&amp;output=embed" width="450" height="350" frameborder="0" scrolling="no"></iframe>

```

Information About Your Pages
----------------------------

The `<meta>` element, placed in the `<head>`, provides metadata about the page, invisible to users but used by search engines and browsers.

-   **Common Attributes**:
    -   `name` and `content`:
        -   `description`: Page summary (max 155 characters) for search engines.
        -   `keywords`: Comma-separated search terms (less impactful today).
        -   `robots`: `noindex` (exclude from search results) or `nofollow` (exclude linked pages).
    -   `http-equiv` and `content`:
        -   `author`: Specifies the page author.
        -   `pragma`: Prevents browser caching (`no-cache`).
        -   `expires`: Sets page expiration date (e.g., `Fri, 04 Apr 2014 23:59:59 GMT`).

**Example**:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Information About Your Pages</title>
    <meta name="description" content="An Essay on Installation Art" />
    <meta name="keywords" content="installation, art, opinion" />
    <meta name="robots" content="nofollow" />
    <meta http-equiv="author" content="Jon Duckett" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="expires" content="Fri, 04 Apr 2014 23:59:59 GMT" />
  </head>
  <body>
  </body>
</html>

```

Escape Characters
-----------------

HTML reserves characters like `<`, `>`, and `&`, requiring escape codes to display them. Special symbols (e.g., copyright, currency) also use escape codes.

-   Examples:
    -   `<`: `&lt;` or `&#60;`
    -   `>`: `&gt;` or `&#62;`
    -   `&`: `&amp;` or `&#38;`
    -   `©`: `&copy;` or `&#169;`
    -   `€`: `&euro;` or `&#8364;`

**Example Table**:

| Symbol | Description | Escape Code |
| --- | --- | --- |
| `<` | Less-than sign | `&lt;` or `&#60;` |
| `>` | Greater-than sign | `&gt;` or `&#62;` |
| `&` | Ampersand | `&amp;` or `&#38;` |
| `"` | Quotation mark | `&quot;` or `&#34;` |
| `©` | Copyright symbol | `&copy;` or `&#169;` |
| `€` | Euro sign | `&euro;` or `&#8364;` |

Check browser rendering, as some fonts may not support all characters.

Example: Extra Markup
---------------------

This example uses HTML 4.01 Transitional with metadata, `div` and `span` for grouping, an iframe for a Google Map, and a copyright escape code.

```
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta name="description" content="Telephone, email and directions for The Art Bookshop, London, UK" />
    <title>Contact The Art Bookshop, London UK</title>
  </head>
  <body>
    <div id="header">
      <h1>The Art Bookshop</h1>
      <ul>
        <li><a href="index.html">home</a></li>
        <li><a href="index.html">new publications</a></li>
        <li class="current-page"><a href="index.html">contact</a></li>
      </ul>
    </div><!-- end header -->
    <div id="content">
      <p>Charing Cross Road, London, WC2, UK</p>
      <p><span class="contact">Telephone</span> 0207946 0946</p>
      <p><span class="contact">Email</span> <a href="mailto:books@example.com">books@example.com</a></p>
      <iframe width="425" height="275" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.co.uk/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=charing+cross+road+london&amp;output=embed"></iframe>
    </div><!-- end content -->
    <p>&copy; The Art Bookshop</p>
  </body>
</html>

```

Summary
-------

-   DOCTYPES specify the HTML version.
-   Comments (`<!-- -->`) document code.
-   `id` and `class` attributes identify elements.
-   `<div>` and `<span>` group block and inline elements.
-   `<iframe>` embeds external pages.
-   `<meta>` provides page metadata.
-   Escape characters display reserved or special symbols.
