import React from "react";

const TodoItem =React.memo(({task})=>{
  console.log(`rendered, ${task}`);
  return <li>{task}</li>
});
const TodoList = ()=>{
  const[tasks, setTasks]= React.useState(["Learn React", "Build a Project"]);
  const[count, setCount]= React.useState(0);

  return(
    <div>
      <button onClick= {()=>setCount(count+1)}>Increment {count}</button>
      <ul>
        {
          tasks.map((task, index)=>(
            <TodoItem key={index} task={task} />
          ))
        }
      </ul>
    </div>
  )
}
export default TodoList;