
import { useState } from "react";
import "./todolist.css";

export const ToDoList = () => {
    const [tasks, setTasks] = useState<string[]>(['launry','dishes','vacuum']);
    const [input, setInput] = useState<string>("");
  return (
    <div className="todolist">
        <div>todolist</div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a task"/>
        <button onClick={() => {input.trim() !=="" && setTasks([...tasks,input]); setInput("");}}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <ul key={index} onClick={() => setTasks(tasks.filter((_,i) => i !== index))} style={{ cursor: 'pointer' }}>
              {task}
            </ul>
          ))}
        </ul>
    </div>
    );
};