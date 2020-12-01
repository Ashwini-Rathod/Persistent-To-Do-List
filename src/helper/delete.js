import { todoList } from "./todoList.js";
var index;
export const findById = (id) => {
    todoList.filter((element) => {
        if(element.taskId == id){
            index = todoList.indexOf(element);
            console.log(index);
        }
    })
    return index;
}
export const deleteTask = (id) => {
    let indexFound = findById(id);
    console.log(indexFound);
    let spliceResult = todoList.splice(indexFound, 1);
    console.log(spliceResult);
    let todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);
    document.getElementById(id).remove();
    localStorage.setItem("todos", JSON.stringify(todoList));
}
