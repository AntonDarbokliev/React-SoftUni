import { useEffect, useState } from "react"
import { Header } from "./components/Header/Header.jsx"
import { TodoList } from "./components/TodoList/TodoList.jsx"
import { AddTodoModal } from "./components/AddTodoModal/AddTodoModal.jsx";

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {

  const [todos,setTodos] = useState([])
  const [showAddTodo,setShowAddTodo] = useState(false)

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(result => {
        setTodos(Object.values(result))
      })
  },[])

  const onTodoAddClick = () => {
    setShowAddTodo(true)
  }

  return (
    <>
      <Header/>
      <TodoList todos={todos} onTodoAddClick={onTodoAddClick}/>
      <AddTodoModal show={showAddTodo}/>      
    </>
  )
}

export default App
