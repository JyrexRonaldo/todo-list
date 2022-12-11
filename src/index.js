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

console.log(projects.getProjects());

projects.addProject('make money');

console.log(projects.getProjects());

todoController.addTodo('make money', 'buy cows', 'so i can sell', 'now!', true)

todoController.addTodo('make money', 'buy stocks', 'so i can profit', 'alse now!', true)

console.log(projects.getProjects());

const makeMoney = projects.getProject('make money')

for (const key in makeMoney) {
    console.log(makeMoney[key].description)
}

console.log(makeMoney)

















const screenController = (function(projects) {
    const addProjectForm = document.querySelector('form button:nth-child(2)');
    const cancelProjectForm = document.querySelector('form button:nth-child(3)');
    const projectInput = document.querySelector('.project input');
    const addProjectButton = document.querySelector('.project-list .add');
    const projectList = document.querySelector('.project-list');
    const projectForm = document.querySelector('form.project');
    // let listCollecttion = document.querySelectorAll('li');

    // function updateListCollection() {
    //    const listCollecttion = document.querySelectorAll('li:not(.add)');
    //    console.log(listCollecttion)
    // }
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

    //   function getSelectedProject() {
    //     const listCollecttion = document.querySelectorAll('section:first-child li:not(.add)');
    //     listCollecttion.forEach(listItem => {
    //         listItem.addEventListener('click', (e) => {
    //             return e.target.textContent;
    //         })
    //     });
    //   }

      function getSelectedProject() {
        const listCollecttion = document.querySelectorAll('section:first-child li:not(.add)');
        listCollecttion.forEach(listItem => {
            listItem.addEventListener('click', (e) => {
                let allProjectList = document.querySelectorAll('section:first-child li:not(.add)');
                for (let i = 0; i < allProjectList.length; i++) {
                    allProjectList[i].classList.remove('selected') 
                }
                e.target.classList.add('selected')
                console.log(e.target.textContent)
                
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
    // updateListCollection()
        // listCollecttion = document.querySelectorAll('li:not(.add)');
        // console.log(listCollecttion)
        // const activeList = document.querySelectorAll('li:not(.add)');
        // console.log(activeList)
      })

      function renderProjectList() {
        let projectCollection = projects.getProjects()
        console.log(projectCollection)
        projectList.innerHTML = "";
        projectList.appendChild(addProjectButton)
        for (const key in projectCollection) {
            let newListNode = createProjectNode(key);
            projectList.insertBefore(newListNode, addProjectButton)
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

    

})(projects)

