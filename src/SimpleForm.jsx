import {useState} from "react";
function SimpleForm(){
  const[name, setName]= useState(" ");

  const handleChange= (event) =>{
    setName(event.target.value);
  }
  const handleSubmit= (event) =>{
    event.preventDefault();
    alert(`Name: ${name}`);
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  )
}
export default SimpleForm;