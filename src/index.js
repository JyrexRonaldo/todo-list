const projects = (function() {
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

      function appendIndex() {
        // const delete
        const projects = document.querySelectorAll('.project-list li');
        for (let i = 0; i < projects.length - 1; i++) {
            console.log(projects[i])
            projects[i].setAttribute(`data-index`, `${i}`)
        }

        const deleteButtons = document.querySelectorAll('.project-list .delete-button')
        for (let i = 0; i < deleteButtons.length; i++) {
            console.log(deleteButtons[i])
            deleteButtons[i].setAttribute(`data-index`, `${i}`)
        }

      }

      function addDeleteButton() {
        const deleteButtons = document.querySelectorAll('.project-list .delete-button');
        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', (e) => {
            const index = e.target.getAttribute("data-index");
            myLibrary.splice(index, 1);
            tableBody.removeChild(
        document.querySelector(`tbody > tr[data-index="${index}"]`)
      );
            })
        });
        
        }

    addProjectForm.addEventListener('click', () => {
        const newProjectName = createProjectNode(projectInput.value);
        // console.log(newProjectName)
        projectInput.value = '';
        projectList.insertBefore(newProjectName, addProjectButton)
        projectInput.value = '';
        projects.addProject();
        appendIndex()
        // addDeleteButton();
    });

    addProjectButton.addEventListener('click', () => {
        projectForm.style.display = 'flex';
    });

    cancelProjectForm.addEventListener('click', () => {
        projectInput.value = '';
        projectForm.style.display = 'none';
    });

})(projects) 