const todoForm = document.querySelector("#todo-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const todoStatus = document.querySelector("#todo-status");
const removeButton = document.getElementById("remove-all");
let tasks = []
let nextId = 1

const renderTasks = ()=>{
    taskList.replaceChildren();
    tasks.forEach((task) => {
        const item = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        const text = document.createElement("span");

        item.className = "flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"

        label.className = "flex min-w-0 flex-1 cursor-pointer items-center gap-3"

        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.className = "h-4 w-4 shrink-0 accent-blue-600";

        text.textContent = task.text
        text.className = task.completed ? "min-w-0 break-words text-slate-400 line-through" : "min-w-0 break-words text-slate-800"

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            text.classList.toggle("line-through", task.completed)
            text.classList.toggle("text-slate-400", task.completed)
            text.classList.toggle("text-slate-800", !task.completed)
            updateStatus()
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button"
        deleteButton.textContent = "Delete"
        deleteButton.className = "shrink-0 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
        deleteButton.setAttribute("aria-label", "Delete task: " + task.text);

        deleteButton.addEventListener("click", () => {
            tasks = tasks.filter((item) => item.id !== task.id)
            renderTasks()
            taskInput.focus()
        });

        label.append(checkbox, text)
        item.append(label, deleteButton)
        taskList.appendChild(item)
    });
    updateStatus()
}
const updateStatus = ()=>{
    const completedCount = tasks.filter((task) => task.completed).length;
    todoStatus.textContent = tasks.length ? `${completedCount} of ${tasks.length} tasks completed` : "no tasks"
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const text = taskInput.value.trim();
    if(!text){
        todoStatus.textContent = "pls write task"
        taskInput.focus();
        return
    }

    tasks.push({ id: nextId, text: text, completed: false })
    nextId += 1
    taskInput.value = ""
    renderTasks()
    taskInput.focus()
});
renderTasks()

removeButton.addEventListener("click",()=>{
    console.log(tasks);
    tasks.forEach(element => {
        tasks = tasks.filter((item) => item.id !== element.id)
        renderTasks()
        taskInput.focus()
    });
    // renderTasks()
    // taskInput.focus()
    console.log(tasks);
    // taskInput.focus();
    
    
    
})
// todoForm.addEventListener("click",()=>{
//     tasks.forEach(element => {
//         tasks.pop(element);
//     });
//     console.log(tasks);
    
// })