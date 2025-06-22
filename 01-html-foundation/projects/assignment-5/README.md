# HTML Image Gallery Project - Assignment 5

## Project Overview
This project is the fifth assignment in the "Stairs to Success" series, focusing on creating a comprehensive HTML image gallery without using any CSS styling. The project demonstrates the use of various HTML tags and proper file structure organization.

## Assignment Requirements
1. **Image Gallery**: Create a gallery with minimum 9 different images (no maximum limit)
2. **Linked Pages**: Each image must link to a separate detailed page
3. **Page Structure**: Each detail page should display the image at the top with descriptive content
4. **HTML Tags**: Utilize all HTML tags studied so far, including `<figure>` and `<figcaption>`
5. **Navigation**: Implement navigation using `target="_blank"` or back-to-main-page buttons
6. **File Structure**: Use relative path structures like `./`, `../`, `../../` etc.
7. **No CSS**: Pure HTML implementation without any CSS styling

## File Structure
```
project-root/
│
├── index.html (Main gallery page)
├── README.md
│
├── pages/
│   ├── nature1.html
│   ├── nature2.html
│   ├── nature3.html
│   ├── wildlife1.html
│   ├── wildlife2.html
│   ├── wildlife3.html
│   ├── landscape1.html
│   ├── landscape2.html
│   └── landscape3.html
│
└── images/
    ├── mountain-lake.jpg
    ├── sunset-beach.jpg
    ├── forest-path.jpg
    ├── eagle-flight.jpg
    ├── tiger-portrait.jpg
    ├── dolphin-jump.jpg
    ├── desert-dunes.jpg
    ├── waterfall.jpg
    └── northern-lights.jpg
```

## HTML Tags Used
This project incorporates the following HTML elements:

### Structure Tags
- `<html>`, `<head>`, `<body>`
- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `<div>`, `<span>`

### Content Tags
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
- `<p>`, `<br>`, `<hr>`
- `<strong>`, `<em>`, `<b>`, `<i>`, `<u>`
- `<sup>`, `<sub>`, `<mark>`, `<del>`, `<ins>`

### List Tags
- `<ul>`, `<ol>`, `<li>`
- `<dl>`, `<dt>`, `<dd>`

### Media Tags
- `<img>` with alt attributes
- `<figure>`, `<figcaption>`

### Link and Navigation
- `<a>` with various href patterns
- `<nav>`

### Table Tags
- `<table>`, `<thead>`, `<tbody>`, `<tfoot>`
- `<tr>`, `<th>`, `<td>`
- `<caption>`, `<colgroup>`, `<col>`

### Form Elements
- `<form>`, `<input>`, `<textarea>`, `<select>`, `<option>`
- `<label>`, `<fieldset>`, `<legend>`
- `<button>`

### Semantic Tags
- `<time>`, `<address>`, `<blockquote>`, `<cite>`
- `<code>`, `<pre>`, `<kbd>`, `<samp>`, `<var>`

### Meta Tags
- `<meta>` for charset, viewport, description
- `<title>`, `<link>`

## Features
1. **Responsive Design**: Uses viewport meta tag for mobile compatibility
2. **Accessibility**: Proper alt text for all images and semantic HTML structure
3. **Navigation**: Multiple navigation options including back buttons and new tab links
4. **Content Variety**: Different types of content including tables, lists, and forms
5. **Semantic Structure**: Proper use of HTML5 semantic elements

## Navigation Patterns
- `./pages/filename.html` - Navigate to pages in subdirectory
- `../index.html` - Navigate back to parent directory
- `target="_blank"` - Open links in new tabs
- JavaScript-free back buttons using relative links

## How to Use
1. Open `index.html` in any web browser
2. Browse the image gallery on the main page
3. Click on any image to view its detailed page
4. Use navigation buttons to return to main gallery or explore other images
5. All functionality works without internet connection (uses placeholder images)

## Educational Value
This project demonstrates:
- Proper HTML document structure
- Semantic markup usage
- File organization and relative path navigation
- Accessibility best practices
- Form implementation
- Table creation and styling with HTML attributes
- Image handling and figure elements

## Browser Compatibility
This project uses standard HTML5 elements and should work in all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Opera

## Future Enhancements
While this version uses no CSS per assignment requirements, future versions could include:
- CSS styling for improved visual appearance
- JavaScript for enhanced interactivity
- Responsive image loading
- Search and filter functionality

## Notes
- All images are placeholder URLs for demonstration purposes
- The project focuses on HTML structure rather than visual design
- Proper semantic markup ensures good accessibility and SEO
- File paths use relative references for portability
