// --- JavaScript Logic ---

// 1. Select DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskValue = taskInput.value;

    // Simple validation to check if input is empty
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create the main list item (li) container
    const li = document.createElement('li');

    // Create a span to hold the text (so we can edit just the text later)
    const span = document.createElement('span');
    span.className = "task-text";
    span.innerText = taskValue;

    // Container for buttons
    const btnContainer = document.createElement('div');
    btnContainer.className = "btn-container";

    // Create Edit Button
    const editBtn = document.createElement('button');
    editBtn.innerText = "Edit";
    editBtn.className = "action-btn edit-btn";

    // Create Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "action-btn delete-btn";

    // Append buttons to container
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    // Append text and button container to list item
    li.appendChild(span);
    li.appendChild(btnContainer);

    // Put the new list item INSIDE the main ul list
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = "";

    // Delete functionality
    deleteBtn.addEventListener('click', function () {
        li.style.animation = "slideOut 0.3s forwards";
        li.addEventListener('animationend', function () {
            li.remove();
        });
    });

    // Edit functionality
    editBtn.addEventListener('click', function () {
        const currentText = span.innerText;
        const newText = prompt("Edit your task:", currentText);

        if (newText !== null && newText.trim() !== "") {
            span.innerText = newText;
        }
    });
}

// Add event listener to the main "Add Task" button
addBtn.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" key to add task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
