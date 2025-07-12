var task=document.getElementById("field").value

var doneCount = 0;
var cancelCount = 0;
var count=0

array=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','s','r','t','u','v','w','x','y','z']

function addTask(task){
    var hasLetter = array.some(letter => task.toLowerCase().includes(letter));
    if (hasLetter){
    var taskCode= `
    <div class='user_task'>
      <h2 class='task_index'>Task ${count+1}:</h2>
      <p>${task}</p>
      <div id='choose'>
        <div id='done' onclick='done(this)'><i class='fa-solid fa-check'></i></div>
        <div id='cancel' onclick='cancel(this)'><i class='fa-solid fa-x'></i></div>
      </div>
    </div>
  `;
    var taskCreate=document.getElementById("tasks")
    taskCreate.innerHTML+=taskCode
    var empty= document.getElementById("field")
    empty.value=""
    count+=1
    var counterChange=document.getElementById("task_num")
    var countStr="Current Task: "
    counterChange.innerHTML=countStr + count
    return;
    }
    
}

function done(element){
    var taskDiv = element.closest(".user_task");
    taskDiv.remove();
    doneCount+=1
    var counterChange=document.getElementById("task_done")
    var countStr="Done Task: "
    counterChange.innerHTML=countStr + doneCount

    count-=1
    var counterChange=document.getElementById("task_num")
    var countStr="Current Task: "
    counterChange.innerHTML=countStr + count

}

function cancel(element){
    var taskDiv = element.closest(".user_task");
    taskDiv.remove();
    cancelCount+=1
    var counterChange=document.getElementById("task_cancel")
    var countStr="Cancel Task: "
    counterChange.innerHTML=countStr + cancelCount

    count-=1
    var counterChange=document.getElementById("task_num")
    var countStr="Current Task: "
    counterChange.innerHTML=countStr + count

}
