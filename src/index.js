const projects = (function() {
    const _projects = {};

    const addProject = (selectedProject) => _projects[selectedProject] = {};

    const getProjects = () => _projects;

    const getProject = (selectedProject) => _projects[selectedProject];

    const removeProject = (selectedProject) => delete _projects[selectedProject]; 

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

const screenController = (function(projects, todoController) {
    const addProjectForm = document.querySelector('form button:nth-child(2)');
    const cancelProjectForm = document.querySelector('form button:nth-child(3)');
    const projectInput = document.querySelector('.project input');
    const addProjectButton = document.querySelector('.project-list .add');
    const projectList = document.querySelector('.project-list');
    const projectForm = document.querySelector('form.project');
    const addTaskButton = document.querySelector('.todo .add');
    const todoList = document.querySelector('.todo');
    const formContainer = document.querySelector('.form');
    const addTaskForm = document.querySelector('.form button:first-child');
    const cancelTaskForm = document.querySelector('.form button:nth-child(2)');
    const taskTitle = document.querySelector('#title');
    const taskDescription = document.querySelector('#description');
    const taskDuedate = document.querySelector('#due-date');
    const taskPriority = document.querySelector('#priority');
    getSelectedProject()

    function createProjectNode(name) {
        const newProjectNode = document.createElement('li');
        const img = document.createElement('img');
        img.setAttribute('src', '../src/assets/menu.svg');
        const deleteButton = document.createElement('img');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('src', '../src/assets/delete-icon.svg')
        newProjectNode.append(img, `${name}`, deleteButton)
        return newProjectNode
      }

     function createTodoNode(todo) {
        const newTodoNode = document.createElement('li');
        const todoCheck = document.createElement('input');
        const todoTitle = document.createElement('p');
        const detailsButton = document.createElement('button');
        const dateSpan = document.createElement('span');
        const editIcon = document.createElement('img');
        const deleteIcon = document.createElement('img');
        
        todoCheck.setAttribute('type', 'checkbox');
        todoTitle.textContent = todo.title;
        detailsButton.textContent = 'DETAILS';
        dateSpan.textContent = todo.dueDate;
        editIcon.setAttribute('src', '../src/assets/edit-icon.svg');
        editIcon.classList.add('edit-button');
        deleteIcon.setAttribute('src', '../src/assets/delete-icon.svg');
        deleteIcon.classList.add('delete-button');
        newTodoNode.append(todoCheck, todoTitle, detailsButton, dateSpan, editIcon, deleteIcon);
        return newTodoNode;
     } 
  
      function getSelectedProject() {
        const listCollecttion = document.querySelectorAll('section:first-child li:not(.add)');
        listCollecttion.forEach(listItem => {
            listItem.addEventListener('click', (e) => {
                let allProjectList = document.querySelectorAll('section:first-child li:not(.add)');
                for (let i = 0; i < allProjectList.length; i++) {
                    allProjectList[i].classList.remove('selected') 
                }
                e.target.classList.add('selected')
                renderTodoList(e.target.textContent)
                
            })
        });
      }

      function closeProjectForm() {
        projectInput.value = '';
        projectForm.style.display = 'none';
      }

      addProjectForm.addEventListener('click', () => {
        projects.addProject(projectInput.value)
        renderProjectList()
        getSelectedProject()
        addDeleteButton()
        closeProjectForm()
      })

      function renderProjectList() {
        let projectCollection = projects.getProjects()
        projectList.innerHTML = "";
        projectList.appendChild(addProjectButton)
        for (const key in projectCollection) {
            let newProjectNode = createProjectNode(key);
            projectList.insertBefore(newProjectNode, addProjectButton)
        }
      }

      function renderTodoList(selectedProject) {
        const todoListTitle = document.querySelector('.content.title');
        let todoCollection = projects.getProject(selectedProject);
        todoList.innerHTML = "";
        todoListTitle.textContent = selectedProject;
        todoList.appendChild(addTaskButton);
        for (const key in todoCollection) {
            let newTodoNode = createTodoNode(todoCollection[key]);
            todoList.insertBefore(newTodoNode, addTaskButton)
        }

      }

      function addDeleteButton() {
        const deleteButtons = document.querySelectorAll('.project-list .delete-button');
        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', (e) => {
            projects.removeProject(e.target.parentNode.textContent);
            renderProjectList();
            addDeleteButton();
            })
        });        
        }



      addProjectButton.addEventListener('click', () => {
        projectForm.style.display = 'flex';
    });

    cancelProjectForm.addEventListener('click', () => {
        closeProjectForm();
    });

    addTaskButton.addEventListener('click', () => {
        formContainer.style.display = 'flex'
    });

    cancelTaskForm.addEventListener('click', () => {
        formContainer.style.display = 'none';
    })

    addTaskForm.addEventListener('click', (e) => {
        const currentProjectName = document.querySelector('.content.title').textContent;
        todoController.addTodo(currentProjectName, taskTitle.value, taskDescription.value, taskDuedate.value, taskPriority.value);
        renderTodoList(currentProjectName);
        closeTaskForm()
    })

    function closeTaskForm() {
        taskTitle.value = ''; 
        taskDescription.value = ''; 
        taskDuedate.value = ''; 
        taskPriority.value = false;
        taskPriority.checked = false;
        formContainer.style.display = 'none';
    }


})(projects, todoController)

