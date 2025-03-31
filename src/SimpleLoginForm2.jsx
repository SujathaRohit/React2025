import {useRef} from "react";

function SimpleLoginForm2(){
    const emailInput=useRef(null);
    const passwordInput= useRef(null);


    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Email is: ${emailInput.current.value} and Password is: ${passwordInput.current.value}`);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    email:
                    <input type="email" placeholder="enter email" ref={emailInput}/> <br />
                    password
                    <input type="password" placeholder="enter password" ref={passwordInput} /> <br />
                    <button type="submit">Submit</button>
                </label>
            </form>
        </div>
    )
}
export default SimpleLoginForm2;