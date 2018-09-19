// uuid function call
uuidv4()

// get saved todos
const todos = getSavedTodos()

// create filters object
const filters = {
    searchText: '',
    hideCompleted: false
}

// render filtered todos
renderTodos(todos, filters)


// ***App event listeners***

// event listener for search box
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// event listener for creating new todo submit button
document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todo.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    
    e.target.elements.todo.value = ''
})

// event listener for hide completed check box
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)   
})

