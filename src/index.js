const projects = (function() {
    const _projects = {};

    const addProject = (projectName) => _projects[projectName] = {};

    const getProjects = () => _projects;

    const getProject = (projectName) => _projects[projectName];

    const removeProject = (projectName) => delete _projects[projectName]; 

    return {
        addProject,
        getProjects,
        getProject,
        removeProject,
    }
})()


const TodoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

const todoController = (function(projects) {

    const addTodo = (currentProjectName, newTitle, newDescription, newDueDate, newPriority) => {
        const newTodo = TodoFactory(newTitle, newDescription, newDueDate, newPriority);
        projects.getProject(currentProjectName)[newTodo.title] = newTodo;
    }


    const removeTodo = (currentProjectName, currentTodoName) => {
        delete projects.getProject(currentProjectName)[currentTodoName];
    }

    const _getTodo = (currentProjectName, currentTodoName) => {
        return projects.getProject(currentProjectName)[currentTodoName];
    }

    const editTodo = (newTitle, newDescription, newDueDate, newPriority, currentProjectName, currentTodoName) => {
        const selectedTodo = _getTodo(currentProjectName, currentTodoName)
        selectedTodo.title = newTitle ? newTitle : selectedTodo.title;
        selectedTodo.description = newDescription ? newDescription : selectedTodo.description;
        selectedTodo.dueDate = newDueDate ? newDueDate : selectedTodo.dueDate; 
        selectedTodo.priority = newPriority ? newPriority : selectedTodo.priority;
        const project = projects.getProjects()
        project[currentProjectName][selectedTodo.title] = selectedTodo;
        delete project[currentProjectName][currentTodoName]
    }

    return {
        addTodo,
        removeTodo,
        editTodo,
    }
}
)(projects)

const screenController = (function() {
    
})()