import { NavLink } from "react-router-dom";

function Header() {

    return (
        <header>
            <nav>
                <section className="logo-nav">
                    <NavLink to='/'>🔫 Sommarleksaker</NavLink>
                </section>
                <section className="main-nav">
                    <NavLink to='/products'>Produkter</NavLink>
                    <NavLink to='/about-us'>Om oss</NavLink>
                    <NavLink to='/customer-support'>Kundkontakt</NavLink>
                </section>
                <section className="side-nav">
                    <NavLink to="/cart"><span className="material-symbols-outlined"> shopping_bag</span></NavLink>
                    <NavLink to="/admin"><span className="material-symbols-outlined">admin_panel_settings</span></NavLink>
                </section>
            </nav>
        </header>
    )
} 

export default Header