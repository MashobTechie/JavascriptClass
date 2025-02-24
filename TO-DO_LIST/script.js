document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Add task function
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return; // Prevent adding empty tasks

        // Create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Toggle completion on click
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents toggling completion when deleting
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = ""; // Clear input field
    };

    // Add task on button click
    addTaskBtn.addEventListener("click", addTask);

    // Add task on Enter key press
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });
});
