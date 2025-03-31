function TaskList() {
    const tasks = [
        { id: 1, text: "Finish Mathematics Problems" },
        { id: 2, text: "Finish Science Task" },
        { id: 3, text: "Finish English Assignment" }
    ];

    return (
        <>
            <h3>Task List</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.text}</li>  
                ))}
            </ul>
        </>
    );
}
export default TaskList;