// 1. Write a program that displays current date and time in your browser.
var date= new Date()
console.log(date)


// 2. Write a program that alerts the current month in words. For example: December.
var date=new Date()
var monthList=["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"]
var month=date.getMonth()
var monthName=monthList[month]
alert("Current Month is: "+monthName)

// 3. Write a program that alerts the first 3 letters of the current day. For example: "Sun" for Sunday.
var d=new Date()
var dayList=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
var day=d.getDay()
var dayName=dayList[day]
console.log("Today is: "+dayName);


// 4. Write a program that displays a message “It’s Fun day” if it’s Saturday or Sunday today.
var d=new Date()
var dayList=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
var day=d.getDay()
var dayName=dayList[day]
if (dayName=="Sat" || dayName=="Sun"){
    console.log("It’s Fun day")
}else{
    console.log("It's a working day")
}

// 5. Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month, else show “Last days of the month”.
var d = new Date()
var date=d.getDate()
console.log(date)
if (date<16){
    console.log("First fifteen days of the month")
}else{
    console.log("Last days of the month");
    
}

// 6. Write a program that determines the minutes since midnight, Jan 1, 1970 
// and assigns it to a variable. Use any variable you like to represent the Date object.
var d= new Date()
console.log("Current date: "+d)
var inMilliSeconds=d.getTime()
console.log("Elapsed milliseconds since January 1, 1970: " +inMilliSeconds)
var inMinutes=(inMilliSeconds/10000)/(60)
console.log("Elapsed minutes since January 1, 1970: "+inMinutes)


// 7. Write a program that tests whether it's before noon and alert “It’s AM”, else alert “It’s PM”.

var timeOfDay=d.getHours()
if (timeOfDay<12){
    console.log("It’s AM")
}else{"It’s PM"}
// 8. Write a program that creates a Date object for the last day of the last month of 2020 
// and assigns it to a variable named laterDate.
var laterDate=new Date("December 31, 2020")
console.log("Later Date: "+laterDate)

// 9. Create a date object of the starting date of Ramadan (June 18, 2015), 
// and alert the number of days passed since 1st Ramadan.
var laterDate=new Date("June 18, 2015")
var now= new Date()
var dayPassed=Math.round((now-laterDate)/(1000*60*60*24))
console.log(dayPassed+ " days have passed since 1 Ramadan, 2015")

// 10. Write a program that displays in your browser the seconds that elapsed 
// between the reference date and the beginning of 2015.
var before=new Date("January 1, 2015")
var now=new Date()
var difference=(now-before)/1000
console.log("On reference date "+ before+", "+ difference +" seconds have passed since the beignning of 2015")

// 11. Create a Date object for the current date and time. Extract the hours, 
// reset the date object one hour ahead, and display it in your browser.
var d=new Date()
console.log("Current date: "+d)
var hour=d.getHours()+1
d.setHours(hour)
console.log("1 hour ago, it was : "+d)
// 12. Write a program that creates a Date object and shows the date in an alert box 
// that is reset to 100 years back.
var d=new Date()
console.log("Current date: "+d)
var year=d.getFullYear()-100
d.setFullYear(year)
console.log("100 years back, the time was : "+d);


// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var d=new Date()
var userAge=parseInt(prompt("whats you age? "))
console.log("Your age is: "+userAge)
var year=d.getFullYear()-userAge
console.log("Your birth year is : "+year);

// 14. Write a program to generate your K-Electric bill in your browser. 
// All the amounts should be rounded to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of Units
// d. Charges per Unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Note:
// Net Amount Payable = Number of Units × Charges per Unit
// Gross Amount Payable = Net Amount + Late Payment Surcharge
console.log("K-Electric")
var customerName="ABC"
var month="Feburary"
var numOfunits=410
var charPerUnit=16
var netAmount=numOfunits*charPerUnit
var latePaySurcharge=350
var grossPay=netAmount+latePaySurcharge
console.log("Customer Name: "+customerName);
console.log("Current Month: "+month);
console.log("Number of Units: "+numOfunits);
console.log("Charges per Unit: "+charPerUnit);
console.log("Net Amount Payable (within Due Date): "+netAmount.toFixed(2));
console.log("Late Payment Surcharge: "+latePaySurcharge);
console.log("Gross Amount Payable: "+grossPay.toFixed(2));

