HTML Tables Guide
=================

This document provides a comprehensive overview of HTML tables, their structure, and advanced features, as extracted from "Wiley HTML and CSS, October 2011."

Why Tables?
-----------

Tables are used to display information in a grid format, suitable for data such as sports results, stock reports, train timetables, financial reports, and TV schedules. They allow complex data to be understood by referencing information on two axes (rows and columns). Each block in the grid is called a table cell, and HTML tables are written row by row.

Basic Table Structure
---------------------

Tables are created using the following key elements:

-   **`<table>`**: Defines the table.
-   **`<tr>`**: Defines a table row (tr stands for table row).
-   **`<td>`**: Defines a table cell (td stands for table data).

**Example**:

```
<table>
  <tr>
    <td>15</td>
    <td>15</td>
    <td>30</td>
  </tr>
  <tr>
    <td>45</td>
    <td>60</td>
    <td>45</td>
  </tr>
  <tr>
    <td>60</td>
    <td>90</td>
    <td>90</td>
  </tr>
</table>

```

**Result**:

```
15 15 30
45 60 45
90 90 90

```

Browsers may automatically draw borders around tables or cells, which can be controlled using CSS (pages 309-312, 337-340).

Table Headings
--------------

-   **`<th>`**: Defines a table header cell (th stands for table heading), typically displayed in bold and centered.
-   **scope attribute**: Indicates whether the header applies to a row (`scope="row"`) or column (`scope="col"`).

**Example**:

```
<table>
  <tr>
    <th></th>
    <th scope="col">Saturday</th>
    <th scope="col">Sunday</th>
  </tr>
  <tr>
    <th scope="row">Tickets sold:</th>
    <td>120</td>
    <td>135</td>
  </tr>
  <tr>
    <th scope="row">Total sales:</th>
    <td>$600</td>
    <td>$675</td>
  </tr>
</table>

```

**Result**:

```
          Saturday  Sunday
Tickets sold:  120      135
Total sales:   $600     $675

```

Using `<th>` improves accessibility for screen readers, search engine indexing, and CSS styling. Empty cells should still include `<td>` or `<th>` to ensure correct rendering.

Spanning Columns
----------------

The `colspan` attribute allows a cell to span multiple columns.

**Example**:

```
<table>
  <tr>
    <th></th>
    <th>9am</th>
    <th>10am</th>
    <th>11am</th>
    <th>12am</th>
  </tr>
  <tr>
    <th>Monday</th>
    <td colspan="2">Geography</td>
    <td>Math</td>
    <td>Art</td>
  </tr>
  <tr>
    <th>Tuesday</th>
    <td colspan="3">Gym</td>
    <td>Home Ec</td>
  </tr>
</table>

```

**Result**:

```
          9am   10am  11am  12am
Monday    Geography     Math  Art
Tuesday   Gym           Home Ec

```

Rows with spanned cells have fewer `<td>` elements, as spanned cells replace adjacent ones. CSS can enhance visibility (pages 250, 337-340).

Spanning Rows
-------------

The `rowspan` attribute allows a cell to span multiple rows.

**Example**:

```
<table>
  <tr>
    <th></th>
    <th>ABC</th>
    <th>BBC</th>
    <th>CNN</th>
  </tr>
  <tr>
    <th>6pm - 7pm</th>
    <td rowspan="2">Movie</td>
    <td>Comedy</td>
    <td>News</td>
  </tr>
  <tr>
    <th>7pm - 8pm</th>
    <td>Sport</td>
    <td>Current Affairs</td>
  </tr>
</table>

```

**Result**:

```
            ABC         BBC         CNN
6pm - 7pm   Movie       Comedy      News
7pm - 8pm               Sport       Current Affairs

```

Rows affected by `rowspan` have fewer `<td>` elements. CSS can enhance visibility (pages 250, 337-340).

Long Tables
-----------

For long tables, use:

-   **`<thead>`**: Contains header rows.
-   **`<tbody>`**: Contains body rows.
-   **`<tfoot>`**: Contains footer rows (e.g., totals).

**Example**:

```
<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Income</th>
      <th>Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1st January</th>
      <td>250</td>
      <td>36</td>
    </tr>
    <!-- additional rows -->
    <tr>
      <th>31st January</th>
      <td>129</td>
      <td>64</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td>7824</td>
      <td>1241</td>
    </tr>
  </tfoot>
</table>

```

These elements improve accessibility and allow CSS styling (pages 309-312, 337-340). Some content management systems may auto-insert `<thead>` for rows with only `<th>` elements. Browsers may keep `<thead>` and `<tfoot>` visible during scrolling, though this is not universally implemented.

Deprecated Attributes
---------------------

Older HTML used attributes like:

-   **width**: Set table or cell width in pixels.
-   **cellpadding**: Added space inside cells.
-   **cellspacing**: Added space between cells.
-   **border**: Set border width in pixels.
-   **bgcolor**: Set background color using hex codes.

**Example**:

```
<table width="400" cellpadding="10" cellspacing="5" border="2" bgcolor="#efefef">
  <tr>
    <th width="150"></th>
    <th>Withdrawn</th>
    <th>Credit</th>
    <th width="150" bgcolor="#ccceee">Balance</th>
  </tr>
  <tr>
    <th>January</th>
    <td>250.00</td>
    <td>660.50</td>
    <td bgcolor="#ccceee">410.50</td>
  </tr>
</table>

```

These are outdated; use CSS instead (pages 303, 309-312, 337-340).

Example Table
-------------

A hosting plan comparison table:

```
<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col">Home starter hosting</th>
      <th scope="col">Premium business hosting</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Disk space</th>
      <td>250mb</td>
      <td>1gb</td>
    </tr>
    <tr>
      <th scope="row">Bandwidth</th>
      <td>5gb per month</td>
      <td>50gb per month</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td colspan="2">Sign up now and save 10%!</td>
    </tr>
  </tfoot>
</table>

```

Summary
-------

-   The `<table>` element creates tables, drawn row by row using `<tr>`.
-   Cells are defined with `<td>` (data) or `<th>` (headers).
-   `colspan` and `rowspan` allow cells to span multiple columns or rows.
-   `<thead>`, `<tbody>`, and `<tfoot>` structure long tables for accessibility and styling.
-   Avoid deprecated attributes like `width`, `border`, and `bgcolor`; use CSS instead.
