let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");
let emptyMessage = document.getElementById("emptyMessage");

function addTask() {

    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task elements using DOM
    let li = document.createElement("li");
    li.className = "task";

    let span = document.createElement("span");
    span.className = "task-text";
    span.innerText = taskText;

    // Complete button
    let completeButton = document.createElement("button");
    completeButton.innerText = "✓ Done";
    completeButton.className = "complete-btn";

    completeButton.onclick = function () {
        span.classList.toggle("completed");
    };

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        li.remove();
        updateTaskCount();
    };

    let buttons = document.createElement("div");
    buttons.className = "task-buttons";

    buttons.appendChild(completeButton);
    buttons.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(buttons);

    taskList.appendChild(li);

    taskInput.value = "";

    updateTaskCount();
}


function updateTaskCount() {

    let count = taskList.children.length;

    taskCount.innerText = count;

    if (count === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}


// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});