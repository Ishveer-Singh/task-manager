import { useEffect, useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskItem from "./components/TaskItem";

function App() {
  const [input, setInput] = useState("")

  const [tasks, setTasks] = useState(() => {
    try {
      const data = localStorage.getItem("tasks");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const [editingId, setEditingId] = useState(null)
  const [filter, setFilter] = useState("all")

  const total = tasks.length
  const done = tasks.filter(task => task.completed).length
  const notdone = tasks.filter(task => !task.completed).length

  const filtertask = tasks.filter(task => {
    if (filter === "done") return task.completed;
    if (filter === "notdone") return !task.completed;
    return true;
  }
  )

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
      tasks.filter(task => task.id !== id));
  }

  function handledelcom() {
    setTasks(
      tasks.filter(task => task.completed === false));
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);



  return (
    <>
      <div>

        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="notdone">Not Done</option>
        </select>

        <button onClick={handledelcom}>Delete Completed</button>

        <TaskInput
          input={input}
          setInput={setInput}
          handleadd={handleadd}
          editingId={editingId} />

        <TaskList
          tasks={filtertask}
          toggleTask={toggleTask}
          handledelet={handledelet}
          setInput={setInput}
          setEditingId={setEditingId}
        />

      </div>
    </>
  )
}

export default App
