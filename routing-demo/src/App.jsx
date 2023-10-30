import { useState } from 'react'
import { MainNavigation } from './components/MainNavigation.jsx'
import style from './app.module.css'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
      <h1>Rick and Morty Catalog</h1>
      <MainNavigation/>

      <Routes>
      <Route path='/' element= {<h1>Home</h1>}></Route>
      <Route path='/characters' element= {<h1>Characters</h1>}></Route>
      <Route path='/about' element= {<h1>About</h1>}></Route>
    </Routes>  
    </>
  )
}

export default App

