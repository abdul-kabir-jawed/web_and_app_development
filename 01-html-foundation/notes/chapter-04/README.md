# Concise Notes on Chapter 4: Links (HTML Basics)

This chapter explains how to create links in HTML, a fundamental feature of the web that enables navigation between pages. Below are concise notes summarizing the key points from the provided document excerpt from *Wiley HTML and CSS (October 2011)*, organized for clarity.

## Key Concepts

1. **Introduction to Links**:
   - Links allow navigation between web pages, enabling browsing or surfing.
   - Types of links: to other websites, pages on the same site, specific parts of a page, new browser windows, or email programs.

2. **Creating Links** (`<a>`):
   - Use the `<a>` element with the `href` attribute to specify the destination.
   - Text between `<a>` and `</a>` is the clickable link text, which should describe the destination clearly (e.g., avoid “click here”).
   - Example: `<a href="http://www.imdb.com">IMDB</a>` links to IMDB with “IMDB” as the link text.

3. **Linking to Other Sites**:
   - Use **absolute URLs** (full web address, including domain) in the `href` attribute.
   - Browsers display links in blue with underlines by default.
   - Example:
     ```html
     <ul>
       <li><a href="http://www.empireonline.com">Empire</a></li>
       <li><a href="http://www.metacritic.com">Metacritic</a></li>
     </ul>
     ```
     **Result**: 
     - [Empire](http://www.empireonline.com)
     - [Metacritic](http://www.metacritic.com)

4. **Linking to Pages on the Same Site**:
   - Use **relative URLs** (omit domain name) for pages within the same site.
   - If pages are in the same folder, use the file name (e.g., `<a href="index.html">Home</a>`).
   - For different folders, specify the path relative to the current page.
   - Benefits: Simplifies development on local machines and reduces typing.
   - Example:
     ```html
     <ul>
       <li><a href="index.html">Home</a></li>
       <li><a href="about-us.html">About</a></li>
     </ul>
     ```

5. **Directory Structure and Relative URLs**:
   - Organize large websites with folders (directories) for sections (e.g., `movies/`, `music/`).
   - **Root folder**: Contains all site files; often includes `index.html` as the homepage.
   - Terminology: Parent, child, grandparent, grandchild describe folder relationships.
   - Relative URL types:
     - **Same folder**: File name (e.g., `reviews.html`).
     - **Child folder**: Folder name, slash, file name (e.g., `music/listings.html`).
     - **Grandchild folder**: Child folder, slash, grandchild folder, slash, file name (e.g., `movies/dvd/reviews.html`).
     - **Parent folder**: `../`, file name (e.g., `../index.html`).
     - **Grandparent folder**: `../../`, file name (e.g., `../../index.html`).

6. **Email Links**:
   - Use `<a>` with `href="mailto:email@address"` to open the user’s email program.
   - Example: `<a href="mailto:jon@example.org">Email Jon</a>` opens an email addressed to `jon@example.org`.

7. **Opening Links in a New Window**:
   - Use the `target="_blank"` attribute to open links in a new window.
   - Common for external sites, but avoid overuse; inform users (e.g., “opens in new window”).
   - Example: `<a href="http://www.imdb.com" target="_blank">Internet Movie Database</a>`.

8. **Linking to Specific Parts of a Page**:
   - Add an `id` attribute to the target element (e.g., `<h1 id="top">`).
   - Link using `<a href="#id_value">` (e.g., `<a href="#top">Top</a>`).
   - `id` values must start with a letter or underscore, be unique per page.
   - Example:
     ```html
     <h1 id="top">Film-Making Terms</h1>
     <a href="#arc_shot">Arc Shot</a><br />
     <h2 id="arc_shot">Arc Shot</h2>
     <p>A shot in which the subject is photographed by an encircling camera</p>
     <p><a href="#top">Top</a></p>
     ```

9. **Linking to Specific Parts of Another Page**:
   - Combine URL (absolute or relative) with `#id_value`.
   - Example: `<a href="http://www.example.com/#bottom">` links to the element with `id="bottom"` on the specified page.

10. **Example HTML Page**:
    - Demonstrates various link types: email, absolute URLs, relative URLs, and same-page links.
    - Example:
      ```html
      <html>
        <head>
          <title>Links</title>
        </head>
        <body>
          <h1 id="top">Film Folk</h1>
          <h2>Festival Diary</h2>
          <p>Please <a href="mailto:filmfolk@example.org">contact us</a> for more information.</p>
          <h3>January</h3>
          <p><a href="http://www.sundance.org">Sundance Film Festival</a></p>
          <p><a href="about.html">About Film Folk</a></p>
          <p><a href="#top">Top of page</a></p>
        </body>
      </html>
      ```

11. **Summary**:
    - Links use `<a>` with `href` to specify destinations.
    - Relative URLs are preferred for same-site links; absolute URLs for external sites.
    - Email links use `mailto:`.
    - Use `target="_blank"` for new windows and `id` attributes for in-page links.

