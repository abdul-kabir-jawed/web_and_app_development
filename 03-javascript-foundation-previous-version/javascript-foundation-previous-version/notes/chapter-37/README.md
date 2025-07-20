JavaScript Functions Returning Data Notes
=========================================

Overview
--------

-   Functions can return data to the calling code using `return`, enhancing versatility.

Example (Shipping Calculator)
-----------------------------

```
function calcTot(merchTot) {
  var orderTot;
  if (merchTot >= 100) {
    orderTot = merchTot;
  } else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
  } else {
    orderTot = merchTot + 5 + (0.03 * (merchTot - 50));
  }
  return orderTot;
}
var totalToCharge = calcTot(79.99); // Returns 85.49

```

Key Points
----------

-   **Returning Data**:
    -   Use `return` to send a value back: `return orderTot;`.
-   **Catching Returned Value**:
    -   Store in a variable: `var totalToCharge = calcTot(79.99);`.
    -   Variable names in calling code and function don't need to match.
-   **Functions as Variables**:
    -   Use returned value in:
        -   Alerts: `alert(calcTot(79.99));`.
        -   Expressions: `var orderTot = merchTot + calcTax(merchTot);`.
        -   Other function calls: `var tot = calc(merchTot, calcTax(merchTot));`.
    -   Call another function internally: `return price + calcShip(price);`.
-   **Limitation**:
    -   Only one value can be returned per function call.