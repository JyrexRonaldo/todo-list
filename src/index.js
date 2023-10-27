import './reset.css';
import './style.css';
import { format } from 'date-fns'

const projects = function(){
    let _projects = {
        bible: [
            todoItem("boasdok", "arbe", "2022-2-2", true), 
            todoItem("booasdk", "babel", "2022-2-2", true), 
            todoItem("booasdk", "barl", "2022-2-2", true), 
            todoItem("boasdok", "brel", "2022-2-2", true), 
            todoItem("boasdok", "rbel", "2022-2-2", true),
        ],
        cash:  [
            todoItem("book", "bel", "2022-2-2", true), 
            todoItem("book", "bel", "2022-2-2", true), 
            todoItem("book", "bel", "2022-2-2", true), 
            todoItem("book", "bel", "2022-2-2", true), 
            todoItem("book", "bel", "2022-2-2", true),
        ],
        money: [
            todoItem("bob", "fiat", "2022-2-2", true), 
            todoItem("bob", "fiat", "2022-2-2", true), 
            todoItem("bob", "fiat", "2022-2-2", true), 
            todoItem("bob", "fiat", "2022-2-2", true), 
            todoItem("bob", "fiat", "2022-2-2", true),
        ],
    };

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
        console.log(_projects[selectedProject]);
        _projects[selectedProject].splice(index, 1);
        console.log(_projects[selectedProject]);
    }

    const getTodoItem = (selectedProject, index) => {
        return _projects[selectedProject][index]
    }

    const getProjectTasks = (selectedProject) => {
        return _projects[selectedProject]
    }

    return { getProjectTasks, addProject, addTodoItem, getProjects, deleteProject, deleteTodoItem, getTodoItem }
    
}

const todoItem = (title, description, dueDate, priority, status = false) => {
    
    const _todoItem = {title, description, dueDate, priority, status}; 

    function editTodoItem(title, description, dueDate, priority) {
        _todoItem.title = title ? title : _todoItem.title;
        _todoItem.description = description ? description : _todoItem.description;
        _todoItem.dueDate = dueDate ? dueDate : _todoItem.dueDate;
        _todoItem.priority = priority ? priority : _todoItem.priority;
    }

    function getTodoItem() {
        return _todoItem;
    }

    function setTodoStatus(status) {
        _todoItem.status = status
    }
    
    return {getTodoItem, editTodoItem, setTodoStatus};
}


const makePayments = todoItem("make payments", "pay a lot of cash", "2022-2-2", "yes very important" )

console.log(makePayments.getTodoItem().status)

makePayments.editTodoItem(null, null, "yesterday", null)

const todoController = (function(){
    const _projects = projects()
    let _selectedProject = null;

    function getProjects() {
        return _projects.getProjects();
    }
    
    function getSelectedProject() {
        return _selectedProject
    } 

    function setSelectedProject(value) {
        _selectedProject = value;
    }

    function getSelectedProjectTasks() {
        return _projects.getProjectTasks(_selectedProject);
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
        console.log(_selectedProject);
        console.log(index);
        _projects.deleteTodoItem(_selectedProject, index);
    }

    function editTodoItem(title, description, dueDate, priority, index) {
        const todoItem = _projects.getTodoItem(_selectedProject, index);
        todoItem.editTodoItem(title, description, dueDate, priority)
    }

    function getTodoItem(index) {
        return _projects.getTodoItem(_selectedProject, index);
    }

    function setTodoStatus(status, index) {
        const todoItem = getTodoItem(index);
        todoItem.setTodoStatus(status)
        console.log(todoItem.getTodoItem().status) 
    }

    return { setTodoStatus, getSelectedProjectTasks, getProjects, getSelectedProject, setSelectedProject, createProject, createTodo, deleteProject, deleteTodoItem, editTodoItem, getTodoItem}

})()

