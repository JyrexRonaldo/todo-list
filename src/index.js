import './reset.css';
import './style.css';

const projects = function(){
    const _projects = {
        bible: [
            todoItem("boasdok", "arbe", "Lat yeah", true), 
            todoItem("booasdk", "babel", "tmorrow", true), 
            todoItem("booasdk", "barl", "net week", true), 
            todoItem("boasdok", "brel", "lat month", true), 
            todoItem("boasdok", "rbel", "net century", true),
        ],
        cash:  [
            todoItem("book", "bel", "Last yah", true), 
            todoItem("book", "bel", "tomorrw", true), 
            todoItem("book", "bel", "next wek", true), 
            todoItem("book", "bel", "last mnth", true), 
            todoItem("book", "bel", "next cntury", true),
        ],
        money: [
            todoItem("bob", "fiat", "Laeah", true), 
            todoItem("bob", "fiat", "toow", true), 
            todoItem("bob", "fiat", "neeek", true), 
            todoItem("bob", "fiat", "laonth", true), 
            todoItem("bob", "fiat", "neentury", true),
        ],
        ghost: [
            todoItem("jarek", "fiya", "Lah", true), 
            todoItem("jarek", "fiya", "tw", true), 
            todoItem("jarek", "fiya", "nek", true), 
            todoItem("jarek", "fiya", "lnth", true), 
            todoItem("jarek", "fiya", "nntury", true),
        ]
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
        _projects[selectedProject].splice(index, 1)
    }

    const getTodoItem = (selectedProject, index) => {
        return _projects[selectedProject][index]
    }

    const getProjectTasks = (selectedProject) => {
        return _projects[selectedProject]
    }

    return { getProjectTasks, addProject, addTodoItem, getProjects, deleteProject, deleteTodoItem, getTodoItem }
    
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


const makePayments = todoItem("make payments", "pay a lot of cash", "tomorrow", "yes very important" )

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
        _projects.deleteProject(_selectedProject, index)
    }

    function editTodoItem(title, description, dueDate, priority, index) {
        const todoItem = _projects.getTodoItem(_selectedProject, index);
        todoItem.editTodoItem(title, description, dueDate, priority)
    }

    function getTodoItem(index) {
        _projects.getTodoItem(_selectedProject, index);
    }

    return { getSelectedProjectTasks, getProjects, getSelectedProject, setSelectedProject, createProject, createTodo, deleteProject, deleteTodoItem, editTodoItem, getTodoItem}

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
    const projectNameInput = projectDialog.querySelector("input")
    
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
        const project = todoController.getSelectedProjectTasks();
        taskList.textContent = ""
        project.forEach(todo => {
            console.log(todo)
            taskList.append(createTask(todo));
        });
    }

    function createTask(todo) {
        const todoItem = todo.getTodoItem();
        const listItem = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        const taskTitle = document.createElement("p");
        taskTitle.textContent = `${todoItem.title}`;
        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        const dueDatePara = document.createElement("p");
        dueDatePara.textContent = `${todoItem.dueDate}`;
        const editSpan = document.createElement("span");
        const deleteSpan = document.createElement("span");
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
    });
    
    
    // updateProjectList();
    // updateTaskList();

})()

