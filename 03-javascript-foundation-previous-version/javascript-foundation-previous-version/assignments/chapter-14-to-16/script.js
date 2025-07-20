//Assignment 1
var students_name=[]

//Assignment 2
var students_name_obj= new Array();

//Assignment 3
var string_arr=["John", "Jane", "Doe", "Smith"];

//Assignment 4
var numbers_arr=[1, 2, 3, 4, 5];

//Assignment 5
var boolean_arr=[true, false, true, false];

//Assignment 6
var mixed_arr=["John", 25, true, "Doe", 30, false];

//Assignment 7
var qualification=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("<h1>Qualifications</h1>");
document.write("<ol>");
document.write("<li>" + qualification[0] + "</li>");
document.write("<li>" + qualification[1] + "</li>");
document.write("<li>" + qualification[2] + "</li>");
document.write("<li>" + qualification[3] + "</li>");
document.write("<li>" + qualification[4] + "</li>");
document.write("<li>" + qualification[5] + "</li>");
document.write("<li>" + qualification[6] + "</li>");
document.write("<li>" + qualification[7] + "</li>");
document.write("</ol>");
document.write("<br>");


//Assignment 8
var students=["Michael", "John", "Tony"];
var scores=[320, 230, 480];
document.write("<h1>Score of " + students[0] + " is " + scores[0] + ". Percentage: " + (scores[0]/500)*100 + "%</h1>");
document.write("<h1>Score of " + students[1] + " is " + scores[1] + ". Percentage: " + (scores[1]/500)*100 + "%</h1>");
document.write("<h1>Score of " + students[2] + " is " + scores[2] + ". Percentage: " + (scores[2]/500)*100 + "%</h1>");

//Assignment 9
var color_names=["Red", "Green", "Blue"];
document.write("<h1>Colors: " + color_names.join(", ") + "</h1>");
var user_pre_color=prompt("Enter a color to add at the beginning of the array:");
color_names.unshift(user_pre_color);
document.write("<h1>Updated Colors: " + color_names.join(", ") + "</h1>");
var user_end_color=prompt("Enter a color to add at the end of the array:");
color_names.push(user_end_color);
document.write("<h1>Updated Colors: " + color_names.join(", ") + "</h1>");
color_names.unshift("Purple", "Orange");
document.write("<h1>Updated Colors after adding two colors at the beginning: " + color_names.join(", ") + "</h1>");
color_names.shift();
document.write("<h1>Updated Colors after removing the first color: " + color_names.join(", ") + "</h1>");
color_names.pop(); 
document.write("<h1>Updated Colors after removing the last color: " + color_names.join(", ") + "</h1>");
var user_index=prompt("Enter the index at which you want to add a new color:");
var user_color=prompt("Enter the color you want to add:");
color_names.splice(user_index, 0, user_color);
document.write("<h1>Updated Colors after adding a color at index " + user_index + ": " + color_names.join(", ") + "</h1>");
var user_index_remove=prompt("Enter the index of the color you want to remove:");
var user_count=prompt("Enter the number of colors you want to remove:");
color_names.splice(user_index_remove, user_count);  
document.write("<h1>Updated Colors after removing " + user_count + " color(s) from index " + user_index_remove + ": " + color_names.join(", ") + "</h1>");

//Assignment 10
var student_scores=[320, 230, 480, 120];   
document.write("<h1>Student Scores: " + student_scores.join(", ") + "</h1>");
student_scores.sort(function(a, b){return a - b});
document.write("<h1>Sorted Student Scores: " + student_scores.join(", ") + "</h1>");

//Assignment 11
var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h1>Cities: " + cities.join(", ") + "</h1>");
var selected_cities=cities.slice(0, 3);


//Assignment 12
var arr=["This", "is", "my", "cat"];
document.write("<h1>Array: " + arr.join(",") + "</h1>");
document.write("<h1>String: " + arr.join(" ") + "</h1>");

//Assignment 13
var devices=["keyboard", "mouse", "printer", "monitor"];
document.write("<h1>Devices: " + devices.join(", ") + "</h1>");
var removed_device=devices.shift();
document.write("<h1>Removed Device: " + removed_device + "</h1>");
var removed_device=devices.shift();
document.write("<h1>Removed Device: " + removed_device + "</h1>");
var removed_device=devices.shift();
document.write("<h1>Removed Device: " + removed_device + "</h1>");
var removed_device=devices.shift();
document.write("<h1>Removed Device: " + removed_device + "</h1>");


//Assignment 14
var devices=["keyboard", "mouse", "printer", "monitor"];
document.write("<h1>Devices: " + devices.join(", ") + "</h1>");
var removed_device=devices.pop();
document.write("<h1>Removed Device: " + removed_device + "</h1>");
var removed_device=devices.pop();
document.write("<h1>Removed Device: " + removed_device + "</h1>");
var removed_device=devices.pop();
document.write("<h1>Removed Device: " + removed_device + "</h1>");
var removed_device=devices.pop();
document.write("<h1>Removed Device: " + removed_device + "</h1>");
var removed_device=devices.pop();
document.write("<h1>Removed Device: " + removed_device + "</h1>");


//Assignment 15
var phone_brands=["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h1>Phone Brands:</h1>");
document.write("<select>");
for (var i = 0; i < phone_brands.length; i++) {
    document.write("<option>" + phone_brands[i] + "</option>");
}

document.write("</select>");


