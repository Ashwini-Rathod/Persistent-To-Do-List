import { createNewError } from "./error-handelling.js";
export const isStringEmpty = (str) => {
    if(str.length !== 0){
        return true;
    }
    else{
        console.warn(createNewError("Empty String" , "Please enter a valid input"));  
        window.alert("Input should start with an alphabet");
        document.forms.TaskList.tasks.value = "";
    }
}

export const isTag = (str) => {
    if(str.match(/[A-Za-z]/) ){
        return true;
    }
    else{
       console.warn(createNewError("Invalid input" , "Please enter a valid input"));
       window.alert("Input should start with an alphabet");
       document.forms.TaskList.tasks.value = "";
    }
}

export const isInputValid = (str) => {
    if(isStringEmpty(str) && isTag(str)){
        return new Error("Please provide an valid input");
    }
     
}

