import { useState } from "react";
import './SimpleTodo.css';

function SimpleTodo(){
    const[tasks, setTasks]= useState([
        "Learn Maths Problems",
        "Finish Data science Project",
        "Finsih Javascript Task",
    ]);

      // Function to remove a task
   const handleRemoveTask= (indexToRemove) =>{
       const updatedTasks= tasks.filter((_, index)=> index!== indexToRemove);
       setTasks(updatedTasks);
   };

    return(
        <div>
            <h2>Todo List</h2>

            <ul>
                {tasks.map((task, index) =>(
                    <li key={index}>
                        {task}
                    <button onClick={() =>handleRemoveTask(index)}>Remove Task</button>
                    </li>
                )  )}
            </ul>
            
        </div>
    );
}
export default SimpleTodo;