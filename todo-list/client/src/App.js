import { useEffect, useState } from "react";

import Add from "./components/Add.js";
import Footer from "./components/Footer.js";
// import Loading from "./components/Loading.js";
import Navigation from "./components/Navigation.js";
import TodoList from "./components/TodoList.js";

function App() {
  
  const [todos,setTodos] = useState([])


  const toggleStatus = (id) => {
    setTodos(state => state.map(todo => todo._id === id ? {...todo, isCompleted : !todo.isCompleted} : todo))
  }

  const add = () => {
    const lastId = Number((todos[todos.length - 1]._id).slice(5));
    console.log(lastId);
    let text;
    text = prompt('Task name:');
    if(text === null){
      return 
    }
    const newTask = { _id: `todo_${lastId + 1}` , text, isCompleted: false };

    setTodos(state => [...state,newTask]);
};
  
  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
    .then((res) => res.json())
    .then((data) => {
      const result = Object.values(data)
      setTodos(result)
    });
  }, []);
  
  return (
    <div>
      <Navigation />

      {/* <!-- Main content --> */}
      <main className="main">
        {/* <!-- Section container --> */}
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <Add add={add}/>

          <div className="table-wrapper">
            {/* <Loading /> - DONT FORGET TO UNCOMMENT  */}

            <TodoList todos={todos} toggleStatus = {toggleStatus}/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
