Bootstrap v5.3
==============

Overview
--------

Bootstrap is a powerful, open-source, mobile-first front-end framework for building responsive web applications. It provides a collection of HTML, CSS, and JavaScript components to simplify and speed up web development. With a focus on responsive design, Bootstrap ensures websites look great on all devices, from mobile phones to desktops.

Features
--------

-   **Responsive Grid System**: A 12-column grid system that scales across six breakpoints for flexible layouts.
-   **Prebuilt Components**: Includes components like navbars, modals, cards, buttons, forms, and more.
-   **Sass Customization**: Utilize Sass variables and mixins for modular and customizable styling.
-   **JavaScript Plugins**: Enhance interactivity with plugins like tooltips, popovers, and carousels, powered by Bootstrap's JS and Popper.
-   **Extensive Documentation**: Comprehensive guides and examples available at [getbootstrap.com](https://getbootstrap.com/).
-   **Community Support**: Active community on GitHub, Stack Overflow, and other platforms.

Installation
------------

You can include Bootstrap in your project via CDN, package managers, or by downloading the source files.

### Via CDN

Add the following to your HTML:

```
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YsVfBafyUDxEdApLPmcdhBPg1DKg1ERo0BZlK" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YsVfBafyUDxEdApLPmcdhBPg1DKg1ERo0BZlK" crossorigin="anonymous"></script>

```

### Via Package Manager

Install Bootstrap using npm:

```
npm install bootstrap@5.3.7

```

Then import in your JavaScript:

```
import 'bootstrap';

```

For Sass customization, import Bootstrap's source files:

```
@import "node_modules/bootstrap/scss/bootstrap";

```

### Download

Download compiled CSS/JS or source files from [getbootstrap.com](https://getbootstrap.com/docs/5.3/getting-started/download/).

Usage
-----

1.  **Set Up HTML5 Doctype**:

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap Project</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <h1>Hello, World!</h1>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>

    ```

2.  **Use Components**: Leverage Bootstrap's classes for layout and components, e.g., `.container`, `.row`, `.col`, `.btn`, `.navbar`.

3.  **Customize with Sass**: Override variables like `$primary` or `$grid-columns` before importing Bootstrap's Sass files.

4.  **Add JavaScript Plugins**: Include Popper and Bootstrap's JS for interactive components like dropdowns or modals.

Customization
-------------

-   **Sass Variables**: Modify variables in `scss/_variables.scss` to customize colors, spacing, and more.
-   **CSS Variables**: Use Bootstrap's CSS custom properties for runtime theming.
-   **Themes**: Explore premium themes at [Bootstrap Themes](https://themes.getbootstrap.com/) for extended frameworks.

Community and Support
---------------------

-   **Official Documentation**: [getbootstrap.com](https://getbootstrap.com/)
-   **GitHub**: [twbs/bootstrap](https://github.com/twbs/bootstrap)
-   **Stack Overflow**: Use tag `bootstrap-5` for implementation help
-   **IRC**: Join `#bootstrap` on `irc.libera.chat`
-   **Blog**: [The Official Bootstrap Blog](https://blog.getbootstrap.com/)

License
-------

Bootstrap is released under the MIT License. Copyright 2011-2025 the Bootstrap Authors.
