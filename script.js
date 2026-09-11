let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task,index)=>{
        let li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <div class="actions">
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        list.appendChild(li);
    });
}

function addTask(){
    let input = document.getElementById("taskInput");

    if(input.value.trim()!=""){
        tasks.push(input.value);
        input.value="";
        saveTasks();
        displayTasks();
    }
}

function editTask(index){
    let newTask = prompt("Edit task:", tasks[index]);
    if(newTask){
        tasks[index]=newTask;
        saveTasks();
        displayTasks();
    }
}

function deleteTask(index){
    tasks.splice(index,1);
    saveTasks();
    displayTasks();
}

displayTasks();