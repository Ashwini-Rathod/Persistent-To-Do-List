import { completedTask } from "../helper/complete.js";
import { deleteTask } from "../helper/delete.js";
export const Task = (taskObject) => {
    const ul = document.getElementById("todoList"); 
    const li = document.createElement("li");
    const span = document.createElement("span");
    const div = document.createElement("div");
    div.classList.add("div");
    li.id = taskObject.taskId;
    li.classList.add("list");
    span.innerHTML = taskObject.description;
    
    document.forms.TaskList.tasks.value = "";
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete");
    completeButton.innerHTML = "Completed";
    completeButton.classList.add("complete");
    deleteButton.addEventListener('click' , ()=>{
        deleteTask(li.id);
    })
    if(taskObject.complete == true){
        span.classList.add("strike");
    }
    completeButton.addEventListener('click', (event)=>{
       completedTask(event, li.id);
            
    })
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li);
    return ul;      
};


    

