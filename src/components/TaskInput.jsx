function TaskInput({ input, setInput, handleadd, editingId }) {
    return (
        <>

            <input type="text" placeholder="Add task" value={input}
                onChange={(e) => setInput(e.target.value)} />

            <button onClick={handleadd}>{editingId ? "Update" : "Add"}</button>



        </>
    )
}

export default TaskInput