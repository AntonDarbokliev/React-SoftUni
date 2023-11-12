import { useState } from 'react'
import { MainNavigation } from './components/MainNavigation.jsx'
import style from './app.module.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Home.jsx'
import { CharactersList } from './components/CharactersList.jsx'
import { CharacterEpisodes } from './components/CharacterEpisodes.jsx'
function App() {

  return (
    <>
      <h1>Rick and Morty Catalog</h1>
      <MainNavigation/>

      <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/characters' element= {<CharactersList/>}></Route>
      <Route path='/about' element= {<h1>About</h1>}></Route>
      <Route path='/character/:id/episodes' element= {<CharacterEpisodes/>}></Route>
    </Routes>  
    </>
  )
}

export default App

