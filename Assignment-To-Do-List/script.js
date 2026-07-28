function addTask() {

    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");

    var span = document.createElement("span");
    span.innerText = task;

    span.onclick = function () {
        span.classList.toggle("completed");
    };

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}