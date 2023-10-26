import "./App.css";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Search } from "./components/Search.jsx";
import { UserList } from "./components/UserList.jsx";
import { Pagination } from "./components/Pagination.jsx";
import { useEffect, useState } from "react";
import * as userService from "./services/userService.js";
function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAll()
      .then(setUsers)
      .catch( err => {
        console.log('Error ' +  err);
      })
  }, []);

  return (
    <>
          <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users = {users}/>
        </section>
        <Pagination />
      </main>
          <Footer />
    </>
  );
}

export default App;
