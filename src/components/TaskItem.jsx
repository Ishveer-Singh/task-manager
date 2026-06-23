function TaskItem({ task, toggleTask, handledelet, setInput, setEditingId }) {
    return (
        <div>

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
    )
}

export default TaskItem