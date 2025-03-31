import {useState} from "react";

function ToggleButton(){
  const[isOn, setIsOn]= useState(false);

  return(
      <button
       onClick={()=>setIsOn(!isOn)} //toggle state between true and false
      style={{
        padding: "10px 20px", 
        fontSize: "18px",
        backgroundColor: isOn ? "green" : "red",
        color: "white",
        cursor: "pointer",
        }}>
        {isOn ? "ON" : "OFF"}
        </button>
 
  );
}
export default ToggleButton;