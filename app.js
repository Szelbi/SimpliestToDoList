//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.getElementsByClassName("radiobtn-input");


//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkOrRemove);
for (i = 0; i < filterOption.length; i++) {
    filterOption[i].addEventListener('click', filterTodo);
}



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

    console.log(todoInput.value);

    // Add to local storage
    saveToLocalStorage(todoInput.value)

    // clear Input value
    todoInput.value = '';
}


function checkOrRemove(event) {

    let item = event.target;
    let todo = item.parentElement;

    // delete todo
    if (item.classList[1] === 'todo-btn-remove') {
        todo.classList.toggle('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
        // removing value from Local Storage
        removeTodos(todo.children[0].value);
    }

    // mark todo as done
    if (item.classList[1] === 'todo-btn-done') {
        todo.classList.toggle('completed');
    }
}


function filterTodo(e) {
    const todos = todoList.childNodes;
    // console.log(todos);
    console.log(e.target.value);

    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "done":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
            case "todo":
                console.log("todo!!");
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function checkLocalStorage(arrayKey) {

    //Check if there is any todos already set
    if (localStorage.getItem(arrayKey) === null) {
        return [];
    } else {
        return JSON.parse(localStorage.getItem(arrayKey))
    }

}

function saveToLocalStorage(todo) {

    let todos;
    todos = checkLocalStorage('todoitems');
    todos.push(todo);
    localStorage.setItem('todoitems', toJSON(todos));


    var datas = [[1, 2], 2, 3];
    localStorage.setItem('datas', toJSON(datas));

    // alert(checkLocalStorage('datas'));

}

function getTodos() {

    let todos;

    todos = checkLocalStorage('todoitems');

    todos.forEach(function (todo) {

        // li
        let todoItem = document.createElement('li');
        todoItem.classList.add("todo-item");
        todoList.appendChild(todoItem);

        // input 
        let todoValue = document.createElement('input');
        todoValue.classList.add("todo-value");
        todoValue.value = todo;
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
    })
}

function removeTodos(todoValue) {

    let todos;
    todos = checkLocalStorage('todoitems');

    // get index of removed value
    const todoIndex = todos.indexOf(todoValue);

    // remove array element of given index
    todos.splice(todoIndex, 1);

    // set new array into local storage
    localStorage.setItem('todoitems', toJSON(todos));

    alert(checkLocalStorage('todos'));

}


function toJSON(array) {
    return JSON.stringify(array);
}