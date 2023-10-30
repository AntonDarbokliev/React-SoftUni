import { Link } from "react-router-dom"
import style from './Navigation.module.css'

export const MainNavigation = () => {
    return (

        <nav className={style.navigation}>
        <ul>
            <li> <Link to={'/'}>Home</Link></li>
            <li><Link to={'/characters'}>Characters</Link></li>
            <li> <Link to={'/about'}>About</Link></li>
        </ul>
        </nav>
    )
}