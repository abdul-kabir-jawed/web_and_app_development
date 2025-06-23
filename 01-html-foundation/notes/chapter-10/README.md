HTML5 Layout Notes
==================

1\. Overview
------------

-   HTML5 introduces semantic elements to define webpage structure, replacing `<div>` for clarity.
-   Key points:
    -   Elements describe content purpose (e.g., `<header>`, `<article>`).
    -   Easier with CSS layout knowledge.
    -   Widely used despite evolving standards.
-   Goals:
    -   Learn HTML5 layout elements and uses.
    -   Explore `<div>` alternatives.
    -   Ensure older browser compatibility.

2\. Traditional HTML Layouts
----------------------------

-   Used `<div>` with `class`/`id` to group content (e.g., header, article, sidebar, footer).
-   Example: Blog layout:
    -   Header (logo, navigation).
    -   Articles (posts/summaries).
    -   Sidebar (search, links, ads).
    -   Footer (copyright, links).
-   `<div>` roles via attributes (e.g., `<div id="header">`).

3\. New HTML5 Layout Elements
-----------------------------

-   Semantic elements:
    -   `<header>`: Main/section header (e.g., site name, navigation).
    -   `<footer>`: Main/section footer (e.g., copyright, links).
    -   `<nav>`: Major navigation (e.g., primary menu, not secondary links).
    -   `<article>`: Independent content (e.g., blog post, comment; nestable).
    -   `<aside>`:
        -   Inside `<article>`: Related, non-essential (e.g., pullquote).
        -   Outside `<article>`: Page-related (e.g., sidebar).
    -   `<section>`: Groups related content with headings (e.g., news; not for entire page).
    -   `<hgroup>`: Groups headings (e.g., `<h2>` title, `<h3>` subtitle; controversial).
    -   `<figure>`: Referenced content (e.g., images, videos) with `<figcaption>`.
-   Example:

    ```
    <body>
        <div id="page">
            <header>...</header>
            <div id="content">
                <article>...</article>
            </div>
            <aside>...</aside>
            <footer>...</footer>
        </div>

    ```

4\. Sectioning Elements
-----------------------

-   `<div>` used when no specific HTML5 element fits (e.g., page wrapper).
-   No `<content>` element; main content is outside `<header>`, `<footer>`, `<aside>`.
-   Example: `<div class="wrapper">` wraps page.

5\. Linking Around Block-Level Elements
---------------------------------------

-   HTML5 allows `<a>` around block elements (e.g., `<article>`).
-   Invalid in earlier HTML.
-   Example:

    ```
    <a href="introduction.html">
        <article>...</article>
    </a>

    ```

6\. Helping Older Browsers
--------------------------

-   Older browsers treat HTML5 elements as inline; fix with CSS:

    ```
    header, section, footer, aside, nav, article, figure, figcaption {
        display: block;
    }

    ```

-   For IE8 and earlier:
    -   Use HTML5 shiv (Google-hosted):

        ```
        <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        ```

    -   Requires JavaScript; content may not render otherwise.

7\. Styling HTML5 Layout Elements with CSS
------------------------------------------

-   CSS targets HTML5 elements (e.g., `header { height: 160px; }`).
-   Example (cooking site):
    -   **Wrapper**: `<div class="wrapper">` (940px, centered, bordered).
    -   **Header**: `<header>` (160px, background image).
    -   **Navigation**: `<nav>` (inline list, 30px height).
    -   **Courses**: `<section class="courses">` (659px, floated left, bordered).
    -   **Articles**: `<article>` (full width, overflow auto).
    -   **Figures**: `<figure>` (290px, bordered, floated left).
    -   **Aside**: `<aside>` (230px, floated left, padded).
    -   **Footer**: `<footer>` (30px, small font).
-   Uses HTML5 shiv for IE8.

8\. Example Application
-----------------------

-   Cooking site (`html5-layout.html`):
    -   **HTML**:
        -   `<header>`: `<h1>`, `<nav>` with links.
        -   `<section class="courses">`: Two `<article>`s (with `<figure>`, `<hgroup>`, `<p>`).
        -   `<aside>`: `<section>` for recipes, contact.
        -   `<footer>`: Copyright.
    -   **CSS**:
        -   Block display for HTML5 elements.
        -   Styles layout (e.g., `body { background-color: #f9f8f6; }`).
        -   Hover effects (e.g., `nav li a:hover { color: #000000; }`).
-   Includes HTML5 shiv.

9\. Summary
-----------

-   HTML5 elements clarify structure vs. `<div>` layouts.
-   Semantic meaning (e.g., `<article>` for standalone content).
-   Require CSS (`display: block`) and JavaScript (HTML5 shiv) for older browsers.
-   Widely adopted for modern web development.
