let todoItems = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let index = 0; index < 3; index++) {

    const todo = {
        id: index,
        id2: Date.now(0),
        text: "jakis tekst",
        price: getRandomInt(10, 20),
        checked: false
    };
    todoItems.push(todo);

}



const index = todoItems.findIndex(item => item.id === 2)
console.log('index:', index);

console.log('todoItems:', todoItems)

todoItems = todoItems.filter(item => item.id !== index);

console.log('todoItems:', todoItems)


// let smallprice = todoItems.filter(item => item.price > 15);
// smallprice