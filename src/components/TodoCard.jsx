export function TodoCard(props){
    const {todos, todoIndex,filterTodosList,handleDeleteTodo,handleDoneTodo} = props
    const todo = filterTodosList[todoIndex]
    



    return(
        <div className="card todo-item">
        <p>{todo.input}</p>
        <div className="todo-buttons">
        <button disabled = {todo.completed} onClick={() => handleDoneTodo(todoIndex)} ><h6>Done</h6> </button>
        <button onClick={()=>{handleDeleteTodo(todoIndex)}}> <h6>Delete</h6> </button>
        </div>
        
        
        </div>
    )
}