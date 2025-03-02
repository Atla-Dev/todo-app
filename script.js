

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
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;	

        let currentTasks = document.querySelectorAll('.delete');
        for(let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }

}