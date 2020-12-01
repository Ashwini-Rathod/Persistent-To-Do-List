import {formSubmission} from "./helper/formSubmission.js";
import { viewStorage } from "./helper/local-storage.js";
window.onload = () =>{
    viewStorage();
    document.forms.TaskList.addEventListener('submit' , formSubmission);
}












