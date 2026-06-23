function TaskInput({ input, setInput, handleadd, editingId }) {
    return (
        <>
            <div className="task-input-container">

                <input className="task-input" type="text" placeholder="Add task" value={input}
                    onChange={(e) => setInput(e.target.value)} />

                <button className="add-btn" onClick={handleadd}>{editingId ? "Update" : "Add"}</button>

            </div>

        </>
    )
}

export default TaskInput