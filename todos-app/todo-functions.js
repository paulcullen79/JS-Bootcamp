// function to get saved todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }    
}

// save todos to localStorage and render todos
const saveTodos = function (todo) {
    localStorage.setItem('todos', JSON.stringify(todo))
}

// remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (_todos) {
        return _todos.id === id 

    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    
}

// render application todos based on filters
const renderTodos = function (_todos, _filters) {
  
    // create filtered array by applying filters object
    const filteredTodos = _todos.filter(function (_todos) {
        const searchTextMatch = _todos.text.toLowerCase().includes(_filters.searchText.toLowerCase())
        const hideCompletedmatch = !_filters.hideCompleted || !_todos.completed
        return  searchTextMatch && hideCompletedmatch
        console.log('here4')
    })

    const incompleteTodos = filteredTodos.filter(function (_todos) {
        return !_todos.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(getSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (_todos) {
        document.querySelector('#todos').appendChild(generateTodoDOM(_todos))
    })
}



// get DOM elements for an individual todo
const generateTodoDOM = function (_todos) {
    const todoDiv = document.createElement('div')
    const input = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // create checkbox
    input.setAttribute('type', 'checkbox')
    todoDiv.appendChild(input)
    
    // create todo text
    todoText.textContent = _todos.text
    todoDiv.appendChild(todoText)

    // create remove button
    removeButton.textContent = 'Remove'
    todoDiv.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        removeTodo(_todos.id)
        
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    return todoDiv
}



// get DOM elements for todo summary
const getSummaryDOM = function (incompleteTodos) {
    const newMessage = document.createElement('h2')
    newMessage.textContent = `You have ${incompleteTodos.length} todos left to complete`
    return newMessage
}