/*Flags*/
var doneCount = 0;
var cancelCount = 0;
var count = 0

/*storing value*/
todo_array = []


document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});


/*Task Creation*/
function addTask() {
  var task = document.getElementById("field").value
  if (!(task.trim() == "")) {
    count += 1
    task_num = count
    /*Editing todo div html*/
    var taskCode = `
  <div class='user_task' data-tasknum="${count}">
    <h2 class='task_index'>Task ${count}:</h2>
    <p class="task_p">${task}</p>
    <div id='choose'>
      <button type="button" class="custom_button" onclick="edit_appear(this)"><i class="fa-regular fa-pen-to-square"></i></button>
      <div id='done' onclick='done(this)'><i class='fa-solid fa-check'></i></div>
      <div id='cancel' onclick='cancel(this)'><i class='fa-solid fa-x'></i></div>
    </div>
  </div>
`;
    var taskCreate = document.getElementById("tasks")
    taskCreate.innerHTML += taskCode

    /*Emptying field div*/
    var empty = document.getElementById("field")
    empty.value = ""

    /*storing value*/

    todo_array.push({ title: task, id: count });

    /*Updating count*/
    var counterChange = document.getElementById("task_num")
    var countStr = "Current Task: "
    counterChange.innerHTML = countStr + count


    return task, count;
  }

}
/*Task Done*/
function done(element) {
  var taskDiv = element.closest(".user_task");
  var task_num = parseInt(taskDiv.getAttribute('data-tasknum'));
  // Remove from array
  for (var i = 0; i < todo_array.length; i++) {
    if (todo_array[i].id === task_num) {
      todo_array.splice(i, 1);
      break;
    }
  }


  taskDiv.remove();
  doneCount += 1
  var counterChange = document.getElementById("task_done")
  var countStr = "Done Task: "
  counterChange.innerHTML = countStr + doneCount


  count -= 1
  var counterChange = document.getElementById("task_num")
  var countStr = "Current Task: "
  counterChange.innerHTML = countStr + count
  reindexTasks();
}
/*Task Cancel*/
function cancel(element) {
  var taskDiv = element.closest(".user_task");
  var task_num = parseInt(taskDiv.getAttribute('data-tasknum'));
  // Remove from array
  for (var i = 0; i < todo_array.length; i++) {
    if (todo_array[i].id === task_num) {
      todo_array.splice(i, 1);
      break;
    }
  }

  taskDiv.remove();
  cancelCount += 1
  var counterChange = document.getElementById("task_cancel")
  var countStr = "Cancel Task: "
  counterChange.innerHTML = countStr + cancelCount


  count -= 1
  var counterChange = document.getElementById("task_num")
  var countStr = "Current Task: "
  counterChange.innerHTML = countStr + count
  reindexTasks();
}
/*Task Edit*/
function edit_appear(button) {
  var taskDiv = button.closest('.user_task');
  var task_num = taskDiv.getAttribute('data-tasknum');
  var taskText = taskDiv.querySelector('.task_p').innerText;
  taskDiv.outerHTML = `<div id="edit_bar" data-tasknum="${task_num}" data-tasktext="${encodeURIComponent(taskText)}">
    <input id="edit_box" type="text" value="${taskText}"></input>
    <div id="edit_button">
      <div id='done_edit' onclick="done_replace(this)"><i class='fa-solid fa-check'></i></div>
      <div id='cancel_edit' onclick="cancel_replace(this)"><i class='fa-solid fa-x'></i></div>
    </div>
  </div>`;
}
/*Task Edit Done*/
function done_replace(element) {
  var replace_html = element.closest('#edit_bar');
  var value = replace_html.querySelector('#edit_box').value;
  var task_num = replace_html.getAttribute('data-tasknum');
  replace_html.outerHTML = `<div class='user_task' data-tasknum="${task_num}">
      <h2 class='task_index'>Task ${task_num}:</h2>
      <p class="task_p">${value}</p>
      <div id='choose'>
        <button type="button" class="custom_button" onclick="edit_appear(this)"><i class="fa-regular fa-pen-to-square"></i></button>
        <div id='done' onclick='done(this)'><i class='fa-solid fa-check'></i></div>
        <div id='cancel' onclick='cancel(this)'><i class='fa-solid fa-x'></i></div>
      </div>
    </div>`;
  for (var i = 0; i < todo_array.length; i++) {
    if (todo_array[i].id === task_num) {
      todo_array[i].title = value;
      break;
    }
  }
}
/*Task Edit Cancel*/
function cancel_replace(element) {
  var replace_html = element.closest('#edit_bar');
  var task_num = parseInt(replace_html.getAttribute('data-tasknum'));
  var text = decodeURIComponent(replace_html.getAttribute('data-tasktext'));
  replace_html.outerHTML = `<div class='user_task' data-tasknum="${task_num}">
      <h2 class='task_index'>Task ${task_num}:</h2>
      <p class="task_p">${text}</p>
      <div id='choose'>
        <button type="button" class="custom_button" onclick="edit_appear(this)"><i class="fa-regular fa-pen-to-square"></i></button>
        <div id='done' onclick='done(this)'><i class='fa-solid fa-check'></i></div>
        <div id='cancel' onclick='cancel(this)'><i class='fa-solid fa-x'></i></div>
      </div>
    </div>`;
  console.log(todo_array);
}

function reindexTasks(todo_array) {
  var tasks = document.querySelectorAll('.user_task');


  for (var i = 0; i < tasks.length; i++) {
    var newNum = i + 1;
    tasks[i].setAttribute('data-tasknum', newNum);
    var h2 = tasks[i].querySelector('.task_index');
    if (h2) {
      h2.innerText = `Task ${newNum}:`;
    }
  }

  var newTodoArray = [];
  for (var i = 0; i < tasks.length; i++) {
    var taskElement = tasks[i];
    var taskText = taskElement.querySelector('.task_p').innerText;
    var newId = i + 1;

    newTodoArray.push({
      title: taskText,
      id: newId
    });

  }
  todo_array = newTodoArray
  console.log('Reindexed todo_array:', todo_array);
}
