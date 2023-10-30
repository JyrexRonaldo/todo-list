import "./reset.css";
import "./style.css";
import { format, isToday, isThisWeek, parseISO } from "date-fns";

const projects = function () {
  let _projects = {
    bible: [
      todoItem("bible", "boasdok1", "arbe", "2023-10-04", true),
      todoItem("bible", "booasdk2", "babel", "2023-10-04", true),
      todoItem("bible", "booasdk3", "barl", "2023-10-04", true),
      todoItem("bible", "boasdok4", "brel", "2023-10-04", true),
      todoItem("bible", "boasdok5", "rbel", "2023-10-04", true),
    ],
    cash: [
      todoItem("cash", "book1", "bel", "2023-10-04", false),
      todoItem("cash", "book2", "bel", "2023-10-04", false),
      todoItem("cash", "book3", "bel", "2023-10-04", false),
      todoItem("cash", "book4", "bel", "2023-10-04", false),
      todoItem("cash", "book5", "bel", "2023-10-04", false),
    ],
    money: [
      todoItem("money", "bob1", "fiat", "2023-10-04", false),
      todoItem("money", "bob2", "fiat", "2023-10-04", false),
      todoItem("money", "bob3", "fiat", "2023-10-04", false),
      todoItem("money", "bob4", "fiat", "2023-10-04", false),
      todoItem("money", "bob5", "fiat", "2023-10-04", false),
    ],
  };

  const addProject = (projectName) => {
    _projects[projectName] = [];
  };

  const addTodoItem = (selectedProject, todo) => {
    _projects[selectedProject].push(todo);
  };

  const getProjects = () => {
    return _projects;
  };

  const deleteProject = (projectName) => {
    delete _projects[projectName];
  };

  const deleteTodoItem = (selectedProject, index) => {
    _projects[selectedProject].splice(index, 1);
  };

  const getTodoItem = (selectedProject, index) => {
    return _projects[selectedProject][index];
  };

  const getProjectTasks = (selectedProject) => {
    return _projects[selectedProject];
  };

  return {
    getProjectTasks,
    addProject,
    addTodoItem,
    getProjects,
    deleteProject,
    deleteTodoItem,
    getTodoItem,
  };
};

const todoItem = (
  projectName,
  title,
  description,
  dueDate,
  priority,
  status = false
) => {
  if (priority === "true") {
    priority = true;
  } else if (priority === "false") {
    priority = false;
  }
  const _todoItem = {
    projectName,
    title,
    description,
    dueDate,
    priority,
    status,
  };

  function editTodoItem(title, description, dueDate, priority) {
    if (priority === "true") {
      priority = true;
    } else if (priority === "false") {
      priority = false;
    }
    _todoItem.title = title ? title : _todoItem.title;
    _todoItem.description = description ? description : _todoItem.description;
    _todoItem.dueDate = dueDate ? dueDate : _todoItem.dueDate;
    _todoItem.priority = priority;
  }

  function getTodoItem() {
    return _todoItem;
  }

  function setTodoStatus(status) {
    _todoItem.status = status;
  }

  return { getTodoItem, editTodoItem, setTodoStatus };
};

