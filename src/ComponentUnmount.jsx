import { useEffect} from "react";

const ComponentUnmount = () =>{
    useEffect(()=>{
        console.log('Component mounted');

        return () =>{
            console.log('cleanups the component');
        };
    }, []);
    return <h1>Hello, World!</h1>; // ✅ Return JSX so the component properly mounts
};

export default ComponentUnmount;

