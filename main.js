document.addEventListener('DOMContentLoaded', function () {
    const taskContainer = document.getElementById('task-container');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskContainer.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            if (task.completed) {
                taskElement.classList.add('completed');
            }
            taskElement.innerHTML = `
                <h3>${task.name}</h3>
                <p>Deadline: ${task.deadline}</p>
                <div class="task-buttons">
                    <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            taskElement.querySelector('.complete-btn').addEventListener('click', function () {
                tasks[index].completed = !tasks[index].completed;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                loadTasks();
            });

            taskElement.querySelector('.edit-btn').addEventListener('click', function () {
                const newName = prompt('Edit task name:', task.name);
                const newDeadline = prompt('Edit task deadline:', task.deadline);
                if (newName && newDeadline) {
                    tasks[index].name = newName;
                    tasks[index].deadline = newDeadline;
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    loadTasks();
                }
            });

            taskElement.querySelector('.delete-btn').addEventListener('click', function () {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                loadTasks();
            });

            taskContainer.appendChild(taskElement);
        });
    }

    loadTasks();
});