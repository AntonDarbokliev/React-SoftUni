import { useEffect, useState } from "react"
import { Header } from "./components/Header/Header.jsx"
import { TodoList } from "./components/TodoList/TodoList.jsx"
import { AddTodoModal } from "./components/AddTodoModal/AddTodoModal.jsx";
import { TodoContext } from "./context/TodoContext.js";

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

  const onTodoAddClose = () => {
    setShowAddTodo(false)
  }

  const onTodoAddSubmit = async (text) => {
      const response = await fetch(baseUrl,{
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify({...text,isCompleted : false})
      })

      const result = await response.json()

      setShowAddTodo(false)
      setTodos(state => [...state,result])
  }

  const onTodoDeleteClick = (id) => {
        fetch(baseUrl + `/${id}`,{
          method : 'DELETE',
        })
        setTodos(state => state.filter(x => x._id !== id))
  }

  const onTodoComplete = async (id) => {
      const todo = todos.find(x => x._id === id)

      await fetch(`${baseUrl}/${id}`,{
        method : 'PUT',
        headers : {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({
          ...todo,
          isCompleted : !todo.isCompleted
        })
      })

      setTodos(state => state.map(x => x._id === id ? {...x,isCompleted : !x.isCompleted} : x))

  }

  const contextValue = {
    onTodoDeleteClick,
    onTodoComplete
  }

  return (
    <TodoContext.Provider value={contextValue}>
      <Header/>
      <TodoList 
      todos={todos}
       onTodoAddClick={onTodoAddClick}
       />
      <AddTodoModal show={showAddTodo} onTodoAddClose={onTodoAddClose} onTodoAddSubmit={onTodoAddSubmit}/>      
    </TodoContext.Provider>
  )
}

export default App
