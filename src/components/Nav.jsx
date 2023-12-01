import { NavLink } from "react-router-dom";
import './Nav.scss'

const Nav = () => {
    return ( 
        <nav className="sticky">
            <NavLink to="/">
                <img className="home_button" src="./../beer_home_icon.png" alt="Home icon" />
            </NavLink>
        </nav>
     );
}
 
export default Nav;