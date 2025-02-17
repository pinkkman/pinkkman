let tasks = [];
function addTask() {
    const task = document.getElementById('task').value;
    const deadline = document.getElementById('deadline').value;
    const status = document.getElementById('status').value;
    if (task && deadline) {
        tasks.push({ task, deadline, status });
        displayTasks();
    }
}
function displayTasks() {
    const tableBody = document.getElementById('taskTableBody');
    tableBody.innerHTML = '';
    tasks.forEach((task, index) => {
        const row = `<tr>
            <td>${task.task}</td>
            <td>${task.deadline}</td>
            <td>
                <select onchange="updateStatus(${index}, this.value)">
                    <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
            </td>
            <td><button class="edit-btn" onclick="editTask(${index})">Edit</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}
function editTask(index) {
    const newTask = prompt("Edit Task", tasks[index].task);
    const newDeadline = prompt("Edit Deadline", tasks[index].deadline);
    if (newTask && newDeadline) {
        tasks[index].task = newTask;
        tasks[index].deadline = newDeadline;
        displayTasks();
    }
}
function updateStatus(index, newStatus) {
    tasks[index].status = newStatus;
}