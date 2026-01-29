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

    // --- CONCEPT: createElement() ---
    // Create the main list item (li) container
    const li = document.createElement('li');

    // Create a span to hold the text (so we can edit just the text later)
    const span = document.createElement('span');
    span.className = "task-text";

    // --- CONCEPT: innerText ---
    // Set the text of the span to the user's input
    span.innerText = taskValue;

    // Create Edit Button
    const editBtn = document.createElement('button');
    editBtn.innerText = "Edit";
    editBtn.className = "action-btn edit-btn";

    // Create Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "action-btn delete-btn";

    // --- CONCEPT: appendChild() ---
    // Put the text, edit button, and delete button INSIDE the list item
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Put the new list item INSIDE the main ul list
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = "";

    // --- CONCEPT: addEventListener() for Delete ---
    deleteBtn.addEventListener('click', function () {
        // --- CONCEPT: remove() ---
        // Removes the specific list item from the DOM
        li.remove();
    });

    // --- CONCEPT: addEventListener() for Edit ---
    editBtn.addEventListener('click', function () {
        // Prompt user for new text
        const currentText = span.innerText;
        const newText = prompt("Edit your task:", currentText);

        // If user entered text and didn't hit cancel
        if (newText !== null && newText.trim() !== "") {
            // Update the text dynamically
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
