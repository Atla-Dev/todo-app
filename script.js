
function addTodo() {
    const taskInput = document.querySelector('#task-input input');
    const taskValue = taskInput.value.trim();

    if(taskValue === '') {
        alert('Please enter a task');
    } else {
        const taskContainer = document.querySelector('#task-container');
        
        taskContainer.innerHTML += `
        <div class="task">
            <span class="task-name">
                ${taskValue}
            </span>
            <button class="delete" onclick="deleteTask(event)">
                <i class="far fa-trash-alt"></i>
            </button>
            <button class="save" onclick="saveTask()">
                <i class="far fa-save"></i>
            </button>
            
        </div>
        `;	
        alert('Task has been added');
    }

}

function saveTask () {
    const taskContainer = document.querySelector('#task-container');
    const tasks = taskContainer.innerHTML;
    localStorage.setItem('tasks', taskContainer.innerHTML);
    alert('Task saved successfully');
}

function saveAllTasks () {
    const taskContainer = document.querySelector('#task-container');
    const tasks = taskContainer.innerHTML;
    localStorage.setItem('tasks', taskContainer.innerHTML);
}

function getTasks() {
    const taskContainer = document.querySelector('#task-container');
    taskContainer.innerHTML = localStorage.getItem('tasks');
}

function deleteTask(event) {
    const task = event.target.parentElement;
    const taskContainer = document.querySelector('#task-container');
    task.remove();
    saveAllTasks();
    
}
getTasks();