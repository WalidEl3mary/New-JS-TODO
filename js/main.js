let taskInput = document.getElementById('taskInput');
let taskAddBtn = document.getElementById('taskAddBtn');
let noTask = document.getElementById('noTask');
let allTasks = document.getElementById('allTasks');
let invalidMessage = document.getElementById('invalidMessage');
let closeInvalidMessage = document.getElementById('closeInvalidMessage');

let closeInvalidMessagefun =()=> {
    invalidMessage.classList.add('none');
}

closeInvalidMessage.addEventListener('click' , closeInvalidMessagefun)

let addTask = ()=>{
    taskData = taskInput.value;
    if (taskData.trim()=='' || taskInput.value.length <3) {
        invalidMessage.classList.remove('none');
    } else {
        noTask.classList.add('none');
        allTasks.innerHTML += `
        <div class="alert alert-info"> ${taskData}
        <button class="delete btn btn-danger btn-sm float-right"> Remove </button>
        </div>`;
        taskInput.value = "";
    }

}

taskAddBtn.addEventListener('click' , addTask);

document.addEventListener('click' , function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        if (allTasks.children.length == 0 ) {
            noTask.classList.remove('none');
        }
    }
});