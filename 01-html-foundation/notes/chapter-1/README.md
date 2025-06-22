# 📚 Concise Notes on Chapter 1: Structure (HTML Basics)

This chapter introduces the importance of structure in documents, particularly for web pages, and explains how HTML (HyperText Markup Language) is used to create structured web content. Below are concise notes summarizing the key points, organized for clarity and understanding. 🌐

## Key Concepts

### Importance of Structure in Documents 📝
- Structure organizes content (e.g., headlines, text, images) to make it easier for readers to understand and navigate.
- Examples: Newspapers use headlines and subheadings; insurance forms use sections and checkboxes. Web pages mirror these structures electronically.

### What is HTML? 💻
- **HTML (HyperText Markup Language)**: A markup language that annotates text to define its structure and presentation on a web page.
- **HyperText**: Allows linking between pages for easy navigation.
- **Markup**: Tags surround content to give it meaning, which browsers use to display the page correctly.

### HTML Structure 🏗️
- HTML uses tags (enclosed in `<` and `>`) to describe the structure of a web page.
- Tags usually come in pairs:
  - **Opening tag**: `<tagname>` (e.g., `<p>` for paragraph).
  - **Closing tag**: `</tagname>` (includes a forward slash).
- An **element** consists of an opening tag, content, and a closing tag (e.g., `<p>Hello</p>`).
- Tags act like containers, defining the role of the content they enclose.

### Common HTML Elements 🧩
- `<html>`: Wraps all HTML content, indicating the start and end of the HTML code.
- `<body>`: Contains content displayed in the main browser window.
- `<head>`: Contains metadata about the page (not displayed in the main window).
- `<title>`: Sets the page title, shown in the browser’s title bar or tab.
- `<h1>`: Main heading.
- `<h2>`: Sub-heading.
- `<p>`: Paragraph.

### Attributes ⚙️
- Provide additional information about an element.
- Appear in the opening tag, consisting of a name and value (e.g., `<p lang="en-us">Text</p>`).
  - `lang` is the attribute name; `"en-us"` is the value.
- Attribute names should be lowercase, and values should be in quotes (HTML5 allows uppercase and no quotes, but this is not recommended).
- Example: The `lang` attribute specifies the language of the content (e.g., `en-us` for US English, `fr` for French).

### Creating a Web Page 🌍
- **On a PC**: Use Notepad or Notepad++ to write HTML code, save as `.html` (e.g., `first-test.html`), and open in a browser.
- **On a Mac**: Use TextEdit or TextWrangler, save as `.html`, ensure "Ignore rich text commands" is enabled in TextEdit preferences, and open in a browser.
- Example code:
```html
<html>
  <head>
    <title>This is the Title of the Page</title>
  </head>
  <body>
    <h1>This is the Body of the Page</h1>
    <p>Anything within the body of a web page is displayed in the main browser window.</p>
  </body>
</html>
