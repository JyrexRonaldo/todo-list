const TaskFactory = (title, description, dueDate, priority, status) => {
    status = 'off';
    return { title, description, dueDate, priority, status }
}

const projects = (function() {
    const _projects = [];

    const addProject = () => _projects.push([]);

    const getProjects = () => _projects;

    const getProject = (selectedProjectIndex) => _projects[selectedProjectIndex];

    const removeProject = (selectedProjectIndex) => {
        _projects.splice(selectedProjectIndex, 1); 
    }

    const addTask = (currentProjectIndex, newTitle, newDescription, newDueDate, newPriority, status) => {
        const newTask = TaskFactory(newTitle, newDescription, newDueDate, newPriority, status);
        getProject(currentProjectIndex).push(newTask);
    }

    const getTask = (currentProjectIndex, currentTaskIndex) => {
        return getProject(currentProjectIndex)[currentTaskIndex];
    }

    const editTask = (currentProjectIndex, currentTaskIndex, newTitle , newDescription, newDueDate, newPriority, status) => {
        const selectedTask = getTask(currentProjectIndex, currentTaskIndex)
        selectedTask.title = newTitle ? newTitle : selectedTask.title;
        selectedTask.description = newDescription ? newDescription : selectedTask.description;
        selectedTask.dueDate = newDueDate ? newDueDate : selectedTask.dueDate; 
        selectedTask.priority = newPriority ? newPriority : selectedTask.priority;
        selectedTask.status = status ? status : selectedTask.status;
    }

    const removeTask = (currentProjectIndex, currentTaskIndex) => {
        getProject(currentProjectIndex).splice(currentTaskIndex, 1)
    }
    
    return {
        addProject,
        getProjects,
        getProject,
        removeProject,
        addTask,
        editTask,
        removeTask,
        getTask,
    }
})()


let tosk = TaskFactory('james', 'sadasd', '007', 'noooo' )


projects.addProject()
projects.addProject()
projects.addProject()


projects.addTask(1, 'james', 'sadasd', '007', 'noooo')
projects.addTask(1, 'james', 'sadasd', '007', 'noooo')
projects.addTask(1, 'james', 'sadasd', '007', 'noooo')
projects.addTask(1, 'james', 'sadasd', '007', 'noooo')
projects.addTask(1, 'james', 'sadasd', '007', 'noooo')
projects.addTask(1, 'james', 'sadasd', '007', 'noooo')

projects.editTask(1, 3, 'makevids', 'so i can sell', 'tuesday', 'yes')

projects.removeTask(1, 3)

// projects.removeProject()

console.log(tosk)
console.log(projects.getProjects())




