import {useRef} from "react";

function UnControlledComponentUseRef(){
    const nameInput=useRef(null); //creating useRef
    const emailInput= useRef(null);

    const handleSubmit= (event) =>{
        event.preventDefault();
       alert(`Entered name is, ${nameInput.current.value} and email is ${emailInput.current.value}`);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" ref={nameInput} placeholder="Enter name" /> 
                    <input type="email" ref={emailInput} placeholder="Enter email" />
                    <button type="submit"> Submit</button>
                </label>
            </form>
        </div>
    )
}
export default UnControlledComponentUseRef;