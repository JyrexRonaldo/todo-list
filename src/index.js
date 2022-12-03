let projects = (function() {
    const _projects = [];

    const addProject = () => _projects.push([])

    const getProjects = () => _projects;

    const getProject = (index) => _projects[index];

    const removeProject = (index) => _projects.splice(index, 1);

    return {
        addProject,
        getProjects,
        getProject,
        removeProject
    }
})()

const TodoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

const todoController = (function(projects) {

    function addTodo(currentProjectIndex, newTitle, newDescription, newDueDate, newPriority) {
        const newTodo = TodoFactory(newTitle, newDescription, newDueDate, newPriority);
        projects.getProject(currentProjectIndex).push(newTodo);
    }

    function removeTodo(currentProjectIndex, currentTodoIndex) {
        projects.getProject[currentProjectIndex].splice(currentTodoIndex, 1);
    }

    function _getTodo(currentProjectIndex, currentTodoIndex) {
        return projects.getProject[currentProjectIndex][currentTodoIndex];
    }

    function editTodo(newTitle, newDescription, newDueDate, newPriority, currentProjectIndex, currentTodoIndex) {
        const selectedTodo = _getTodo(currentProjectIndex, currentTodoIndex)
        selectedTodo.title = newTitle ? newTitle : selectedTodo.title;
        selectedTodo.description = newDescription ? newDescription : selectedTodo.description;
        selectedTodo.dueDate = newDueDate ? newDueDate : selectedTodo.dueDate; 
        selectedTodo.priority = newPriority ? newPriority : selectedTodo.priority; 
    }

    return {
        addTodo,
        removeTodo,
        editTodo,
    }
})(projects)

console.log("I am working Babby!!!!!")