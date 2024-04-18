//import "./navbar.css";
import logo from '../../assets/logo_navbar.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <div><img src={logo} className="logo" alt="Logo de Syncro" /></div>
            <h1>Syncro</h1>
        <div className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Quiénes somos</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Cómo comprar</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <CartWidget />
        </nav>
    )
}

export default NavBar;