const todoController = (function () {
  const _projects = projects();
  let _selectedProject = null;

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
    return _projects.getProjectTasks(_selectedProject);
  }

  function createProject(projectName) {
    _projects.addProject(projectName);
  }

  function createTodo(title, description, dueDate, priority) {
    const todo = todoItem(
      _selectedProject,
      title,
      description,
      dueDate,
      priority
    );
    _projects.addTodoItem(_selectedProject, todo);
  }

  function deleteProject(projectName) {
    _projects.deleteProject(projectName);
  }

  function deleteTodoItem(index) {
    switch (_selectedProject) {
      case "All Task":
      case "Today":
      case "This Week":
      case "Important":
      case "Completed":
        let actualproject = _getActualTodoItem(index);
        return _projects.deleteTodoItem(
          actualproject.projectName,
          actualproject.todoActualIndex
        );
      default:
        return _projects.deleteTodoItem(_selectedProject, index);
    }
  }

  function editTodoItem(title, description, dueDate, priority, index) {
    const todoItem = getTodoItem(index);
    todoItem.editTodoItem(title, description, dueDate, priority);
  }

  function getTodoItem(index) {
    switch (_selectedProject) {
      case "All Task":
      case "Today":
      case "This Week":
      case "Important":
      case "Completed":
        let actualproject = _getActualTodoItem(index);
        return _projects.getTodoItem(
          actualproject.projectName,
          actualproject.todoActualIndex
        );
      default:
        return _projects.getTodoItem(_selectedProject, index);
    }
  }

  function setTodoStatus(status, index) {
    const todoItem = getTodoItem(index);
    todoItem.setTodoStatus(status);
  }

  function getAllTask() {
    const allTodos = _projects.getProjects();
    const allTask = [];
    for (let project in allTodos) {
      allTodos[project].forEach((todo) => {
        allTask.push(todo);
      });
    }
    return allTask;
  }

  function getTodayTasks() {
    const allTodos = _projects.getProjects();
    const todayTasks = [];
    for (let project in allTodos) {
      allTodos[project].forEach((todo) => {
        if (isToday(parseISO(todo.getTodoItem().dueDate))) {
          todayTasks.push(todo);
        }
      });
    }
    return todayTasks;
  }

  function getWeekTasks() {
    const allTodos = _projects.getProjects();
    const weekTasks = [];
    for (let project in allTodos) {
      allTodos[project].forEach((todo) => {
        if (isThisWeek(parseISO(todo.getTodoItem().dueDate))) {
          weekTasks.push(todo);
        }
      });
    }
    return weekTasks;
  }

  function getImportantTasks() {
    const allTodos = _projects.getProjects();
    const importantTasks = [];
    for (let project in allTodos) {
      allTodos[project].forEach((todo) => {
        if (todo.getTodoItem().priority === true) {
          importantTasks.push(todo);
        }
      });
    }
    return importantTasks;
  }

  function getCompletedTasks() {
    const allTodos = _projects.getProjects();
    const completedTasks = [];
    for (let project in allTodos) {
      allTodos[project].forEach((todo) => {
        if (todo.getTodoItem().status === true) {
          completedTasks.push(todo);
        }
      });
    }
    return completedTasks;
  }

  function _getActualTodoItem(index) {
    let _filteredItems = null;
    let projectName = null;
    let todoActualIndex = 0;
    let todoTitle = null;
    switch (_selectedProject) {
      case "All Task":
        _filteredItems = getAllTask();
        break;
      case "Today":
        _filteredItems = getTodayTasks();
        break;
      case "This Week":
        _filteredItems = getWeekTasks();
        break;
      case "Important":
        _filteredItems = getImportantTasks();
        break;
      case "Completed":
        _filteredItems = getCompletedTasks();
        break;
    }

    projectName = _filteredItems[index].getTodoItem().projectName;
    todoTitle = _filteredItems[index].getTodoItem().title;
    let allTodos = _projects.getProjectTasks(projectName);
    for (let todo of allTodos) {
      if (todo.getTodoItem().title === todoTitle) {
        break;
      }
      todoActualIndex++;
    }

    return { projectName, todoActualIndex };
  }

  return {
    getCompletedTasks,
    getImportantTasks,
    getWeekTasks,
    getTodayTasks,
    getAllTask,
    setTodoStatus,
    getSelectedProjectTasks,
    getProjects,
    getSelectedProject,
    setSelectedProject,
    createProject,
    createTodo,
    deleteProject,
    deleteTodoItem,
    editTodoItem,
    getTodoItem,
  };
})();

