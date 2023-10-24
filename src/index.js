import './reset.css';
import './style.css';

const projects = function(){
    const _projects = {};

    const addProject = (projectName) => {
        _projects[projectName] = []
    }

    const addTodoItem = (selectedProject, todo) => {
        _projects[selectedProject].push(todo);
    }

    const getProjects = () => {
        return _projects;
    }

    const deleteProject = (projectName) => {
        delete _projects[projectName];
    }

    const deleteTodoItem = (selectedProject, index) => {
        _projects[selectedProject].splice(index, 1)
    }

    const getTodoItem = (selectedProject, index) => {
        return _projects[selectedProject][index]
    }

    return {addProject, addTodoItem, getProjects, deleteProject, deleteTodoItem, getTodoItem}
    
}

const todoItem = (title, description, dueDate, priority) => {
    
    const _todoItem = {title, description, dueDate, priority}; 

    function editTodoItem(title, description, dueDate, priority) {
        _todoItem.title = title ? title : _todoItem.title;
        _todoItem.description = description ? description : _todoItem.description;
        _todoItem.dueDate = dueDate ? dueDate : _todoItem.dueDate;
        _todoItem.priority = priority ? priority : _todoItem.priority;
    }

    function getTodoItem() {
        return _todoItem;
    }
    
    return {getTodoItem, editTodoItem};
}

const todoController = (function(){
    const _projects = projects()
    const _selectedProject = null;

    function getSelectedProject() {
        return _selectedProject
    } 

    function setSelectedProject(value) {
        _selectedProject = value;
    }

    function createProject(projectName) {
        _projects.addProject(projectName)
    } 

    function createTodo(title, description, dueDate, priority) {
        const todo = todoItem(title, description, dueDate, priority);
        _projects.addTodoItem(_selectedProject, todo)
    }

    function deleteProject(projectName) {
        _projects.deleteProject(projectName)
    }

    function deleteTodoItem(index) {
        _projects.deleteProject(_selectedProject, index)
    }

    function editTodoItem(title, description, dueDate, priority, index) {
        const todoItem = _projects.getTodoItem(_selectedProject, index);
        todoItem.editTodoItem(title, description, dueDate, priority)
    }

    function getTodoItem(index) {
        _projects.getTodoItem(_selectedProject, index);
    }

    return { getSelectedProject, setSelectedProject, createProject, createTodo, deleteProject, deleteTodoItem, editTodoItem}

})()

const screenController = (function() {
    const projectDiv = document.querySelector("main > div:first-child");
    const taskDiv = document.querySelector(".task-list");
    const projectDialog = projectDiv.querySelector("dialog")
    const taskDialog = taskDiv.querySelector("dialog")
    const addProjectButton = document.querySelector(".add-project").parentNode;
    const body = document.querySelector("body");
    const addTaskButton = document.querySelector(".add-task").parentNode;


    console.log(projectDialog)

    projectDiv.addEventListener("click", (e)=> {
        if (e.target.getAttribute("class") === "add add-project") {
        projectDialog.showModal()
        }
        console.log(e.target)
    });

    taskDiv.addEventListener("click", (e) => {

        
        if (e.target.getAttribute("class") === "add add-task") {
            taskDialog.showModal()
        }
        console.log(e.target)
    });

    console.log(taskDiv)


})()