import style from './CharacterListItem.module.css'
import {Link} from 'react-router-dom'

export const CharacterListItem = ({
    id,
    name,
    status,
    species,
    origin,
    image
}) => {
    return (
        <> 
        <section>
            <ul className={style.charactersList}>
        <li>Name: {name}</li>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Origin: {origin.name}</li>
        <button className={style.episodesBtn}><Link to={`/character/${id}/episodes`} className={style.episodes}>View all character episodes</Link></button>
            </ul>
        <img src={image} alt="avatar image" className={style.image}/>
        </section>

        
        
        </>
    )
}