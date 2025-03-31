function NameListMapMethod(){
    const names=["Alice", "Bob", "John"];

    return(
        <div>
            <h2>Names List</h2>
           <ul>
            {names.map((name, index)=> (
                <li key={index}>{name}</li>
            ))}
            </ul>
        </div>
    )
}
export default NameListMapMethod;


  