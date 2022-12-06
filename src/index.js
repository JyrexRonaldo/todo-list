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

const screenController = (function(projects) {
    const addProjectForm = document.querySelector('form button:nth-child(2)');
    const cancelProjectForm = document.querySelector('form button:nth-child(3)');
    const projectInput = document.querySelector('.project input');
    const addProjectButton = document.querySelector('.project-list .add');
    const projectList = document.querySelector('.project-list');
    const projectForm = document.querySelector('form.project');

    function createProjectNode(name) {
        const newProjectNode = document.createElement('li');
        const img = document.createElement('img');
        img.setAttribute('src', '../src/assets/menu.svg');
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = "✖"
        newProjectNode.append(img, `${name}`, deleteButton)
        return newProjectNode
      }

      function closeProjectForm() {
        projectInput.value = '';
        projectForm.style.display = 'none';
      }

      addProjectForm.addEventListener('click', () => {
        projects.addProject(projectInput.value)
        let projectCollection = projects.getProjects()
        console.log(projectCollection)
        projectList.innerHTML = "";
        projectList.appendChild(addProjectButton)
        for (const key in projectCollection) {
            let newListNode = createProjectNode(key);
            projectList.insertBefore(newListNode, addProjectButton)
        }
        closeProjectForm()
      })

      addProjectButton.addEventListener('click', () => {
        projectForm.style.display = 'flex';
    });

    cancelProjectForm.addEventListener('click', () => {
        closeProjectForm();
    });

})(projects)