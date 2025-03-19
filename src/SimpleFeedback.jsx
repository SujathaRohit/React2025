import {useState} from "react";

function SimpleFeedback(){
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[message, setMessage]= useState("");

    const handleChange= (event) =>{
        const{name, value}= event.target;

        if(name === "name") setName(value);
        if(name === "email") setEmail(value);
        if(name === "message") setMessage(value);
    }
    const handleSubmit= (event) =>{
        event.preventDefault();
        alert(`name: ${name}
            email: ${email}
            message: ${message}
            `)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                <input type="text" name="name" placeholder="Enter name" onChange={handleChange}/> <br /> <br />
                Email:
                <input type="email"  name="email" placeholder="Enter email" onChange={handleChange} /> <br /> <br />
                Message:
                <textarea name="message" placeholder="Enter message" onChange={handleChange}/> <br /> <br />
                <button type="submit">Submit</button>
                </label>
                
            </form>
        </div>
    )
}
export default SimpleFeedback;