const screenController = (function() {
    const projectSection = document.querySelector("main > div:first-child");
    const taskSection = document.querySelector(".task-list");
    const projectDialog = projectSection.querySelector("dialog");
    const taskDialog = taskSection.querySelector("dialog");
    const projectList = projectSection.querySelector(".project-div");
    const taskList = taskSection.querySelector(".task-div");
    const projectListLastItem = document.querySelector(".add .add-project").parentNode.parentNode;
    const taskListLastItem = document.querySelector(".add .add-task").parentNode.parentNode;
    const projectNameInput = projectDialog.querySelector("input");
    const taskTitleInput = taskDialog.querySelector("input#title");
    const descriptionTextarea = taskDialog.querySelector("textarea#description");
    const dueDateInput = taskDialog.querySelector("input#duedate");
    const prioritySelect = taskDialog.querySelector("select#important");
    const taskSectionTitle = taskSection.querySelector("p");
    
    console.log(prioritySelect)

    const updateProjectList = () => {
        const projects = todoController.getProjects();
        projectList.textContent = "";
        console.log(projects);
        for (const project in projects) {
            projectList.append(createProject(project));
        }
    }

    function createProject(project) {
        const listItem = document.createElement("li");
        const projectButton = document.createElement("button");
        const iconSpan = document.createElement("span");
        const deleteSpan = document.createElement("span");
        const projectName = document.createTextNode(`${project}`);
        projectButton.classList.add("project");
        iconSpan.classList.add("project");
        listItem.appendChild(projectButton)
        projectButton.append(iconSpan, projectName, deleteSpan);
        return listItem;
    }

    // todoController.setSelectedProject("bible")

    const updateTaskList = () => {
        taskSectionTitle.textContent = todoController.getSelectedProject();
        let project = todoController.getSelectedProjectTasks();
        taskList.textContent = ""; 
        console.log(project);
        project.forEach((todo, index) => {
            console.log(todo)
            taskList.append(createTask(todo, index));
        });
    }

    function createTask(todo, index) {
        const todoItem = todo.getTodoItem();
        const listItem = document.createElement("li");
        listItem.dataset.index = index;
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        const taskTitle = document.createElement("p");
        taskTitle.textContent = `${todoItem.title}`;
        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        const dueDatePara = document.createElement("p");
        const [year, month, day] = todoItem.dueDate.split("-")
        const formattedDate = format(new Date(year, month, day), 'do MMM')
        dueDatePara.textContent = `${formattedDate}`;
        const editSpan = document.createElement("span");
        const deleteSpan = document.createElement("span");
        deleteSpan.classList.add("del");
        listItem.append(checkBox, taskTitle, detailsButton, dueDatePara, editSpan, deleteSpan)
        return listItem;
    }

    projectSection.addEventListener("click", (e)=> {
        if (e.target.getAttribute("class") === "add add-project") {
        projectDialog.showModal()
        }
        if (e.target.getAttribute("class") === "project") {
                todoController.setSelectedProject(e.target.textContent);
                console.log(todoController.getSelectedProject())
                updateTaskList();
            }

        if (e.target.textContent === "Cancel") {
               projectDialog.close() 
        }

        if (e.target.textContent === "Add") {
            todoController.createProject(projectNameInput.value);
            projectNameInput.value = "";
            projectDialog.close() 
            updateProjectList()
        }



        console.log(e.target) 
    });
    
    taskSection.addEventListener("click", (e) => {
        if (e.target.getAttribute("class") === "add add-task") {
            taskDialog.showModal()
        }
        console.log(e.target)

        if (e.target.textContent === "Cancel") {
            taskDialog.close() 
        }


        if (e.target.textContent === "Add") {
           todoController.createTodo(taskTitleInput.value, descriptionTextarea.value, dueDateInput.value, prioritySelect.value);
           resetTaskDialog();
           updateTaskList(); 
        }

        if (e.target.getAttribute("type") === "checkbox" ) {
            const todoIndex = e.target.parentNode.dataset.index;
            const todoStatus = e.target.checked;
            todoController.setTodoStatus(todoStatus, todoIndex);
        }

        if (e.target.getAttribute("class") === "del") {
            console.log("yeah");
            const todoIndex = e.target.parentNode.dataset.index;
            todoController.deleteTodoItem(todoIndex);
            updateTaskList()
        }


    });
    
    function resetTaskDialog() {
        taskTitleInput.value = ""; 
        descriptionTextarea.value = ""; 
        dueDateInput.value = "";
        prioritySelect.value = "";
    }
    // updateProjectList();
    // updateTaskList();

})()

