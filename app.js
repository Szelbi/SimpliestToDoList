//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");


//Event Listeners
todoButton.addEventListener('click', addTodo)


//Functions
function addTodo(event) {
    //Prevent site from refreshing
    event.preventDefault();

    // div
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");
    todoList.appendChild(todoDiv);

    // li
    let newTodo = document.createElement('li');
    newTodo.classList.add("input-container");
    todoDiv.appendChild(newTodo);

    // input 
    let newInput = document.createElement('input');
    newInput.classList.add("todo-input");
    todoDiv.appendChild(newInput);

    // button Done
    let doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    doneButton.classList.add('todo-btn', 'todo-btn-done');
    todoDiv.appendChild(doneButton);

    // button Remove
    let removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    removeButton.classList.add('todo-btn', 'todo-btn-remove');
    todoDiv.appendChild(removeButton);


}