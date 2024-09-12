const apiUrl = 'http://localhost:5000/todos';

document.getElementById('todo-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
    });
    loadTodos();
});

async function loadTodos() {
    const response = await fetch(apiUrl);
    const todos = await response.json();
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach(todo => {
        const item = document.createElement('li');
        item.textContent = `${todo.title}: ${todo.description}`;
        list.appendChild(item);
    });
}

loadTodos();
 
