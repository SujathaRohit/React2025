import { useState } from "react";
import './SimpleTodo.css';

function SimpleTodo(){
    const[tasks, setTasks]= useState([
        "Learn Maths Problems",
        "Finish Data science Project",
        "Finsih Javascript Task",
    ]);
    return(
        <div>
            <h2>Todo List</h2>
            <ul>
                {tasks.map((task, index) =>{
                       return <li key={index}>{task}</li>

                       /*or  {tasks.map((task, index) => (
                        <li key={index}>{task}</li> */
                    })}
            </ul>
        </div>
    )
}
export default SimpleTodo;