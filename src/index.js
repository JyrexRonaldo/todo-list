import { isToday, format, add, sub, isWithinInterval } from 'date-fns'

// // console.log('big ass is bae')
// // If today is 6 October 2014, is 6 October 14:00:00 today?
// const result = format(new Date(2022, 11, 15), "do MMM")

// console.log(result)
// //=> true

// const result = add(new Date(), { days: 7})

// const isSeven = isWithinInterval(new Date(2022, 11, 25), {
//     start: sub(new Date(), { days: 1}),
//     end: add(new Date(), { days: 7})
//   })

//   console.log(isSeven)

// console.log(result)

const TaskFactory = (title, description, dueDate, priority, status) => {
    // status = 'incomplete';
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

    const getAlltask = () => {
        const allProjects = getProjects()
        let allTask = []
        for (let i = 0; i < allProjects.length; i++) {
            for (let j = 0; j < allProjects[i].length; j++) {
                allTask.push(allProjects[i][j])                
            }  
        }
        return allTask
    }
    
    const getImportantTask = () => {
        let allTask = getAlltask();

        let importantTask = allTask.filter((task) => {
            if (task.priority === 'yes') {
                return task
            }
        })

        return importantTask
    }

    const getCompletedTask = () => {
        let allTask = getAlltask();

        let completedTask = allTask.filter((task) => {
            if (task.status === 'complete') {
                return task
            }
        })

        return completedTask;

    }

    const getTodaysTasks = () => {
        let allTask = getAlltask();

        let todayTask = allTask.filter((task) => {
            if (isToday(new Date(task.dueDate))) {
                return task
            }
        })

        return todayTask
    }

    const getNext7DaysTasks = () => {
        let allTask = getAlltask();

        let next7DaysTask = allTask.filter((task) => {
            let isWithin = isWithinInterval(new Date(task.dueDate), {
                start: sub(new Date(), { days: 1}),
                end: add(new Date(), { days: 7})
              })

              if (isWithin === true ) {
                return task;
              }
        })

        return next7DaysTask;
    }

    const filters = [getAlltask, getTodaysTasks, getNext7DaysTasks, getImportantTask, getCompletedTask,]

    return {
        addProject,
        getProjects,
        getProject,
        removeProject,
        addTask,
        editTask,
        removeTask,
        getTask,
        // getAlltask,
        // getImportantTask,
        // getCompletedTask,
        // getTodaysTasks,
        // getNext7DaysTasks,
        filters,
    }
})()


// let tosk = TaskFactory('james', 'sadasd', '007', 'noooo' )


// projects.addProject()
// projects.addProject()
// projects.addProject()


// projects.addTask(1, 'james', 'sadasd', 1671321600000, 'noooo', 'complete')
// projects.addTask(1, 'james', 'sadasd', 1671321600000, 'noooo', 'complete')
// projects.addTask(1, 'james', 'sadasd', 1671321600000, 'noooo', 'complete')
// projects.addTask(1, 'james', 'sadasd', 1671321600000, 'noooo', 'complete')
// projects.addTask(1, 'james', 'sadasd', 1671321600000, 'noooo', 'complete')
// projects.addTask(1, 'james', 'sadasd', 1671321600000, 'noooo', 'complete')

// projects.addTask(0, 'james', 'sadasd', '2022-12-16', 'yes', 'incomplete')
// projects.addTask(0, 'james', 'sadasd', '2022-12-13', 'yes', 'incomplete')
// projects.addTask(0, 'james', 'sadasd', '2022-12-13', 'yes', 'incomplete')
// projects.addTask(0, 'james', 'sadasd', '2022-12-13', 'yes', 'incomplete')
// projects.addTask(0, 'james', 'sadasd', '2022-12-13', 'yes', 'incomplete')
// projects.addTask(0, 'james', 'sadasd', '2022-12-13', 'yes', 'incomplete')


// projects.addTask(2, 'james', 'sadasd', '2022-12-25', 'noooo', 'complete')
// projects.addTask(2, 'james', 'sadasd', '2022-12-25', 'noooo', 'complete')
// projects.addTask(2, 'james', 'sadasd', '2022-12-25', 'noooo', 'complete')
// projects.addTask(2, 'james', 'sadasd', '2022-12-25', 'noooo', 'complete')
// projects.addTask(2, 'james', 'sadasd', '2022-12-25', 'noooo', 'complete')
// projects.addTask(2, 'james', 'sadasd', '2022-12-25', 'noooo', 'complete')


// projects.editTask(1, 3, 'makevids', 'so i can sell', 1671321600000, 'yes')

// // projects.removeTask(1, 3)

// // projects.removeProject()

