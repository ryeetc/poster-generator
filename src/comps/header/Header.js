import "./Header.scss";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <h2 className="title">CatCringe Generator</h2>
            <nav className="nav">
                <NavLink className="nav__link" to="/">Home</NavLink>
                <NavLink className="nav__link" to="/about">About</NavLink>
            </nav>
        </header>
    );
}
export default Header