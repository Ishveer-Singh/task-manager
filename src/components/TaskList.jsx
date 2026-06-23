import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, handledelet, setInput, setEditingId }) {

    return (
        <>

            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    handledelet={handledelet}
                    setInput={setInput}
                    setEditingId={setEditingId}
                />
            ))}


        </>
    )
}
export default TaskList;