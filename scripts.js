document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("add-btn");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    addBtn.addEventListener("click", function() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            addTodoItem(todoText);
            todoInput.value = "";
        }
    });

    todoList.addEventListener("click", function(e) {
        if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
            toggleComplete(e.target);
        } else if (e.target.tagName === "BUTTON" && e.target.classList.contains("delete-btn")) {
            deleteTodoItem(e.target);
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);

        const text = document.createTextNode(todoText);
        li.appendChild(text);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    }

    function toggleComplete(checkbox) {
        const li = checkbox.parentElement;
        if (checkbox.checked) {
            li.classList.add("completed");
            li.style.order = 1;  
        } else {
            li.classList.remove("completed");
            li.style.order = 0;
        }
    }

    function deleteTodoItem(button) {
        const li = button.parentElement;
        li.remove();
    }
}
);
