import { useState, useEffect } from "react";

const ComponentUpdating = () =>{
    const[count, setCount]= useState(0);

    useEffect(()=>{
        console.log(`Count value: ${count}`);
    },[count])
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increase</button>
        </div>
    )
}
export default ComponentUpdating;
