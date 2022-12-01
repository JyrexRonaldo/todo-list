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

    function addTodo(currentProjectIndex, title, description, dueDate, priority) {
        const newTodo = TodoFactory(title, description, dueDate, priority)
        projects.getProject(currentProjectIndex).push(newTodo)
    }

    return {
        addTodo,
    }
})(projects)