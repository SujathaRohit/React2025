import { useState } from "react";
import useLocalStorage from './useLocalStorage';

const NameSaver= ()=>{
  const[name, setName]= useLocalStorage('name', '');

  return(
    <div>
      <h2>Stored Name: {name}</h2>
      <input type="text" placeholder="enter name here" onChange= {(e)=> setName(e.target.value)}/>
    </div>
  )
}
export default NameSaver;
