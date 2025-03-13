import {useState} from 'react';

function UserGreeting({isLoggedIn}){
    // if(isLoggedIn){
    //     return <h2> Welcome back!</h2>
    // }else{
    //     return <h2> Please Login!</h2>
    // }
   // we can also write
   return <h2>{isLoggedIn? "Welcome back!" : "Please Login"}</h2>
}
function LoginLogout(){
    const[isLoggedIn, setIsLoggedIn]= useState(false);
    return (
        <div>
            <UserGreeting isLoggedIn={isLoggedIn} />
            <button 
            onClick={()=> setIsLoggedIn(!isLoggedIn)}
            style={{backgroundColor: isLoggedIn ? "green" : "red"}}
            >
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default LoginLogout;