import React from "react"
;const Greets= React.memo(({name})=>{
console.log(`Hey, ${name}`);
return <h2>Hey {name}!</h2>
});
const Greeting = ()=>{
    const[count, setCount]= React.useState(0);
    return(
        <div>
             <button onClick={()=> setCount(count+1)}>Increment {count}</button>
             <Greets name="John"/>
        </div>
    )
   
}
export default Greeting;