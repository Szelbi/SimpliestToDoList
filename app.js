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

    // li
    let todoItem = document.createElement('li');
    todoItem.classList.add("todo-item");
    todoList.appendChild(todoItem);

    // input 
    let todoValue = document.createElement('input');
    todoValue.classList.add("todo-value");
    todoValue.value = "123qwe";
    todoItem.appendChild(todoValue);

    // button Done
    let doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    doneButton.classList.add('todo-btn', 'todo-btn-done');
    todoItem.appendChild(doneButton);

    // button Remove
    let removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    removeButton.classList.add('todo-btn', 'todo-btn-remove');
    todoItem.appendChild(removeButton);


}