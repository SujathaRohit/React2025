import {useEffect} from "react";

const ComponentMounting = () =>{
    useEffect(()=>{
        console.log('Component Mounted');
    }, []);  // Empty array means this runs only once
    
    return <h1>Hello, browser</h1>
}
export default ComponentMounting;