const screenController = (function(projects) {
    const addProjectForm = document.querySelector('form button:nth-child(2)');
    const cancelProjectForm = document.querySelector('form button:nth-child(3)');
    const projectInput = document.querySelector('.project input');
    const addProjectButton = document.querySelector('.project-list .add');
    const projectList = document.querySelector('.project-list');
    const projectForm = document.querySelector('form.project');
    const addTaskButton = document.querySelector('.task .add');
    const taskList = document.querySelector('.task');
    const formContainer = document.querySelector('.form');
    const addTaskForm = document.querySelector('.form button:first-child');
    const cancelTaskForm = document.querySelector('.form button:nth-child(2)');
    const taskTitle = document.querySelector('#title');
    const taskDescription = document.querySelector('#description');
    const taskDuedate = document.querySelector('#due-date');
    const taskPriority = document.querySelector('#priority');
    const projectListNames = [];
    let currentDisplayIndex = null;
    getSelectedProject();
    let taskFormPurpose = null;
    let modifyTaskItem = null;


    addTaskForm.addEventListener('click', (e) => {

        if (taskFormPurpose === 'add') {
            projects.addTask(currentDisplayIndex, taskTitle.value, taskDescription.value, taskDuedate.value, taskPriority.value);
            taskFormPurpose = null;
        } else if (taskFormPurpose === 'edit') {
            projects.editTask(currentDisplayIndex, modifyTaskItem, taskTitle.value, taskDescription.value, taskDuedate.value, taskPriority.value)
            taskFormPurpose = null;
            modifyTaskItem = null;
        }

        renderTaskList(currentDisplayIndex);
        addDeleteTaskButton()
        addEditButton()
        closeTaskForm()
    })


    
    
    addTaskButton.addEventListener('click', (e) => {
        addTaskForm.textContent = 'Add';
        formContainer.style.display = 'flex';
        taskFormPurpose = 'add';
    });

    cancelTaskForm.addEventListener('click', () => {
        closeTaskForm()
    })
    
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

      function createTaskNode(task) {
        const newTaskNode = document.createElement('li');
        const taskCheck = document.createElement('input');
        const taskTitle = document.createElement('p');
        const detailsButton = document.createElement('button');
        const dateSpan = document.createElement('span');
        const editIcon = document.createElement('img');
        const deleteIcon = document.createElement('img');
        
        taskCheck.setAttribute('type', 'checkbox');
        taskTitle.textContent = task.title;
        detailsButton.textContent = 'DETAILS';
        dateSpan.textContent = task.dueDate;
        editIcon.setAttribute('src', '../src/assets/edit-icon.svg');
        editIcon.classList.add('edit-button');
        deleteIcon.setAttribute('src', '../src/assets/delete-icon.svg');
        deleteIcon.classList.add('delete-button');
        newTaskNode.append(taskCheck, taskTitle, detailsButton, dateSpan, editIcon, deleteIcon);
        return newTaskNode;
     }

     function renderTaskList(selectedProject) {
        const taskListTitle = document.querySelector('.content.title');
        let taskCollection = []

        for (let i = 0; i < projects.getProject(selectedProject).length; i++) {
            taskCollection.push(projects.getProject(selectedProject)[i])
        }

         console.log(taskCollection)

        taskList.innerText = "";
        taskListTitle.textContent = projectListNames[selectedProject];
        taskList.appendChild(addTaskButton);

        for (let i = 0; i < taskCollection.length; i++) {
            let newTaskNode = createTaskNode(taskCollection[i]);
            taskList.insertBefore(newTaskNode, addTaskButton)
            
        }
      }

      function addDeleteTaskButton() {
        const deleteButtons = document.querySelectorAll('.task .delete-button');
        console.log(deleteButtons)

        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.dataset.index = index;
            console.log(deleteButton)
            deleteButton.addEventListener('click', (e) => {
                projects.removeTask(currentDisplayIndex, e.target.dataset.index)
                renderTaskList(currentDisplayIndex);
                addDeleteTaskButton()
            })
        })
      }


      function addDeleteProjectButton() {
        const deleteButtons = document.querySelectorAll('.project-list .delete-button');
        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.dataset.index = index;
            deleteButton.addEventListener('click', (e) => {
            projects.removeProject(e.target.dataset.index);
            projectListNames.splice(e.target.dataset.index, 1)
            console.log(e.target.dataset.index)
            renderProjectList();
            addDeleteProjectButton();
            getSelectedProject()
            })
        });        
        }

        function addEditButton() {
            const editButtons = document.querySelectorAll('.task .edit-button');
            console.log(editButtons)

            editButtons.forEach((editButton, index) => {
                editButton.dataset.index = index;
                editButton.addEventListener('click', (e) => {
                    let editTask = projects.getTask(currentDisplayIndex, e.target.dataset.index)
                    taskTitle.value = editTask.title;
                    taskDescription.value = editTask.description;
                    taskDuedate.value = editTask.dueDate;
                    taskPriority.value = editTask.priority;
                    console.log(editTask.priority);
                    addTaskForm.textContent = 'Edit';
                    formContainer.style.display = 'flex';
                    taskFormPurpose = 'edit';
                    modifyTaskItem = e.target.dataset.index;
                })
            })
        }

      function renderProjectList() {
        projectList.innerText = "";
        projectList.appendChild(addProjectButton)

        for (let i = 0; i < projectListNames.length; i++) {
            let newProjectNode = createProjectNode(projectListNames[i]);
            newProjectNode.dataset.index = i;
            projectList.insertBefore(newProjectNode, addProjectButton)
            
        }
      }

      function getSelectedProject() {
        const listCollecttion = document.querySelectorAll('section:first-child .project-list li:not(.add)');
        listCollecttion.forEach(listItem => {
            listItem.addEventListener('click', (e) => {
                let allProjectList = document.querySelectorAll('section:first-child .project-list li:not(.add)');
                for (let i = 0; i < allProjectList.length; i++) {
                    allProjectList[i].classList.remove('selected') 
                }
                e.target.classList.add('selected')
                renderTaskList(e.target.dataset.index)
                currentDisplayIndex = e.target.dataset.index;
                addDeleteTaskButton()
                addEditButton()
            })
        });
      }

      addProjectButton.addEventListener('click', () => {
        projectForm.style.display = 'flex';
    });

    addProjectForm.addEventListener('click', (e) => {
        projectListNames.push(projectInput.value)
        projects.addProject()
        renderProjectList()
        getSelectedProject()
        addDeleteProjectButton()
        closeProjectForm()
      })

      function closeProjectForm() {
        projectInput.value = '';
        projectForm.style.display = 'none';
      }


        cancelProjectForm.addEventListener('click', () => {
            closeProjectForm();
        });


        function closeTaskForm() {
            taskTitle.value = ''; 
            taskDescription.value = ''; 
            taskDuedate.value = ''; 
            taskPriority.value = false;
            taskPriority.checked = false;
            formContainer.style.display = 'none';
        }
})(projects)

