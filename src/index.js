import './reset.css';
import './style.css';

const projects = (function(){
    const projects = {};

    const addProject = (todo) => {
        projects[todo.projectName] = projects[todo.projectName] || [];
        projects[todo.projectName].push(todo);
    }

    const getProjects = () => {
        return projects;
    }

    const deleteProject = (projectName) => {
        delete projects[projectName];
    }

    const deleteTodoItem = (selectedProject, index) => {
        projects[selectedProject].splice(index, 1)
    }
    
})()

const todoItem = (projectName, title, description, dueDate, priority) => {
    
    const todoItem = {projectName, title, description, dueDate, priority}; 

    function editTodoItem(title, description, dueDate, priority, todoItem) {
        todoItem.title = title;
        todoItem.description = description;
        todoItem.dueDate = dueDate;
        todoItem.priority = priority;
    }

    function getTodoItem() {
        return todoItem;
    }
    
    return {getTodoItem, editTodoItem};
}

const todoController = (function(){

})()