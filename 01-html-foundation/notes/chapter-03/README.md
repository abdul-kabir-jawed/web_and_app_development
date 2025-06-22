# Concise Notes on Chapter 3: Lists (HTML Basics)

This chapter covers the use of lists in HTML, detailing three types: ordered, unordered, and definition lists, as well as nested lists. Below are concise notes summarizing the key points from the provided document excerpt from *Wiley HTML and CSS (October 2011)*, organized for clarity.

## Key Concepts

1. **Types of HTML Lists**:
   - HTML provides three list types: ordered, unordered, and definition lists.
   - Each serves a specific purpose based on content structure and presentation.

2. **Ordered Lists (`<ol>`)**:
   - Created using the `<ol>` element, with each item in `<li>` (list item) tags.
   - Items are numbered (e.g., 1, 2, 3), ideal for sequences like recipes or legal sections.
   - Browsers indent lists by default.
   - The `type` attribute (e.g., numbers, letters, Roman numerals) is deprecated; use CSS `list-style-type` instead.
   - Example:
     ```html
     <ol>
         <li>Chop potatoes into quarters</li>
         <li>Simmer in salted water for 15-20 minutes</li>
     </ol>
     ```
     **Result**:
     1. Chop potatoes into quarters
     2. Simmer in salted water for 15-20 minutes

3. **Unordered Lists (`<ul>`)**:
   - Created using the `<ul>` element, with each item in `<li>` tags.
   - Items are marked with bullet points, suitable for non-sequential items like ingredients.
   - Browsers indent lists by default.
   - Example:
     ```html
     <ul>
         <li>1kg King Edward potatoes</li>
         <li>100ml milk</li>
     </ul>
     ```
     **Result**:
     - 1kg King Edward potatoes
     - 100ml milk

4. **Definition Lists (`<dl>`)**:
   - Created using the `<dl>` element, containing pairs of `<dt>` (definition term) and `<dd>` (definition description).
   - Used for terms and their definitions, e.g., glossaries.
   - Multiple `<dt>` or `<dd>` elements can apply to the same term or definition.
   - Example:
     ```html
     <dl>
         <dt>Sashimi</dt>
         <dd>Sliced raw fish served with condiments</dd>
         <dt>Scale</dt>
         <dd>A device to measure weight</dd>
         <dd>A technique to remove fish scales</dd>
     </dl>
     ```
     **Result**:
     - **Sashimi**: Sliced raw fish served with condiments
     - **Scale**: A device to measure weight; A technique to remove fish scales

5. **Nested Lists**:
   - A list can be placed inside an `<li>` element to create a sublist.
   - Browsers indent nested lists further and may change bullet styles for unordered lists.
   - Example:
     ```html
     <ul>
         <li>Mousses</li>
         <li>Pastries
             <ul>
                 <li>Croissant</li>
                 <li>Mille-feuille</li>
             </ul>
         </li>
     </ul>
     ```
     **Result**:
     - Mousses
     - Pastries
       - Croissant
       - Mille-feuille

6. **Example HTML Page**:
   - Combines unordered and ordered lists to present a recipe.
   - Example:
     ```html
     <html>
       <head>
         <title>Lists</title>
       </head>
       <body>
         <h1>Scrambled Eggs</h1>
         <p>Eggs are one of my favourite foods.</p>
         <h2>Ingredients</h2>
         <ul>
           <li>2 eggs</li>
           <li>1tbs butter</li>
           <li>2tbs cream</li>
         </ul>
         <h2>Method</h2>
         <ol>
           <li>Melt butter in a frying pan</li>
           <li>Gently mix the eggs and cream</li>
           <li>Once butter has melted add cream and eggs</li>
         </ol>
       </body>
     </html>
     ```

7. **Summary**:
   - **Ordered Lists**: Use `<ol>` with numbers for sequential items.
   - **Unordered Lists**: Use `<ul>` with bullets for non-sequential items.
   - **Definition Lists**: Use `<dl>`, `<dt>`, `<dd>` for terms and definitions.
   - **Nested Lists**: Lists within `<li>` for hierarchical structures.

