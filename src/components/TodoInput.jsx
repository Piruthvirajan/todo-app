import { useState } from "react"
export function TodoInput(props){

    const {handleAddTodo}  = props

    const [input,setInput] = useState('')



    


    return(
        <div className="input-container">
            <input type="text" value={input} onChange={(e)=>{setInput( e.target.value)}} placeholder="Add Task" />

            

            <button onClick={()=>{
                if (!input) {return}
                handleAddTodo(input)
                setInput ('')}}><i className="fa-solid fa-plus"></i></button>


        </div>
    )
}