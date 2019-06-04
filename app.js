// Define UI Variables
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const taskinput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

// Load all the Event Listeners
loadEventListerns();

function loadEventListerns() {
  // Add Task event
  form.addEventListener('submit', addTask);
  // Remove Task
  tasklist.addEventListener('click', removeTask);

  // Clear All Tasks
  clearBtn.addEventListener('click', clearTask);

  // Filter Task
  filter.addEventListener('keyup', filterTask);
}

// addTask
function addTask(e) {
  if (taskinput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add Class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskinput.value));
  // create new link element
  const link = document.createElement('a');
  //Add Class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  tasklist.appendChild(li);

  // clear input
  taskinput.value = '';
  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure ?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear All Tasks
function clearTask() {
  //tasklist.innerHTML = '';

  // faster
  while (tasklist.firstChild) {
    tasklist.removeChild(tasklist.firstChild);
  }
}

// Filter Task
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
