// 1. Write a function that takes an array of numbers and returns their sum.
var array=[25,35,47]
function total(array){
    sum=0

    for (var i=0;i<=array.length-1;i++){
        sum+=array[i]
    }
    return sum
}
var sumTotal=total(array)
console.log("The sum of the array is: "+sumTotal)

// 2. Write a function that reverses a string.
var str="hello"
function reverses(str){
    var reverse=""

    for (var i=str.length-1;i>=0;i--){
        reverse+=str.charAt(i)
    }
    
    return reverse
}
var myReverse=reverses(str)
console.log("The reverse of the str is: " +myReverse)

// 3. Write a function that finds the largest number in an array.
var array=[57,899,467,23,1]
function largestNum(array){
    var largest=array[0]

    for ( var i=0;i<array.length;i++){
        if (array[i]>largest){
            largest=array[i]
        }
    }
    return largest
}

var numLarge=largestNum(array)
console.log("The largest number in the array is: "+numLarge)
// 4. Write a function that counts the number of vowels in a string.
var str="hello"

function vowelCheck(str){
    var vowels=["a","e","i","o","U"]
    count=0
    for(var i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase())){
            count+=1
        }
    }
    return count
}
var counting=vowelCheck(str)
console.log("Number of vowels in the str is: "+ counting);

// 5. Write a function that removes duplicates from an array.
var array=["apple","mango","apple"]
function duplicateRemover(array){
    unique=[]
    for (var i=0;i<array.length-1;i++){
        if (!unique.includes(array[i])){
            unique.push(array[i])
        }
    }
    return unique
}

var duplicates=duplicateRemover(array)
console.log("Here is the corrected array: "+duplicates)
// 6. Write a function that capitalizes the first letter of each word in a sentence.
var str = "hello how are you"
function capitalizer(str){
    word=str.split(" ")
    for (var i=0 ; i<word.length;i++){
        word[i]=word[i][0].toUpperCase()+word[i].slice(1)
  
    }
    sentence=word.join(" ")
    return sentence

}

var capitalization=capitalizer(str)
console.log("This is the capitalize sentence : " +capitalization)