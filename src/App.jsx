import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])

  function handleadd() {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), task: input, completed: false }]);
    setInput("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ?
          { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>

      <div>


        <input type="text" placeholder="Add task" value={input}
          onChange={(e) => setInput(e.target.value)} />

        <button onClick={handleadd}>Add</button>

        {tasks.map((task, index) => (
          <div key={index}>

            <input type="checkbox" checked={task.completed}
              onChange={() => toggleTask(task.id)} />

            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.task}
            </span>

          </div>
        ))}



      </div>

    </>
  )
}

export default App
