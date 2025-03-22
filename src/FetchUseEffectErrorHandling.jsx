import { useEffect, useState } from "react";

function FetchUseEffectErrorHandling(){
  const[users, setUsers]= useState([]);
const[loading, setLoading]= useState(true);
const[error, setError]= useState(null);


useEffect(()=>{
  const fetchUsers= async () =>{
    try{
      const response= await fetch('https://jsonplaceholder.typicode.com/users');
      if(!response.ok){
        throw new Error(`Error in fetching data: ${response.status}`);
      }
      const data= await response.json();
      setUsers(data);
      
  }catch(error)
  {
    setError(error.message);
  }
  finally{
    setLoading(false);   // ✅ Ensure loading state is updated regardless of success or failure
  }
    }
     
    fetchUsers();  // ✅ Call the async function inside useEffect
}, []);

if(loading) return <p>Loading...</p>
if(error) return <p>Error: {Error}</p>
{
  return(
    <div>
      <h2> Users List</h2>
      <ul>
        {
           users.map((user) =>(
            <li key={user.id}>{user.name}</li>)
        )}
      </ul>
     
    </div>
  )
}
}

export default FetchUseEffectErrorHandling;