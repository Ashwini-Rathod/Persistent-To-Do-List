import { taskConstructor } from "./task-constructor.js";
import { Task } from "../components/task.js";
import { todoList } from "../helper/todoList.js";
import { isInputValid } from "./inputValidation.js";
import { addToLocalStorage } from "./local-storage.js";
export const formSubmission = (event) => {
    event.preventDefault();
    if(isInputValid(document.forms.TaskList.tasks.value)){
        const taskObject = new taskConstructor(document.forms.TaskList.tasks.value);
        console.log("New Task", taskObject);
        Task(taskObject);
        todoList.push(taskObject);
        console.log(todoList);
        addToLocalStorage(todoList);   
    } 
}


