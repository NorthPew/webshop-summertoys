import { NavLink } from "react-router-dom";

function Header() {

    return (
        <header>
            <nav>
                <NavLink to='/'>Sommarleksaker</NavLink>
                <NavLink to='/products'>Produkter</NavLink>
            </nav>
        </header>
    )
} 

export default Header