//Assignment 1
var arr=[[],[],[]];

//Assignmenrt 2
var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

//Assignment 3
var count=0;
for(var i=0;i<10;i++){
    count++;
    document.write(count+"<br>");
    document.write("<br>");
}

//Assignment 4
var num=parseInt(prompt("Enter a number to show its multiplication table"));
var table=parseInt(prompt("Enter the length of multiplication table"));
for(var i=1;i<=table;i++){
    document.write(num+" x "+i+" = "+(num*i)+"<br>");
}

//Assignment 5
var fruits=["apple","banana","mango","orange","strawberry"];
for(var i=0;i<fruits.length;i++){
    document.write(fruits[i]+"<br>");
}
for(var i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

//Assignment 6
var numbers=[1,2,3,4,5,6,7,8,9,10];
document.write("Counting: ");
for(var i=0;i<numbers.length;i++){
    document.write(numbers[i]+", ");
}
document.write("<br>Reverse Counting: ");
for(var i=numbers.length-1;i>=0;i--){
    document.write(numbers[i]+", ");
}
document.write("<br>Even: ");
for(var i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        document.write(numbers[i]+", ");
    }
}
document.write("<br>Odd: ");
for(var i=0;i<numbers.length;i++){
    if(numbers[i]%2!==0){
        document.write(numbers[i]+", ");
    }
}
document.write("<br>Series: ");
for(var i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        document.write(numbers[i]+"k, ");
    }
}
document.write("<br>");

//Assignment 7
var bakery=["cake","apple pie","cookie","chips","patties"];
var searchItem=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var found=false;
for(var i=0;i<bakery.length;i++){
    if(bakery[i].toLowerCase() === searchItem.toLowerCase()){
        document.write(searchItem+" is available at index "+i+" in our bakery.<br>");
        found=true;
        break;
    }
}
if(!found){
    document.write("We are sorry. "+searchItem+" is not available in our bakery.<br>");
}

//Assignment 8
var largestNumber=[24,53,78,91,12];
var max=largestNumber[0];
for(var i=1;i<largestNumber.length;i++){
    if(largestNumber[i] > max){
        max = largestNumber[i];
    }
}
document.write("Array items: "+largestNumber+"<br>");
document.write("The largest number is "+max+"<br>");

//Assignment 9 
var smallestNumber=[24,53,78,91,12];
var min=smallestNumber[0];
for(var i=1;i<smallestNumber.length;i++){
    if(smallestNumber[i] < min){
        min = smallestNumber[i];
    }
}
document.write("Array items: "+smallestNumber+"<br>");
document.write("The smallest number is "+min+"<br>");

//Assignment 10
var multiplesOfFive=[];
for(var i=1;i<=20;i++){
    multiplesOfFive.push(i * 5);
}
document.write("Multiples of 5: "+multiplesOfFive.join(", ")+"<br>");

