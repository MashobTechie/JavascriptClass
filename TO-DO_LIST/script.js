const addTaskBTN = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

addTaskBTN.addEventListener('click', () => {
    let taskInputValue = taskInput.value.trim();

    if (!taskInputValue) {
        alert(`Your task input must be filled`);
        return;
    }

    addTask(taskInputValue);
    saveTask(taskInputValue);
    taskInput.value = ''; // Clear input after adding task
});

// Function to add task to UI
function addTask(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Task';

    // Delete function
    deleteButton.addEventListener('click', () => {
        listItem.remove();
        removeTask(taskText);
    });

    // Style the delete button
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.color = 'white';
    deleteButton.style.padding = '5px';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '5px';

    // Append delete button to task item
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}

// Save task to localStorage
function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task));
}

// Remove task from localStorage
function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
