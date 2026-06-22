import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [])
  const [editingId, setEditingId] = useState(null)

  const total = tasks.length
  const done = tasks.filter(task => task.completed ).length
  const notdone = tasks.filter(task => !task.completed ).length

  function handleadd() {
    if (input.trim() === "") return;

    if (editingId !== null) {
      setTasks(
        tasks.map(task =>
          task.id === editingId
            ? { ...task, task: input } : task
        )
      );
      setEditingId(null);
    }
    else {
      setTasks([...tasks, { id: Date.now(), task: input, completed: false }]);
    }
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

  function handledelet(id) {
    setTasks(
      tasks.filter(task => task.id !== id)
    );
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



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

            <button onClick={() => {
              setInput(task.task)
              setEditingId(task.id)
            }}>Edit</button>

            <button onClick={() => handledelet(task.id)}>Delet</button>

          </div>
        ))}





      </div>
    </>
  )
}

export default App
