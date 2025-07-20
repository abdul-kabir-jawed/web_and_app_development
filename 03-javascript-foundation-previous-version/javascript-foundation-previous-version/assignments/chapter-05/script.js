// Task 1: Add two numbers
        var num_1=3;
        var num_2=5;
        var num_3=3+5;
        document.write("<h2>"+"Sum of "+ num_1 + " & " + num_2 + " is " + num_3 + "</h2>");

        // Task 2: Subtraction, Multiplication, Division, Modulus
        var num_3=3-5;
        document.write("<h2>"+"Subtraction of "+ num_1 + " & " + num_2 + " is " + num_3 + "</h2>");
        var num_3=3*5;
        document.write("<h2>"+"Multiplication of "+ num_1 + " & " + num_2 + " is " + num_3 + "</h2>");
        var num_3=3/5;
        document.write("<h2>"+"Division of "+ num_1 + " & " + num_2 + " is " + num_3 + "</h2>");
        document.write('<hr>');

        // Task 3: Variable Manipulation
        var undefined_variable=undefined;
        document.write("<h2>"+"Value after variable declaration is: " + undefined_variable + "</h2>");
        var undefined_variable=5;
        document.write("<h2>"+"Initial value: " + undefined_variable + "</h2>");
        var undefined_variable=++undefined_variable;
        document.write("<h2>"+"Value after increment is: " + undefined_variable + "</h2>");
        var undefined_variable=undefined_variable+7;
        document.write("<h2>"+"Value after addition is: " + undefined_variable + "</h2>");
        var undefined_variable=--undefined_variable;
        document.write("<h2>"+"Value after decrement is: " + undefined_variable + "</h2>");
        var undefined_variable=undefined_variable%3;
        document.write("<h2>"+"The remainder is: " + undefined_variable + "</h2>");
        document.write('<hr>');

        // Task 4: Movie Ticket Cost
        var ticket_price=600;
        var ticket_quantity=5;
        var total_cost=ticket_price*ticket_quantity;
        document.write("<h2>"+"Total cost to buy " + ticket_quantity + " tickets to a movie is " +"<strong>"+ total_cost +"</strong>"+ " PKR" + "</h2>");
        document.write('<hr>');

        // Task 5: Multiplication Table
        var table_number=4;
        var table=table_number*1;
        document.write("<h2>"+"Table of " + table_number + "</h2>");
        document.write("<h2>" + table_number + "X" + "1" + "=" + table + "</h2>");
        var table=table_number*2;
        document.write("<h2>" + table_number + "X" + "2" + "=" + table + "</h2>");
        var table=table_number*3;
        document.write("<h2>" + table_number + "X" + "3" + "=" + table + "</h2>");
        var table=table_number*4;
        document.write("<h2>" + table_number + "X" + "4" + "=" + table + "</h2>");
        var table=table_number*5;
        document.write("<h2>" + table_number + "X" + "5" + "=" + table + "</h2>");
        var table=table_number*6;
        document.write("<h2>" + table_number + "X" + "6" + "=" + table + "</h2>");
        var table=table_number*7;
        document.write("<h2>" + table_number + "X" + "7" + "=" + table + "</h2>");
        var table=table_number*8;
        document.write("<h2>" + table_number + "X" + "8" + "=" + table + "</h2>");
        var table=table_number*9;
        document.write("<h2>" + table_number + "X" + "9" + "=" + table + "</h2>");
        var table=table_number*10;
        document.write("<h2>" + table_number + "X" + "10" + "=" + table + "</h2>");
        var table=table_number*11;
        document.write("<h2>" + table_number + "X" + "11" + "=" + table + "</h2>");
        var table=table_number*12;
        document.write("<h2>" + table_number + "X" + "12" + "=" + table + "</h2>");
        document.write('<hr>');

        // Task 6: Temperature Converter
        var temperature_c=25;
        var temperature_f=temperature_c*9/5+32;
        document.write("<h2>" + temperature_c + "°C is " + temperature_f + "°F" + "</h2>");
        var temperature_f=70;
        var temperature_c=(temperature_f-32)*5/9;
        document.write("<h2>" + temperature_f + "°F is " + temperature_c + "°C" + "</h2>");
        document.write('<hr>');

        // Task 7: Shopping Cart Checkout
        var item_1_price=650;
        var item_1_quantity=3;
        var item_2_price=100;
        var item_2_quantity=7;
        var shipping_charges=100;
        var total_cost=item_1_price*item_1_quantity+item_2_price*item_2_quantity+shipping_charges;
        document.write("<h1>" + "Shopping Cart" + "</h1>");
        document.write("<h2>" + "Price of item 1 is " + item_1_price + "</h2>");
        document.write("<h2>" + "Quantity of item 1 is " + item_1_quantity + "</h2>");
        document.write("<h2>" + "Price of item 2 is " + item_2_price + "</h2>");
        document.write("<h2>" + "Quantity of item 2 is " + item_2_quantity + "</h2>");
        document.write("<h2>" + "Shipping Charges " + shipping_charges + "</h2>");
        document.write("<br>" + "<br>" + "<br>");
        document.write("<h2>" + "Total cost of your order is " + total_cost + "</h2>");
        document.write('<hr>');

        // Task 8: Percentage Calculator
        var total_marks=980;
        var marks_obtained=804;
        var percentage=marks_obtained/total_marks*100;
        document.write("<h1>" + "Marks Sheet" + "</h1>");
        document.write("<h2>" + "Total Marks: " + total_marks + "</h2>");
        document.write("<h2>" + "Marks Obtained: " + marks_obtained + "</h2>");
        document.write("<h2>" + "Percentage: " + percentage + "%" + "</h2>");
        document.write('<hr>');

        // Task 9: Currency Conversion
        var dollar_to_pkr=282.56;
        var riyal_to_pkr=75.08;
        var dollar=10;
        var riyal=25;
        var total_currency=dollar*dollar_to_pkr+riyal*riyal_to_pkr;
        document.write("<h1>" + "Currency in PKR" + "</h1>");
        document.write("<h2>" + "Total currency in PKR is " + total_currency + "</h2>");
        document.write('<hr>');

        // Task 10: Arithmetic Sequence
        var num_1=16+5*10/1;
        document.write("<h2>" + "Arithmetic sequence result: " + num_1 + "</h2>");
        document.write('<hr>');

        // Task 11: Age Calculator
        var current_year=2025;
        var birth_year=2000;
        var age=current_year-birth_year;
        document.write("<h1>" + "Age Calculator" + "</h1>");
        document.write("<h2>" + "Current Year: " + current_year + "</h2>");
        document.write("<h2>" + "Birth Year: " + birth_year + "</h2>");
        document.write("<h2>" + "Your Age is: " + age + "</h2>");
        document.write('<hr>');

        // Task 12: Geometrizer
        var radius=20;
        var circumference=2*3.142*radius;
        var area=3.142*radius*radius;
        document.write("<h1>" + "The Geometrizer" + "</h1>");
        document.write("<h2>" + "Radius of a circle: " + radius + "</h2>");
        document.write("<h2>" + "Circumference of a circle: " + circumference + "</h2>");
        document.write("<h2>" + "Area of a circle: " + area + "</h2>");
        document.write('<hr>');

        // Task 13: Lifetime Supply Calculator
        var favorite_snack="chocolate chip";
        var current_age=18;
        var max_age=65;
        var amount_per_day=3;
        var total_snack= (max_age-current_age)*365*amount_per_day;
        document.write("<h1>" + "The Lifetime Supply Calculator" + "</h1>");
        document.write("<h2>" + "Favorite Snack: " + favorite_snack + "</h2>");
        document.write("<h2>" + "Current Age: " + current_age + "</h2>");
        document.write("<h2>" + "Estimated Maximum Age: " + max_age + "</h2>");
        document.write("<h2>" + "Amount of snacks per day: " + amount_per_day + "</h2>");
        document.write("<h2>" + "You will need " + total_snack + " " + favorite_snack + " to last you until the ripe old age of " + max_age + "</h2>");