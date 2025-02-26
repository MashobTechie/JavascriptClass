
const addTaskBTN = document.getElementById('addTaskBtn');
addTaskBTN.addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');

    const taskList = document.getElementById('taskList');

    let taskInputValue = taskInput.value;
    // Log the input value to the console
    // console.log(taskInputValue);

    // To verify if the input is filled before adding the task
    if (!taskInputValue) {
        alert(`Your task input must be filled`);
        return;

    }


    // Create a new list item
    const listItem = document.createElement('li');
    // Make the text content of the list item to be the logged vaue of the taskInput
    listItem.textContent = taskInputValue;
    // Render the element to the DOM
    taskList.appendChild(listItem);

    // Clear the input after adding the task
    taskInput.value = '';


    // Create a delete button with the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Task';
    // Render the delete button to the DOM
    listItem.appendChild(deleteButton);

    // Function of delete
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    // Style the delete button
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.color = 'white';
    deleteButton.style.padding = '5px';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '5px';


});

