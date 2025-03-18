import {useState} from 'react';

function UserGreeting({isLoggedIn}){
    return(
        <div>
             {isLoggedIn ? <h2> Welcome back!</h2> : <h2> Please Login!</h2>}
             {isLoggedIn && <p>You have Succesfully logged in</p>}
        </div>
    )
   
}

function LoginAndLogout(){
    const[isLoggedIn, setIsLoggedIn]= useState(false);
    return(
        <div>
            <UserGreeting isLoggedIn={isLoggedIn} /> 
            <button onClick={()=> setIsLoggedIn(!isLoggedIn)}
                style={{backgroundColor:isLoggedIn? "green" : "red"}}
                >
               {isLoggedIn ? "LogOut" : "LogIn"}
            </button>
        </div>
    )
}
export default LoginAndLogout;