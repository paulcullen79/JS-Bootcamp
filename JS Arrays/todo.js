//create todo list with 5 items

const todo = [{
    text: 'Laundry',
    completed: true
}, 
{
    text: 'Grocery shopping',
    completed: false
}, 
{
    text: 'Call home',
    completed: false
},
{   
    text: 'Meet Jen', 
    completed: true
},
{
    text: 'Feed the dog',
    completed: false
}]

//todo.splice(3, 1)
//todo.push('Go for dinner')
//todo.shift()


//console.log(`You have ${todo.length} things to do!`)

//todo.forEach(function(item, index) {
//    console.log(`${index + 1}: ${todo.item}`)
//})
//console.log(todo)

const deleteToDo = function(todo, todoText) {
    const index = todo.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
        
    })
    if (index > -1) {
        todo.splice(index, 1)
    }
}

//deleteToDo(todo, 'feed the dog')

const getTodosNotCompleted = function(todo) {
    return todo.filter(function (todo) {
        return todo.completed === false
    })
}
//console.log(getTodosNotCompleted(todo))

const sortTodos = function(todo) {
    todo.sort(function (a, b) {
        if (a.completed > b.completed) {
            return 1
        } else if (b.completed > a.completed) {
            return -1
        } else {
            return 0
        }
    })
}

sortTodos(todo)
console.log(todo)