import style from './CharacterListItem.module.css'

export const CharacterListItem = ({
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
            </ul>
        <img src={image} alt="avatar image" className={style.image}/>
        </section>

        
        
        </>
    )
}