function addTodo(e) {
    e.preventDefault(); // Prevent form submission from reloading the page
    const input = document.getElementById('todo-input');
    const newTodo = input.value.trim(); // Get the value from the input and trim any whitespace

    if (newTodo) {
        // Make a POST request to the CreateTodo function locally
        fetch('http://localhost:7071/api/CreateTodo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: newTodo }) // Send the new todo text as JSON
        })
        .then(response => response.json())
        .then(data => {
            input.value = ''; // Clear the input field after adding the todo
            getTodos(); // Refresh the todo list
        })
        .catch(error => console.error('Error adding todo:', error));
    }
}

// Get and display all todo items
function getTodos() {
    // Make a GET request to the GetTodos function locally
    fetch('http://localhost:7071/api/GetTodos')
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = ''; // Clear the current list

            // Check if todos exist and are an array
            if (Array.isArray(todos) && todos.length) {
                todos.forEach(todo => {
                    const li = document.createElement('li');
                    li.dataset.id = todo.id;
                    li.className = todo.completed ? 'completed' : '';
                    li.innerHTML = `
                        <span>${todo.text}</span>
                        <button class="complete-btn">Complete</button>
                        <button class="delete-btn">Delete</button>
                    `;
                    todoList.appendChild(li);
                });
            } else {
                // Display a message if no todos are available
                todoList.innerHTML = '<li>No todos found.</li>';
            }
        })
        .catch(error => console.error('Error fetching todos:', error));
}

// Modify or delete a todo item
function modifyTodo(e) {
    const id = e.target.parentElement.dataset.id;

    if (e.target.classList.contains('complete-btn')) {
        // Make a PUT request to the UpdateTodo function locally
        fetch(`http://localhost:7071/api/UpdateTodo/${id}`, {
            method: 'PUT'
        })
        .then(() => getTodos()) // Refresh the todo list after updating
        .catch(error => console.error('Error updating todo:', error));
    }

    if (e.target.classList.contains('delete-btn')) {
        // Make a DELETE request to the DeleteTodo function locally
        fetch(`http://localhost:7071/api/DeleteTodo/${id}`, {
            method: 'DELETE'
        })
        .then(() => getTodos()) // Refresh the todo list after deleting
        .catch(error => console.error('Error deleting todo:', error));
    }
}

// Fetch the initial list of todos when the page loads
getTodos();

// Add event listeners for the todo form and list
document.getElementById('todo-form').addEventListener('submit', addTodo);
document.getElementById('todo-list').addEventListener('click', modifyTodo);