// console.log(tosk)
// // console.log(projects.getNext7DaysTasks())




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
    const taskListTitle = document.querySelector('.content.title');
    const filterNodes = document.querySelectorAll('.filters li' )


    let currentDisplayIndex = null;
    getSelectedProject();
    getSelectedFilter();
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
        addDetailButton()
        addCheckButton()
        closeTaskForm()
    })

    addTaskButton.addEventListener('click', (e) => {
        taskPriority.value = 'no';
        addTaskForm.textContent = 'Add';
        formContainer.style.display = 'flex';
        taskFormPurpose = 'add';
    });

    cancelTaskForm.addEventListener('click', () => {
        closeTaskForm()
        returnDefault()
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
        let formattedDate = format(new Date(task.dueDate), "do MMM")
        dateSpan.textContent = formattedDate;
        editIcon.setAttribute('src', '../src/assets/edit-icon.svg');
        editIcon.classList.add('edit-button');
        deleteIcon.setAttribute('src', '../src/assets/delete-icon.svg');
        deleteIcon.classList.add('delete-button');
        newTaskNode.append(taskCheck, taskTitle, detailsButton, dateSpan, editIcon, deleteIcon);
        if (task.status === 'complete') {
            taskTitle.classList.add('completed');
            taskCheck.checked = true;
        }
        return newTaskNode;
     }

     function renderTaskList(selectedProject) {
        // const taskListTitle = document.querySelector('.content.title');
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

      function renderFilter(selectedFilter) {
        let filterTasksCollection = [];

        for (let i = 0; i < projects.filters[selectedFilter]().length; i++) {
            let projectFilters = projects.filters[selectedFilter]()
            filterTasksCollection.push(projectFilters[i])
        }

        // for (let i = 0; i < filterCollection.length; i++) {
        //     filterCollection.push(projects.filters[i])
        // }

        console.log(filterTasksCollection)

        // const filterNodes = document.querySelectorAll('.filters li' )
        let filterListNames = []

        filterNodes.forEach((filterNode) => {
            filterListNames.push(filterNode.textContent)
        })

        taskList.innerText = "";
        taskListTitle.textContent = filterListNames[selectedFilter];

        for (let i = 0; i < filterTasksCollection.length; i++) {
            let newTaskNode = createTaskNode(filterTasksCollection[i]);
            taskList.append(newTaskNode)
            
        }
      
    }

    function getSelectedFilter() {
        filterNodes.forEach((node, index) => {
            node.dataset.index = index
            node.addEventListener('click', (e) => {
                for (let i = 0; i < filterNodes.length; i++) {
                    filterNodes[i].classList.remove('selected')
                }
                e.target.classList.add('selected');
                renderFilter(e.target.dataset.index)
                // getSelectedFilter()
                addDeleteTaskButton()
                addEditButton()
                addDetailButton()
                addCheckButton()
            })
        })
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
                addEditButton()
                addDetailButton()
                addCheckButton()
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
                    addTaskForm.textContent = 'Edit';
                    formContainer.style.display = 'flex';
                    taskFormPurpose = 'edit';
                    modifyTaskItem = e.target.dataset.index;
                })
            })
        }

        function addDetailButton() {
            const detailButtons = document.querySelectorAll('.task button');

            detailButtons.forEach((detailButton, index) => {
                detailButton.dataset.index = index;
                detailButton.addEventListener('click', (e) => {
                    let task = projects.getTask(currentDisplayIndex, e.target.dataset.index);
                    taskTitle.value = task.title;
                    taskDescription.value = task.description;
                    taskDuedate.value = task.dueDate;
                    taskPriority.value = task.priority;
                    taskTitle.disabled = true;
                    taskDescription.disabled = true;
                    taskDuedate.disabled = true;
                    taskPriority.disabled = true;
                    addTaskForm.style.display = 'none';
                    formContainer.style.display = 'flex';
                }) 
            })

        }

        function addCheckButton() {
            const checkButtons = document.querySelectorAll('.task [type=checkbox]')

            checkButtons.forEach((checkButton, index) => {
                checkButton.dataset.index = index;
                checkButton.addEventListener('change', (e) => {
                    let task = projects.getTask(currentDisplayIndex, e.target.dataset.index);
                    if (checkButton.checked === true) {
                        task.status = 'complete';
                        checkButton.nextSibling.classList.add('completed');     
                    } else if (checkButton.checked === false) {
                        task.status = 'incomplete';
                        checkButton.nextSibling.classList.remove('completed')
                    }

                })
            })
        }
        
        function returnDefault() {
            taskTitle.disabled = false;
            taskDescription.disabled = false;
            taskDuedate.disabled = false;
            taskPriority.disabled = false;
            addTaskForm.style.display = 'block';
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
                addDetailButton()
                addCheckButton()
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
            formContainer.style.display = 'none';
        }
})(projects)

