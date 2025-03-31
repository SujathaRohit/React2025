import { useState } from "react";

function DynamicSimpleTodo(){
    const[tasks, setTasks]= useState([
        "Finish JS tasks",
        "Finish React tasks",
    ]);
    const[newTask, setNewTask]= useState("");

    const handleRemoveTask= (indexToRemove) => {
      const updatedTasks= tasks.filter((_, index) => index!== indexToRemove);
      setTasks(updatedTasks);
    };

    const handleChange = (event) =>{
        setNewTask(event.target.value);
    };
    
    const handleAddTask= ()=>{
        if(newTask.trim()!=""){
            setTasks([...tasks, newTask]); //Add new task to the list
            setNewTask(""); //clear input field after adding
        }
       

    } 

    return(
        <div>
            <h2> Todo lists</h2>
           
                <ul>
                    {
                       tasks.map((task, index)=>(
                        <li key={index}>
                            {task}
                            <button onClick={()=>handleRemoveTask(index)}>Remove Task</button>
                            </li>
                        
                       ))
                    }
                </ul>
            <input type="text" placeholder="add task here.." value={newTask} onChange={handleChange} />
            <button onClick={handleAddTask}>Add Task</button>
           
           
        </div>
    )
}
export default DynamicSimpleTodo;