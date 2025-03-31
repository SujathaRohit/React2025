import { useState } from "react";

function CounterApp(){
    const[count, setCount]= useState(0);

    const increment= () => setCount(count+1);
    const decrement= () => {
        if(count>0)
        setCount(count-1);
    }
    const reset= () => setCount(0);

    return(
        <div style={{textAlign: "center"}}>
            <h2>Counter: {count}</h2>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default CounterApp;