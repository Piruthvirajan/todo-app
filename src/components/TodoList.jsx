import {TodoCard} from './TodoCard.jsx'
import { useState } from 'react'


export function TodoList(props){
    const {todos,selectedTab} = props
    
    
    const filterTodosList = selectedTab === 'All' ? todos : selectedTab === 'Open' ? todos.filter((val)=>{return(!val.completed)}) : todos.filter((val)=>{return(val.completed)}) 


    return(
        
        filterTodosList.map((todoTask , todoIndex) => {
        
           
            
        return <TodoCard key={todoIndex} filterTodosList = {filterTodosList} todoIndex = {todoIndex}  {...props}/>
    })

    )
    

    
    
}