const screenController = (function () {
  const projectSection = document.querySelector("main > div:first-child");
  const taskSection = document.querySelector(".task-list");
  const projectDialog = projectSection.querySelector("dialog");
  const taskDialog = taskSection.querySelector("dialog");
  const projectList = projectSection.querySelector(".project-div");
  const taskList = taskSection.querySelector(".task-div");
  const projectNameInput = projectDialog.querySelector("input");
  let taskTitleInput = taskDialog.querySelector("input#title");
  let descriptionTextarea = taskDialog.querySelector("textarea#description");
  let dueDateInput = taskDialog.querySelector("input#duedate");
  let prioritySelect = taskDialog.querySelector("select#important");
  const taskSectionTitle = taskSection.querySelector("p");
  const formAddButton = taskDialog.querySelector(
    ".task-buttons button:first-child"
  );
  const addTaskButton = document.querySelector(".add-task").parentNode;
  let editItemIndex = null;

  const updateProjectList = () => {
    const projects = todoController.getProjects();
    projectList.textContent = "";
    for (const project in projects) {
      projectList.append(createProject(project));
    }
  };

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

  const updateTaskList = () => {
    taskSectionTitle.textContent = todoController.getSelectedProject();
    let project = todoController.getSelectedProjectTasks();
    taskList.textContent = "";
    project.forEach((todo, index) => {
      taskList.append(createTask(todo, index));
    });
  };

  const updateFilters = (filteredArray) => {
    taskSectionTitle.textContent = todoController.getSelectedProject();
    taskList.textContent = "";
    filteredArray.forEach((item, index) => {
      let listItem = createTask(item, index);
      taskList.append(listItem);
    });
  };

  function createTask(todo, index) {
    const todoItem = todo.getTodoItem();
    const listItem = document.createElement("li");
    listItem.dataset.index = index;
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = todo.getTodoItem().status;
    const taskTitle = document.createElement("p");
    taskTitle.textContent = `${todoItem.title}`;
    const detailsButton = document.createElement("button");
    detailsButton.textContent = "Details";
    const dueDatePara = document.createElement("p");
    const [year, month, day] = todoItem.dueDate.split("-");
    const formattedDate = format(new Date(year, month - 1, day), "do MMM");
    dueDatePara.textContent = `${formattedDate}`;
    const editSpan = document.createElement("span");
    editSpan.classList.add("edit");
    const deleteSpan = document.createElement("span");
    deleteSpan.classList.add("del");
    listItem.append(
      checkBox,
      taskTitle,
      detailsButton,
      dueDatePara,
      editSpan,
      deleteSpan
    );
    return listItem;
  }

  function updateDisplay() {
    switch (todoController.getSelectedProject()) {
      case "All Task":
        updateFilters(todoController.getAllTask());
        break;
      case "Today":
        updateFilters(todoController.getTodayTasks());
        break;
      case "This Week":
        updateFilters(todoController.getWeekTasks());
        break;
      case "Important":
        updateFilters(todoController.getImportantTasks());
        break;
      case "Completed":
        updateFilters(todoController.getCompletedTasks());
        break;
      default:
        updateTaskList();
        break;
    }
  }

  projectSection.addEventListener("click", (e) => {
    if (e.target.getAttribute("class") === "add add-project") {
      projectDialog.showModal();
    }

    if (e.target.getAttribute("class") === "project") {
      addTaskButton.style.display = "flex";
      todoController.setSelectedProject(e.target.textContent);
      updateTaskList();
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

    if (e.target.getAttribute("class") === "all-task") {
      todoController.setSelectedProject("All Task");
      updateFilters(todoController.getAllTask());
    }

    if (e.target.getAttribute("class") === "today") {
      todoController.setSelectedProject("Today");
      updateFilters(todoController.getTodayTasks());
    }

    if (e.target.getAttribute("class") === "week") {
      todoController.setSelectedProject("This Week");
      updateFilters(todoController.getWeekTasks());
    }

    if (e.target.getAttribute("class") === "important") {
      todoController.setSelectedProject("Important");
      updateFilters(todoController.getImportantTasks());
    }

    if (e.target.getAttribute("class") === "completed") {
      todoController.setSelectedProject("Completed");
      updateFilters(todoController.getCompletedTasks());
    }

    switch (e.target.getAttribute("class")) {
      case "all-task":
      case "today":
      case "week":
      case "important":
      case "completed":
        addTaskButton.style.display = "none";
        break;
    }
  });

  taskSection.addEventListener("click", (e) => {
    if (e.target.getAttribute("class") === "add add-task") {
      formAddButton.textContent = "Add";
      taskDialog.showModal();
    }

    if (e.target.textContent === "Cancel") {
      removeAttribute();
      formAddButton.style.display = "inline-block";
      taskDialog.close();
    }

    if (e.target.textContent === "Add") {
      todoController.createTodo(
        taskTitleInput.value,
        descriptionTextarea.value,
        dueDateInput.value,
        prioritySelect.value
      );
      resetTaskDialog();
      updateTaskList();
    }

    if (e.target.getAttribute("type") === "checkbox") {
      const todoIndex = e.target.parentNode.dataset.index;
      const todoStatus = e.target.checked;
      todoController.setTodoStatus(todoStatus, todoIndex);
      updateDisplay();
    }

    if (e.target.getAttribute("class") === "del") {
      const todoIndex = e.target.parentNode.dataset.index;
      todoController.deleteTodoItem(todoIndex);
      updateDisplay();
    }

    if (e.target.getAttribute("class") === "edit") {
      formAddButton.textContent = "Edit";
      const todoIndex = e.target.parentNode.dataset.index;
      const todoItem = todoController.getTodoItem(todoIndex).getTodoItem();
      taskTitleInput.value = todoItem.title;
      descriptionTextarea.value = todoItem.description;

      dueDateInput.value = todoItem.dueDate;
      prioritySelect.value = todoItem.priority;
      taskDialog.showModal();
      editItemIndex = todoIndex;
    }

    if (e.target.textContent === "Edit") {
      todoController.editTodoItem(
        taskTitleInput.value,
        descriptionTextarea.value,
        dueDateInput.value,
        prioritySelect.value,
        editItemIndex
      );
      resetTaskDialog();
      updateDisplay();
    }

    if (e.target.textContent === "Details") {
      const todoIndex = e.target.parentNode.dataset.index;
      const todoItem = todoController.getTodoItem(todoIndex).getTodoItem();
      taskTitleInput.value = todoItem.title;
      descriptionTextarea.value = todoItem.description;
      dueDateInput.value = todoItem.dueDate;
      prioritySelect.value = todoItem.priority;
      taskTitleInput.setAttribute("disabled", true);
      descriptionTextarea.setAttribute("disabled", true);
      dueDateInput.setAttribute("disabled", true);
      prioritySelect.setAttribute("disabled", true);
      formAddButton.style.display = "none";
      taskDialog.showModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    removeAttribute();
    formAddButton.style.display = "inline-block";
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
})();
