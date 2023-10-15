import Add from "./components/AddTodo.js";
import Footer from "./components/Footer.js";
// import Loading from "./components/Loading.js";
import Navigation from "./components/Navigation.js";
import TodoList from "./components/TodoList.js";

function App() {
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

            <TodoList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
