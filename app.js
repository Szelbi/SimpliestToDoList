//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");


//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', checkOrRemove)



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
    todoValue.value = todoInput.value;
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

    // clear Input value
    todoInput.value = '';
}


function checkOrRemove(event) {
    console.log(event.target);

    let item = event.target;
    let todo = item.parentElement;

    // delete todo
    if (item.classList[1] === 'todo-btn-remove') {
        todo.classList.toggle('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
        // todo.remove();
    }

    // mark todo as done
    if (item.classList[1] === 'todo-btn-done') {
        todo.classList.toggle('completed');
    }
}