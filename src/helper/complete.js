export const completedTask = (event, id) => {
    let span = event.target.parentElement.parentElement.firstElementChild;
    if(span.classList[0] == "strike"){
        span.classList.remove("strike");
        let todos = JSON.parse(localStorage.getItem('todos'));
        console.log(todos);
        let todo = todos.find((element) => {
         
            return element.taskId == id;
        })
        todo.complete = !todo.complete;
        console.log(todo);
        
        localStorage.setItem('todos' , JSON.stringify(todos));   
    }
    else{
        span.classList.add("strike");
         let todos = JSON.parse(localStorage.getItem('todos'));
         console.log(todos);
         let todo = todos.find((element) => {
            return element.taskId == id;
        })
        todo.complete = !todo.complete;
        console.log(todo);;
        localStorage.setItem('todos' , JSON.stringify(todos));

    }     
}