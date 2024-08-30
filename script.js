function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    newTask.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        <input type="checkbox" onclick="toggleComplete(this)">
    `;

    taskList.appendChild(newTask);
    taskInput.value = '';
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}

function toggleComplete(checkbox) {
    const task = checkbox.parentElement;
    task.classList.toggle('completed');
}

function editTask(button) {
    const task = button.parentElement;
    const taskTextElement = task.querySelector('.task-text');
    const newTaskText = prompt('Edit your task:', taskTextElement.textContent);
    
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskTextElement.textContent = newTaskText.trim();
    }
}
