document.addEventListener('DOMContentLoaded', () => {

    let userInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskBtn');
    const taskList = document.querySelector('#taskList');


    // add task
    const addTask = () => {
        let userInputText = userInput.value.trim();
        console.log(userInputText)

        if (!userInputText) {
            alert(`Your task input must be filled`)
            return;
        }

        // create the list item.
        const taskItem = document.createElement('li');
        taskItem.textContent = userInputText;

        // create a toggle for completion
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed')
        })

        // append the child(taskItem)
        taskList.appendChild(taskItem);


        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            taskItem.remove();
        });

        // append the child(deleteButton)
        taskItem.appendChild(deleteButton);
        userInput.value = '';

    }

    addTaskButton.addEventListener('click', addTask);


});