
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

// To save /set item : 
localStorage.setItem('task', 'Go to bed')
// It'll have two props in key/value pair.
// the key (task) and the value (teh task value itself)

/// To get/retrieve: It'll be one which is the key you used to save it
localStorage.getItem('task')

// To remove one item
localStorage.removeItem('task')

localStorage.setItem('task1', 'Go to bed')
localStorage.setItem('task2', 'Go to spa')
localStorage.setItem('task3', 'Go to work')


// Tpo clear all items in the local storage
localStorage.clear()




// Assignment 
// Add local storage to your to do list