import { deleteTask } from "./delete.js";
import { completedTask } from "./complete.js";
import { todoList } from "./todoList.js";
export const addToLocalStorage = (todos) =>{
      localStorage.setItem('todos' , JSON.stringify(todos));
}

export const viewStorage = () => {
    let a = JSON.parse(localStorage.getItem('todos'));
    console.log(a);
    if(a == null){
        //do not do anything
    }
    else{
    a.forEach((element) => {
        todoList.push(element);
    })
    renderTodos(todoList);
    console.log(todoList);
    return todoList;
    }
}

export const renderTodos = (toDoList) => {
    
    document.forms.TaskList.tasks.value = "";
    todoList.forEach(function(element){
        const li = document.createElement("li");
        const span = document.createElement("span");
        const div = document.createElement("div");
        div.classList.add("div");
        span.innerHTML = element.description;
        if(element.complete == true){
            span.classList.add("strike");
        }
        li.id = element.taskId;
        li.classList.add("list");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("delete", "deleteButton");
        deleteButton.addEventListener('click', () => {
            deleteTask(li.id);
        });
        const completeButton = document.createElement("button");
        completeButton.innerHTML = "Completed";
        completeButton.classList.add("complete");
        completeButton.addEventListener('click' , (event) => {
            completedTask(event, li.id);
        })
        div.appendChild(completeButton);
        div.appendChild(deleteButton);
        li.appendChild(span);
        li.appendChild(div);
        return (document.getElementById("todoList").appendChild(li));    
    })
}



   




