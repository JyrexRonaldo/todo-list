import './reset.css';
import './style.css';
import { format } from 'date-fns'

const projects = function(){
    let _projects = {
        bible: [
            todoItem("boasdok", "arbe", "2023-10-04", true), 
            todoItem("booasdk", "babel", "2023-10-04", true), 
            todoItem("booasdk", "barl", "2023-10-04", true), 
            todoItem("boasdok", "brel", "2023-10-04", true), 
            todoItem("boasdok", "rbel", "2023-10-04", true),
        ],
        cash:  [
            todoItem("book", "bel", "2023-10-04", true), 
            todoItem("book", "bel", "2023-10-04", true), 
            todoItem("book", "bel", "2023-10-04", true), 
            todoItem("book", "bel", "2023-10-04", true), 
            todoItem("book", "bel", "2023-10-04", true),
        ],
        money: [
            todoItem("bob", "fiat", "2023-10-04", true), 
            todoItem("bob", "fiat", "2023-10-04", true), 
            todoItem("bob", "fiat", "2023-10-04", true), 
            todoItem("bob", "fiat", "2023-10-04", true), 
            todoItem("bob", "fiat", "2023-10-04", true),
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
        return _projects[selectedProject][index];
    }

    const getProjectTasks = (selectedProject) => {
        return _projects[selectedProject];
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
        _todoItem.status = status;
    }
    
    return {getTodoItem, editTodoItem, setTodoStatus};
}


const makePayments = todoItem("make payments", "pay a lot of cash", "2022-2-2", "yes very important" )

console.log(makePayments.getTodoItem().status)

makePayments.editTodoItem(null, null, "yesterday", null)

const todoController = (function(){
    const _projects = projects();
    let _selectedProject = null;
    let filterCode = 0;
    let filteredItems = null;

    function getProjects() {
        return _projects.getProjects();
    }
    
    function getSelectedProject() {
        return _selectedProject;
    } 

    function setSelectedProject(value) {
        _selectedProject = value;
    }

    function getSelectedProjectTasks() {
        if (filterCode === 1) {
            filterCode = 0;
            return filteredItems;
        } 
            return _projects.getProjectTasks(_selectedProject);
    }

    function createProject(projectName) {
        _projects.addProject(projectName);
    } 

    function createTodo(title, description, dueDate, priority) {
        const todo = todoItem(title, description, dueDate, priority);
        _projects.addTodoItem(_selectedProject, todo);
    }

    function deleteProject(projectName) {
        _projects.deleteProject(projectName);
    }

    function deleteTodoItem(index) {
        console.log(_selectedProject);
        console.log(index);
        _projects.deleteTodoItem(_selectedProject, index);
    }

    function editTodoItem(title, description, dueDate, priority, index) {
        const todoItem = _projects.getTodoItem(_selectedProject, index);
        todoItem.editTodoItem(title, description, dueDate, priority);
    }

    function getTodoItem(index) {
        return _projects.getTodoItem(_selectedProject, index);
    }

    function setTodoStatus(status, index) {
        const todoItem = getTodoItem(index);
        todoItem.setTodoStatus(status);
        console.log(todoItem.getTodoItem().status); 
    }

    function getAllTask() {
        const allProjects = _projects.getProjects()
        const getAllTask = []
        for (let project in allProjects) {
            allProjects[project].forEach((todo) => {
                getAllTask.push(todo)
            })
        }
        filterCode = 1;
        
        filteredItems = getAllTask;
    }

    // function  

    return { getAllTask, setTodoStatus, getSelectedProjectTasks, getProjects, getSelectedProject, setSelectedProject, createProject, createTodo, deleteProject, deleteTodoItem, editTodoItem, getTodoItem}

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
    const formAddButton = taskDialog.querySelector(".task-buttons button:first-child");
    let editItemIndex = 0;
    
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
        listItem.appendChild(projectButton);
        projectButton.append(iconSpan, projectName, deleteSpan);
        return listItem;
    }

    // todoController.setSelectedProject("bible")

    const updateTaskList = () => {
        taskSectionTitle.textContent = todoController.getSelectedProject();
        let project = todoController.getSelectedProjectTasks();
        taskList.textContent = ""; 
        project.forEach((todo, index) => {
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
        const formattedDate = format(new Date(year, (month - 1), day), 'do MMM')
        dueDatePara.textContent = `${formattedDate}`;
        const editSpan = document.createElement("span");
        editSpan.classList.add("edit");
        const deleteSpan = document.createElement("span");
        deleteSpan.classList.add("del");
        listItem.append(checkBox, taskTitle, detailsButton, dueDatePara, editSpan, deleteSpan);
        return listItem;
    }

    projectSection.addEventListener("click", (e)=> {
        if (e.target.getAttribute("class") === "add add-project") {
        projectDialog.showModal();
        }
        if (e.target.getAttribute("class") === "project") {
                todoController.setSelectedProject(e.target.textContent);
                console.log(todoController.getSelectedProject());
                updateTaskList();
            }

        if (e.target.textContent === "Cancel") {
               projectDialog.close(); 
        }

        if (e.target.textContent === "Add") {
            todoController.createProject(projectNameInput.value);
            projectNameInput.value = "";
            projectDialog.close(); 
            updateProjectList();
        }

        if (e.target.textContent === "All Task") {
            todoController.getAllTask()
            updateTaskList()
        }



        console.log(e.target) 
    });
    
    taskSection.addEventListener("click", (e) => {
        if (e.target.getAttribute("class") === "add add-task") {
            formAddButton.textContent = "Add";
            taskDialog.showModal();
        }
        console.log(e.target)

        if (e.target.textContent === "Cancel") {
            removeAttribute()
            taskDialog.close();
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
            updateTaskList();
        }

        if (e.target.getAttribute("class") === "edit") {
            formAddButton.textContent = "Edit";
            const todoIndex = e.target.parentNode.dataset.index;
            const todoItem = todoController.getTodoItem(todoIndex).getTodoItem();
            taskTitleInput.value = todoItem.title
            descriptionTextarea.value = todoItem.description
            console.log(todoItem.dueDate)
            dueDateInput.value = todoItem.dueDate
            prioritySelect.value = todoItem.priority
            taskDialog.showModal();
            editItemIndex = todoIndex;
        }

        if (e.target.textContent === "Edit") {
            todoController.editTodoItem(taskTitleInput.value, descriptionTextarea.value, dueDateInput.value, prioritySelect.value, editItemIndex);
            resetTaskDialog();
            updateTaskList();
        }

        if (e.target.textContent === "Details") {
            taskTitleInput.setAttribute("disabled", true);
            descriptionTextarea.setAttribute("disabled", true);
            dueDateInput.setAttribute("disabled", true);
            prioritySelect.setAttribute("disabled", true);
            formAddButton.setAttribute("display", "none");
            formAddButton.textContent = "Immortaaal"
            taskDialog.showModal();
        }


    });

    window.addEventListener("keydown", (e) => {
        removeAttribute()
    });
    
    function removeAttribute() {
        taskTitleInput.removeAttribute("disabled");
        descriptionTextarea.removeAttribute("disabled");
        dueDateInput.removeAttribute("disabled");
        prioritySelect.removeAttribute("disabled");
    }

    function resetTaskDialog() {
        taskTitleInput.value = ""; 
        descriptionTextarea.value = ""; 
        dueDateInput.value = "";
        prioritySelect.value = "";
    }
    // updateProjectList();
    // updateTaskList();

})()

// console.log(todoController.getAllTask())