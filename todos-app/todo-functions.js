// function to get saved todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }    
}

// save todos to localStorage and render todos
const saveTodos = (todo) => {
    localStorage.setItem('todos', JSON.stringify(todo))
}

// toggle value for a completed todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id )
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    
}

// render application todos based on filters
const renderTodos = function (_todos, _filters) {
  
    // create filtered array by applying filters object
    const filteredTodos = _todos.filter((_todos) => {
        const searchTextMatch = _todos.text.toLowerCase().includes(_filters.searchText.toLowerCase())
        const hideCompletedmatch = !_filters.hideCompleted || !_todos.completed
        return  searchTextMatch && hideCompletedmatch
    })

    const incompleteTodos = filteredTodos.filter((_todos) => !_todos.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(getSummaryDOM(incompleteTodos))

    filteredTodos.forEach((_todos) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(_todos))
    })
}

// get DOM elements for an individual todo
const generateTodoDOM = (_todos) => {
    const todoDiv = document.createElement('div')
    const input = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // create checkbox
    input.setAttribute('type', 'checkbox', 'checked')
    input.checked = _todos.completed
    todoDiv.appendChild(input)
    input.addEventListener('change', () => {
        toggleTodo(_todos.id)
        saveTodos(_todos)
        renderTodos(todos, filters)
    })
    
    // create todo text
    todoText.textContent = _todos.text
    todoDiv.appendChild(todoText)

    // create remove button
    removeButton.textContent = 'Remove'
    todoDiv.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(_todos.id)  
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    return todoDiv
}

// get DOM elements for todo summary
const getSummaryDOM = (incompleteTodos) => {
    const newMessage = document.createElement('h2')
    newMessage.textContent = `You have ${incompleteTodos.length} todos left to complete`
    return newMessage
}