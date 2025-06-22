// question answer loop
var questions="Enter number"
var even=[]
var odd=[]
var Answer=[]

for (var i=0; i<10;i++){
    Answer[i]=prompt (questions+" "+[i])
    var num =Number( Answer[i])
    if (num %2===0){
        even.push(num)
    }
    else if (num %2!==0){
        odd.push(num)
    }
    else{
        alert( "given value is invalid")
}

}
alert("this is the even number"+" " +even.join()+", "+" this is the odd number" +odd.join(",")+"")