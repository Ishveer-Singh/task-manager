function TaskItem({ task, toggleTask, handledelet, setInput, setEditingId }) {
    return (
        <div className="task-item">

            <input type="checkbox" checked={task.completed}
                onChange={() => toggleTask(task.id)} />

            <span className="task-text" style={{ textDecoration: task.completed ? "line-through" : "none",
                 opacity: task.completed ? 0.6 : 1
             }}>
                {task.task}
            </span>

            <button className="edit-btn" onClick={() => {
                setInput(task.task)
                setEditingId(task.id)
            }}>Edit</button>

            <button className="delete-btn" onClick={() => handledelet(task.id)}>Delet</button>



        </div>
    )
}

export default TaskItem