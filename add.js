document.getElementById('add-task-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ name: taskName, deadline: taskDeadline, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    window.location.href = 'index.html';
});