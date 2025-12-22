function renderTodos(list) {
    const container = document.querySelector("#todo-list");
    container.innerHTML = "";

    list.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("task");
        if (item.done) li.classList.add("done");

        li.innerHTML = `
            <span>${item.text}</span>
            <span class="checkmark">${item.done ? "✔️" : ""}</span>
        `;

        li.onclick = () => {
            item.done = !item.done;
            renderTodos(todos);
        };

        container.appendChild(li);
    });
}

let todos = [];

function addTodo(text) {
    // TODO:
    // - ignorar strings vacíos
    // - añadir {text, done:false} al array
    
    if (text) {
    todos.push({text, done:false})
    }
    // - limpiar input
    // - volver a renderizar: renderTodos(todos)
    renderTodos(todos)
}


function filterDone() {
    const arrayDone = todos.filter(function (text) {
        return text.done 
    })

    renderTodos(arrayDone)
        // TODO: mostrar solo tareas con done === true
}

function filterPending() {
    const arrayPending = todos.filter(function (text) {
        return text.done === false
    })

    renderTodos(arrayPending)
    // TODO: mostrar solo tareas con done === false
}

function showAll() {
    renderTodos(todos);
}
