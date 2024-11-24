// Select necessary DOM elements
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Ensure input is not empty
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Prevent duplicate tasks
  const existingTasks = [...taskList.querySelectorAll('.task span:first-child')];
  if (existingTasks.some(task => task.textContent === taskText)) {
    alert('Task already exists!');
    return;
  }

  // Create task element
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task', 'personal'); // Default category: personal

  const taskName = document.createElement('span');
  taskName.textContent = taskText;

  const taskTime = document.createElement('span');
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  taskTime.textContent = currentTime;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.onclick = () => taskDiv.remove();

  taskDiv.appendChild(taskName);
  taskDiv.appendChild(taskTime);
  taskDiv.appendChild(deleteButton);

  // Append task to the list
  taskList.appendChild(taskDiv);

  // Clear input field
  taskInput.value = '';

  // Success message
  alert('Task added successfully!');
}

// Add task on pressing Enter key
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
