HTML Forms Guide
================

This document provides a comprehensive overview of HTML forms, their structure, controls, and HTML5 enhancements, as extracted from "Wiley HTML and CSS, October 2011."

Why Forms?
----------

Forms are essential for collecting user input on websites, enabling functionalities such as:

-   Searching (e.g., Google's search box)
-   Registering for websites
-   Online shopping
-   Subscribing to newsletters

How Forms Work
--------------

1.  **User Interaction**: A user fills out a form and submits it by clicking a button.
2.  **Data Transmission**: The form control names and user-entered values are sent to the server as name/value pairs (e.g., `username=Ivy`, `vote=Herbie`).
3.  **Server Processing**: The server processes the data using languages like PHP, C#, or Java, often storing it in a database.
4.  **Response**: The server generates a new page to send back to the browser, confirming the submission.

Form Structure
--------------

Forms are contained within the `<form>` element, which typically includes:

-   **action**: URL of the server page that processes the form data.
-   **method**: Either `get` (for short forms or retrieving data) or `post` (for long forms, sensitive data, or file uploads).
-   **id**: Uniquely identifies the form for scripting purposes.

**Example**:

```
<form action="http://www.example.com/subscribe.php" method="get">
  <p>This is where the form controls will appear.</p>
</form>

```

Form Controls
-------------

Various form controls collect different types of user input:

### Text Inputs

-   **Single-line Text**: For short inputs like names or email addresses.

    ```
    <input type="text" name="username" size="15" maxlength="30" />

    ```

-   **Password**: Masks entered characters for security.

    ```
    <input type="password" name="password" size="15" maxlength="30" />

    ```

-   **Text Area**: For multi-line text, such as comments.

    ```
    <textarea name="comments" cols="20" rows="4">Enter your comments...</textarea>

    ```

### Making Choices

-   **Radio Buttons**: Allow selection of one option from a group.

    ```
    <input type="radio" name="genre" value="rock" checked="checked" /> Rock

    ```

-   **Checkboxes**: Allow multiple selections.

    ```
    <input type="checkbox" name="service" value="itunes" checked="checked" /> iTunes

    ```

-   **Drop-down List**: Users select one option from a list.

    ```
    <select name="device">
      <option value="ipod">iPod</option>
      <option value="radio">Radio</option>
    </select>

    ```

### Submitting Forms

-   **Submit Button**: Sends form data to the server.

    ```
    <input type="submit" name="subscribe" value="Subscribe" />

    ```

-   **Image Button**: Uses an image as a submit button.

    ```
    <input type="image" src="images/subscribe.jpg" width="100" height="20" />

    ```

### Uploading Files

-   **File Input**: Allows users to upload files (requires `method="post"`).

    ```
    <input type="file" name="user-song" />

    ```

### Button & Hidden Controls

-   **Button**: Customizable button with embedded content.

    ```
    <button><img src="images/add.gif" alt="add" /> Add</button>

    ```

-   **Hidden**: Stores data not visible to users.

    ```
    <input type="hidden" name="bookmark" value="lyrics" />

    ```

Labeling Form Controls
----------------------

The `<label>` element improves accessibility by associating text with form controls:

-   Wraps around the control and text:

    ```
    <label>Age: <input type="text" name="age" /></label>

    ```

-   Uses the `for` attribute to link to a control's `id`:

    ```
    <input id="female" type="radio" name="gender" value="f">
    <label for="female">Female</label>

    ```

**Label Placement**:

-   Above or left: Text inputs, text areas, select boxes, file uploads.
-   Right: Checkboxes, radio buttons.

Grouping Form Elements
----------------------

-   **`<fieldset>`**: Groups related controls, often displayed with a border.
-   **`<legend>`**: Provides a caption for the group.

    ```
    <fieldset>
      <legend>Contact details</legend>
      <label>Email: <input type="text" name="email" /></label>
    </fieldset>

    ```

HTML5 Enhancements
------------------

HTML5 introduces new form controls and validation features:

### Form Validation

-   The `required` attribute ensures fields are filled before submission.

    ```
    <input type="text" name="username" required="required" />

    ```

### New Input Types

-   **Date**: For selecting dates.

    ```
    <input type="date" name="depart" />

    ```

-   **Email**: Validates email format.

    ```
    <input type="email" name="email" />

    ```

-   **URL**: Validates URL format.

    ```
    <input type="url" name="website" />

    ```

-   **Search**: Optimized for search queries.

    ```
    <input type="search" name="search" />

    ```

Older browsers treat unsupported HTML5 inputs as `type="text"`.

Example Form
------------

A feedback and newsletter form demonstrating various controls:

```
<form action="http://www.example.com/review.php" method="get">
  <fieldset>
    <legend>Your Details</legend>
    <label>Name: <input type="text" name="name" size="30" maxlength="100"></label><br />
    <label>Email: <input type="email" name="email" size="30" maxlength="100"></label><br />
  </fieldset>
  <fieldset>
    <legend>Your Review</legend>
    <p>
      <label for="hear-about">How did you hear about us?</label>
      <select name="referrer" id="hear-about">
        <option value="google">Google</option>
        <option value="friend">Friend</option>
      </select>
    </p>
    <p>Would you visit again?<br />
      <label><input type="radio" name="rating" value="yes" /> Yes</label>
      <label><input type="radio" name="rating" value="no" /> No</label>
      <label><input type="radio" name="rating" value="maybe" /> Maybe</label>
    </p>
    <p>
      <label for="comments">Comments:</label><br />
      <textarea rows="4" cols="40" id="comments"></textarea>
    </p>
    <label><input type="checkbox" name="subscribe" checked="checked" /> Sign me up for email updates</label><br />
    <input type="submit" value="Submit review" />
  </fieldset>
</form>

```

Summary
-------

-   Forms, housed in `<form>` elements, collect user input via name/value pairs.
-   Various controls (text, radio, checkboxes, etc.) cater to different input needs.
-   HTML5 introduces new input types and validation to enhance user experience and reduce server load.
