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


  const onSave = async (e,firstName,lastName,email,phoneNumber,imageUrl,country,city,street,streetNumber) => {
    e.preventDefault()
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      imageUrl,
      address: {
        country,
        city,
        street,
        streetNumber
      }
    }
    try{
      const createdUser = await userService.create(data)
      setUsers(state => [...state,createdUser])
    }catch(err){
      console.log(err);
    }
  }

 const onEdit = async(e,userId,firstName,lastName,email,phoneNumber,imageUrl,country,city,street,streetNumber) => {
  e.preventDefault()
  const data = {
    firstName,
    lastName,
    email,
    phoneNumber,
    imageUrl,
    address: {
      country,
      city,
      street,
      streetNumber
    }
  }

  try{
    const editedUser = await userService.edit(userId,data)
    console.log('Edited user: ' + editedUser);
    setUsers(state => state.map(e => e._id === userId ? editedUser : e))
  }catch(err){
    console.log(err);
  }
 }

  return (
    <>
          <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users = {users} onSave = {onSave} onEdit = {onEdit}/>
        </section>
        <Pagination />
      </main>
          <Footer />
    </>
  );
}

export default App;
