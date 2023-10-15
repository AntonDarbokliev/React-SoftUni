import { useEffect, useState } from "react";

import Add from "./components/AddTodo.js";
import Footer from "./components/Footer.js";
// import Loading from "./components/Loading.js";
import Navigation from "./components/Navigation.js";
import TodoList from "./components/TodoList.js";

function App() {
  
  const [todos,setTodos] = useState([])


  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((res) => res.json())
      .then((data) => {
        const result = Object.values(data)
        setTodos(result)
        console.log(todos);
      });
  }, [todos]);

  return (
    <div>
      <Navigation />

      {/* <!-- Main content --> */}
      <main className="main">
        {/* <!-- Section container --> */}
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <Add />

          <div className="table-wrapper">
            {/* <Loading /> - DONT FORGET TO UNCOMMENT  */}

            <TodoList todos={todos}/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
