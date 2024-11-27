import { Header } from "./components/Header.jsx";
import { Tabs } from "./components/Tabs.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { TodoInput } from "./components/TodoInput.jsx";
import { useState } from "react";

function App() {
 
  const [todos, setTodos] = useState([ { input: "started todo list" , completed: true },
    { input: "get up early", completed:false },
    { input: "sleep at 10pm", completed :true },])



    
    

    function handleAddTodo(newTodo){
      
        const newTodosList = [...todos,{input: newTodo , completed: false} ]
        setTodos(newTodosList)
      
    }

    function handleDoneTodo(index){
      const updatedTodos = todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: true };
        }
        return todo;
      });
      setTodos(updatedTodos);
    }

    function handleDeleteTodo(index){
      let newTodoList = todos.filter((val, valIndex)=>{
        return valIndex !== index
      })
      setTodos(newTodoList)
    }

    const [selectedTab, setSelectedTab] = useState('All')




  return (
    <>
      <Header todos={todos} />
      <Tabs   todos = {todos} selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}/>
      <TodoList todos  = {todos} selectedTab = {selectedTab} handleDoneTodo={handleDoneTodo} handleDeleteTodo = {handleDeleteTodo}/>
      <TodoInput handleAddTodo = {handleAddTodo}/>
    </>
  );
}

export default App;




