document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const taskCount = document.getElementById("taskCount");
    const removeCheckedButton = document.getElementById("removeChecked");

    let tasks = [];

    function updateTaskCount() {
        let doneCount = tasks.filter(task => task.done).length;
        taskCount.textContent = `${doneCount} of ${tasks.length} tasks done`;
    }

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");

            const taskContent = document.createElement("div");
            taskContent.classList.add("task-content");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.done;
            checkbox.addEventListener("change", () => {
                tasks[index].done = checkbox.checked;
                renderTasks();
            });

            const taskText = document.createElement("span");
            taskText.textContent = task.text;
            taskText.className = task.done ? "completed" : "";

            taskContent.appendChild(checkbox);
            taskContent.appendChild(taskText);

            const buttonsDiv = document.createElement("div");
            buttonsDiv.classList.add("buttons");

            const editButton = document.createElement("button");
            editButton.textContent = "✏️";
            editButton.classList.add("edit-btn");
            editButton.addEventListener("click", () => {
                editTask(index, taskText);
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("delete-btn");
            deleteButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                renderTasks();
            });

            buttonsDiv.appendChild(editButton);
            buttonsDiv.appendChild(deleteButton);

            li.appendChild(taskContent);
            li.appendChild(buttonsDiv);
            taskList.appendChild(li);
        });

        updateTaskCount();
    }

    function editTask(index, taskText) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = tasks[index].text;
        input.classList.add("edit-input");

        input.addEventListener("blur", () => {
            saveEdit(index, input);
        });

        input.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                saveEdit(index, input);
            }
        });

        taskText.replaceWith(input);
        input.focus();
    }

    function saveEdit(index, input) {
        if (input.value.trim() !== "") {
            tasks[index].text = input.value.trim();
        }
        renderTasks();
    }

    addTaskButton.addEventListener("click", () => {
        if (taskInput.value.trim() !== "") {
            tasks.push({ text: taskInput.value, done: false });
            taskInput.value = "";
            renderTasks();
        }
    });

    removeCheckedButton.addEventListener("click", () => {
        tasks = tasks.filter(task => !task.done);
        renderTasks();
    });

    renderTasks();
});