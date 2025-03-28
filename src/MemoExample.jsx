import {useState, useMemo} from "react";

const SlowFunction= (num)=>{
  console.log('Slow function');
  let sum=0;
  for(let i=0; i<=num;i++){
    sum=sum+i;
  }
  return sum;
}
const MemoExample = () =>{
  const[count, setCount]= useState(0);
  const[number, setNumber]= useState(1000000);

  const result= useMemo(()=>SlowFunction(number), [number]);
  return(
    <div>
      <h2>Sum: {result}</h2>
      <button onClick={()=> setCount(count+1)}>Increment {count}</button>
    </div>
  )
}
export default MemoExample;