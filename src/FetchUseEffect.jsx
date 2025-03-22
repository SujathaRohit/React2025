import {useEffect, useState} from "react";

function FetchUseEffect(){
    const[users, setUsers]= useState([]);
    const[loading, setLoading]= useState(true);

    useEffect(()=>{
        const fetchUsers= async () =>{
            try{
                const response= await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok){
                   throw new Error(`Failed to fetch data: ${response.status}`);
                }
                const data= await response.json();
                setUsers(data);
                setLoading(false);
            }catch(err){
                console.error('Error fetching data', err);
            }
           
        }
        fetchUsers(); // Call the async function
    }, [])   // Runs only once when component mounts
    return(
        <div>
            <h2> Users List</h2>
            {loading ? 
            <p> Loading users data...</p>
            : users.map((user) =>(
                <li key={user.id}>{user.name}</li>
            ))
        }
        </div>
    )

}
export default FetchUseEffect;