import { useState } from "react";


export const Kanban = () => {
    const [tasks, setTasks] = useState<{id: number, title: string, status: 'todo' | 'inProgress' | 'done'}[]>([]);
    const [newTask, setNewTask] = useState('');

    const handleMoveTask = (id: number, newStatus: 'todo' | 'inProgress' | 'done' ) => {
        setTasks((prevTasks) => prevTasks.map(task => task.id === id ? {...task, status: newStatus} : task));
    }
    const removeTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
    }
    return(
        <div className="kanban" >
            <h1>Kanban Board</h1>
            <div className="kanban-board" style={{padding: '20px', display: 'flex' ,  width: '100%', height: '400px', border: '1px solid black',justifyItems:'flex-start' ,borderRadius: '5px', backgroundColor: '#f0f0f0'}}>
                
                <div className="kanban-column" style={{display: 'flex', justifyContent: 'flex-start', flex:1 , flexDirection: 'column', alignItems: 'center', }}>
                    <h2>To Do</h2>
                    <ul>
                        {tasks.filter(task => task.status === 'todo').map(task => (
                            <li key={task.id} style={{cursor: 'pointer'}} onClick={() => handleMoveTask(task.id, 'inProgress')}>
                                {task.title}
                            </li>
                        ))}
                    </ul>
                   
                </div>  
                <div className="kanban-column" style={{display: 'flex', flex:1 , flexDirection: 'column', alignItems: 'center'}}>
                    <h2>In Progress</h2>
                    <ul>    
                        {tasks.filter(task => task.status === 'inProgress').map(task=>(
                            <li key ={task.id} style={{cursor: 'pointer'}} onClick={()=>  handleMoveTask(task.id, 'done')}>
                                {task.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="kanban-column" style={{display: 'flex', flex:1, flexDirection: 'column', alignItems: 'center'}}>
                    <h2>Done</h2>
                    <ul>
                        {tasks.filter(task => task.status === 'done').map(task => (
                            <li key={task.id} style={{cursor: 'pointer'}} onClick={() => removeTask(task.id)}>
                                {task.title}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <form
                style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}
                onSubmit={(e) => {
                    e.preventDefault();
                    if (newTask.trim() === '') {
                        return;
                    }
                    setTasks([...tasks, {id: tasks.length + 1, title: newTask, status: 'todo'}]);
                    setNewTask('');
                }}
            >
                <input type="text" placeholder="New Task" className="new-task-input" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button type="submit" className="add-task-btn">Add Task</button>
            </form>
        </div>
    )
}