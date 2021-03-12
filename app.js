//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.getElementsByClassName("radiobtn-input");


//Event Listeners
document.addEventListener('DOMContentLoaded', render);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkOrRemove);
for (i = 0; i < filterOption.length; i++) {
    filterOption[i].addEventListener('click', filterTodo);
}


let todoItems = [];


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
    let todoValue = todo.children[0].value;

    // delete todo
    if (item.classList[1] === 'todo-btn-remove') {
        todo.classList.toggle('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
        // removing value from Local Storage
        removeTodo(todoValue);
    }

    // mark todo as done
    if (item.classList[1] === 'todo-btn-done') {
        todo.classList.toggle('completed');
        toggleDone(todoValue);
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

function saveToLocalStorage(text) {

    todoItems = checkLocalStorage('todoitems');
    // todos.push(todo);

    let todo = {
        text: text,
        id: Date.now(),
        checked: false,
    };

    todoItems.push(todo);

    localStorage.setItem('todoitems', toJSON(todoItems));

    // tests

    // var arr = [{ id: 0, type: 1 }, { id: 1, type: 1 }, { id: 2, type: 2 }];
    // console.log([1, arr]);
    // // var datas = [[1, 2], 2, 3];

    // var filtered = arr.filter(function (item) {
    //     return item.type !== 1;
    // });
    // console.log([2, arr]);
    // localStorage.setItem('arr', toJSON(arr));

    // alert(checkLocalStorage('datas'));

}

function render() {

    todoItems = checkLocalStorage('todoitems');

    todoItems.forEach(function (todo) {

        // li
        let todoItem = document.createElement('li');
        todoItem.classList.add("todo-item");
        if (todo.checked)
            todoItem.classList.toggle('completed');
        todoList.appendChild(todoItem);

        // input 
        let todoValue = document.createElement('input');
        todoValue.classList.add("todo-value");
        todoValue.value = todo.text;
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

function removeTodo(todoValue) {

    todos = checkLocalStorage('todoitems');

    //removing object from array
    todoItems = todoItems.filter(item => item.text !== todoValue);

    // set new array into local storage
    localStorage.setItem('todoitems', toJSON(todoItems));
}

function toggleDone(todoValue) {

    todos = checkLocalStorage('todoitems');

    let index = todoItems.findIndex(item => item.text === todoValue);

    todoItems[index].checked = !todoItems[index].checked;

    // set new array into local storage
    localStorage.setItem('todoitems', toJSON(todoItems));

}


function alertObj(object) {
    alert(JSON.stringify(object, null, 4));
}


function toJSON(array) {
    return JSON.stringify(array);
}