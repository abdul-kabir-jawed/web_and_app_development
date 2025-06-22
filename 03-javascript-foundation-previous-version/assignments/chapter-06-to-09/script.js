//program 1//

a=10
document.write("Result:"+"<br>"+"The value of a is "+a);
document.write("<br>");
document.write("---------------------------------------");

document.write("<br>"+"The value of ++a is "+ ++a +"<br>"+"Now the value of a is " +a);
document.write("<br>");
document.write("<br>");
document.write("<br>");


document.write("<br>"+"The value of a++ is "+ a++ +"<br>"+"Now the value of a is " +a);
document.write("<br>");
document.write("<br>");
document.write("<br>");


document.write("<br>"+"The value of --a is "+ --a +"<br>"+"Now the value of a is " +a);
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("<br>"+"The value of a-- is "+ a-- +"<br>"+"Now the value of a is " +a);
document.write("<br>");
document.write("<br>");
document.write("<br>");




//program 2//
var a = 2;
var b = 1;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is " + result + "<br>");
document.write("<br>");

//program 3//
var user_name=prompt("Enter your name");
document.write("Hello " + user_name + "! Welcome to the JavaScript world." + "<br>");
document.write("<br>"+"<br>"+"<br>");



//program 5//
var num = prompt("Enter a number to make its table");
if (num) {
    document.write("Table of " + num + "<br>");
    document.write(num+" x 1 = " +num * 1 + "<br>");
    document.write(num+" x 2 = " + num * 2 + "<br>"); 
    document.write(num+" x 3 = " + num * 3 + "<br>");
    document.write(num+" x 4 = " + num * 4 + "<br>");
    document.write(num+" x 5 = " + num * 5 + "<br>");
    document.write(num+" x 6 = " + num * 6 + "<br>");
    document.write(num+" x 7 = " + num * 7 + "<br>");
    document.write(num+" x 8 = " + num * 8 + "<br>");
    document.write(num+" x 9 = " + num * 9 + "<br>");
    document.write(num+" x 10 = " + num * 10 + "<br>");
}
else{
    document.write("Table of " + 5 + "<br>");
    document.write(5 +" x 1 = " + 5 * 1 + "<br>");
    document.write(5 +" x 2 = " + 5 * 2 + "<br>"); 
    document.write(5 +" x 3 = " + 5 * 3 + "<br>");
    document.write(5 +" x 4 = " + 5 * 4 + "<br>");
    document.write(5 +" x 5 = " + 5 * 5 + "<br>");
    document.write(5 +" x 6 = " + 5 * 6 + "<br>");
    document.write(5 +" x 7 = " + 5 * 7 + "<br>");
    document.write(5 +" x 8 = " + 5 * 8 + "<br>");
    document.write(5 +" x 9 = " + 5 * 9 + "<br>");
    document.write(5 +" x 10 = " + 5 * 10 + "<br>");
}


//program 6//
var subject1 = prompt("Enter the name of first subject");
var subject2 = prompt("Enter the name of second subject");
var subject3 = prompt("Enter the name of third subject");
var totalMarks = 300;
var total_mark_each= 100;
var marks_subject1 = +(prompt("Enter marks obtained in " + subject1));
var marks_subject2 = +(prompt("Enter marks obtained in " + subject2));
var marks_subject3 = +(prompt("Enter marks obtained in " + subject3));
var obtainedMarks = marks_subject1 + marks_subject2 + marks_subject3;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<h2>Marks Sheet</h2>");
document.write("<table cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + total_mark_each + "</td><td>" + marks_subject1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + total_mark_each + "</td><td>" + marks_subject2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + total_mark_each + "</td><td>" + marks_subject3 + "</td></tr>");
document.write("<tr><th colspan='2'>Total Marks</th><td>" + obtainedMarks + "</td></tr>");
document.write("<tr><th colspan='2'>Percentage</th><td>" + percentage + "%</td></tr>");
document.write("</table>");
