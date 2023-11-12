import { useEffect, useState } from "react"
import { CharacterListItem } from "./CharacterListItem.jsx";

const baseUrl = 'https://rickandmortyapi.com/api/character'

export const CharactersList = () => {
const [characters, setCharacters] = useState([]);

useEffect(() => {
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            setCharacters(data.results)
        })
        console.log(characters);
},[]);

    return (
        <>
            <h1>Rick and Morty Characters</h1>

            <ul>
                {characters.map(x => <CharacterListItem key={x.id} {...x}/>)}
            </ul>

        </>
    )
}