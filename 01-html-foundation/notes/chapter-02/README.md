# Chapter 2: Text (HTML Basics)

## Introduction
- **HTML Markup**: Tags are added to page content to provide meaning and structure, enabling browsers to display content appropriately.
- **Focus**: This chapter covers **structural markup** (e.g., headings, paragraphs) and **semantic markup** (e.g., emphasis, quotations, acronyms).

## Structural Markup
- **Headings** (`<h1>` to `<h6>`):
  - Six levels of headings; `<h1>` is the main heading (largest), `<h6>` is the smallest.
  - Used to organize content hierarchically (e.g., main headings, subheadings).
  - Browser display size varies; customizable with CSS.
  - Example: `<h1>Main Heading</h1>`, `<h2>Subheading</h2>`.

- **Paragraphs** (`<p>`):
  - Surround text with `<p>` and `</p>` tags to create a paragraph.
  - Browsers display paragraphs on new lines with spacing between them.
  - Example: `<p>A paragraph consists of one or more sentences.</p>`.

- **Line Breaks & Horizontal Rules**:
  - `<br />`: Adds a line break within a paragraph (empty element).
    - Example: `<p>The Earth<br />gets heavier.</p>` results in a line break.
  - `<hr />`: Creates a horizontal rule to separate content (empty element).
    - Example: `<hr />` between paragraphs indicates a thematic break.

- **White Space**:
  - Browsers collapse multiple spaces or line breaks into a single space (white space collapsing).
  - Developers use indentation for readable code, which doesn’t affect display.
  - Example: Multiple spaces in `<p>The moon is drifting away.</p>` display as one.

## Semantic Markup
- **Bold & Italic**:
  - `<b>`: Makes text bold, often for visual distinction (e.g., key features).
    - Example: `<b>bold</b>` displays as **bold**.
  - `<i>`: Makes text italic, used for technical terms, foreign words, etc.
    - Example: `<i>Solanum tuberosum</i>` displays as *Solanum tuberosum*.
  - Note: These tags don’t inherently add meaning; use `<strong>` or `<em>` for semantic emphasis.

- **Strong & Emphasis**:
  - `<strong>`: Indicates strong importance, displayed in bold.
    - Example: `<strong>Beware:</strong>` emphasizes urgency.
  - `<em>`: Indicates subtle emphasis, displayed in italic, altering sentence meaning.
    - Example: `<em>Ivy</em>` in “I think <em>Ivy</em> was the first” stresses “Ivy”.

- **Superscript & Subscript**:
  - `<sup>`: For superscript (e.g., dates, exponents like 2²).
    - Example: `<sup>th</sup>` in “4<sup>th</sup>” displays as 4ᵗʰ.
  - `<sub>`: For subscript (e.g., chemical formulas like H₂O).
    - Example: `<sub>2</sub>` in “CO<sub>2</sub>” displays as CO₂.

- **Quotations**:
  - `<blockquote>`: For long quotations, often indented, with optional `cite` attribute for source.
    - Example: `<blockquote cite="URL"><p>Quote text</p></blockquote>`.
  - `<q>`: For short inline quotations, often displayed with quotes.
    - Example: `<q>Some people talk to animals.</q>`.

- **Abbreviations & Acronyms** (`<abbr>`):
  - Used for abbreviations and acronyms with a `title` attribute for full term.
  - Example: `<abbr title="Professor">Prof</abbr>` displays “Prof” with tooltip “Professor”.
  - Note: HTML5 uses `<abbr>` for both; HTML4 had separate `<acronym>`.

- **Citations & Definitions**:
  - `<cite>`: References works (e.g., books, films), displayed in italics.
    - Example: `<cite>A Brief History of Time</cite>`.
  - `<dfn>`: Marks the defining instance of a term, sometimes italicized.
    - Example: `<dfn>black hole</dfn>` highlights the term’s definition.

- **Author Details** (`<address>`):
  - Contains contact details for the page’s author (e.g., email, physical address).
  - Displayed in italics by browsers.
  - Example: `<address><p>homer@example.org</p></address>`.

- **Changes to Content**:
  - `<ins>`: Shows inserted content, usually underlined.
    - Example: `<ins>best</ins>` in “the <ins>best</ins> idea”.
  - `<del>`: Shows deleted content, usually with a strikethrough.
    - Example: `<del>worst</del>` in “the <del>worst</del> idea”.
  - `<s>`: Indicates outdated or irrelevant content, displayed with strikethrough.
    - Example: `<s>Was $995</s>` for a price reduction.

## Visual Editors & Code Views
- **Visual Editors**: Resemble word processors (e.g., Dreamweaver, CMS).
  - Features: Select headings via dropdowns, bold/italic via buttons, paragraphs via Enter key.
  - Avoid copying from formatted programs (e.g., Word) to prevent extra markup; use plain text editors first.
- **Code Views**: Show raw HTML for manual editing, often with added white space for readability.
  - Activated via HTML button or angled brackets icon.

## Example HTML Page
```html
<html>
  <head>
    <title>Text</title>
  </head>
  <body>
    <h1>The Story in the Book</h1>
    <h2>Chapter 1</h2>
    <p>Molly had been staring out of her window for about an hour now. On her desk, lying between the copies of <i>Nature</i>, <i>New Scientist</i>, and all the other scientific journals her work had appeared in, was a well thumbed copy of <cite>On The Road</cite>. It had been Molly's favorite book since college, and the longer she spent in these four walls the more she felt she needed to be free.</p>
    <p>She had spent the last ten years in this room, sitting under a poster with an Oscar Wilde quote proclaiming that <q>Work is the refuge of people who have nothing better to do</q>. Although many considered her pioneering work, unraveling the secrets of the llama <abbr title="Deoxyribonucleic acid">DNA</abbr>, to be an outstanding achievement, Molly <em>did</em> think she had something better to do.</p>
  </body>
</html>
