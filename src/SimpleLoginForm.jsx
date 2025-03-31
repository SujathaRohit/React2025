import {useState} from "react";

function SimpleLoginForm(){
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");

    const handleChange= (event) =>{
        const{name, value}= event.target;
        
        if(name === "email") setEmail(value);
        if(name === "password") setPassword(value);
    }

    const handleSubmit= (event) =>{
        event.preventDefault();
        alert(` given email is ${email} and password is ${password}`);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    email:
                    <input type="email" name="email" value={email} onChange={handleChange} placeholder="enter email" />
                   <br/>
                    password:
                    <input type="password" name="password" value={password} onChange={handleChange} placeholder="enter password" /> <br />
                    <button type="submit">Submit</button>
                </label>
            </form>
        </div>
    )
}
export default SimpleLoginForm;