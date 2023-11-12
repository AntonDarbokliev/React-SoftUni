import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CharacterEpisodes = () => {

const {id} = useParams()

const [episodes,setEpisodes] = useState([])

const baseUrl = 'https://rickandmortyapi.com/api/character'

useEffect(() => {
    fetch(baseUrl + `/${id}`)
        .then(res => res.json())
        .then(data => {
            setEpisodes(data.episode)
        })
},[id])

const episodeName = async (episode) => {
    const req = await fetch(episode)
    const res = await req.json()
    const data = `${res.name} - ${res.air_date}`
    return data
}

return(
    <ul>
    {/* {episodes.map(x => <li key={id}>{episodeName(x)}</li>)} */}
    </ul>
)

}