import "./Header.css";
import { Link } from "react-router-dom";

export function Header(){
    return (
        <header>
            <nav className="navbar">
                <div id="upperNav">
                    <div className="logoContainer">
                        <img src="/game-controller.png" alt="test" />
                    </div>
                    <ul className="navList">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/help'>Registrarse</Link></li>
                        <li><Link to='/account'>Iniciar Sesión</Link></li>
                    </ul>
                    <div className="userIconContainer">
                        <img src="/user.jpg" alt="test" />
                    </div>
                </div>
                <div id="lowerNav" >
                    <ul className="navList">
                        <li><Link to="/categories">Categorias</Link></li>
                        <li><Link to="/brands">Marcas</Link></li>
                        <li><Link to="/products?category=arcade-stick">Arcade Sticks</Link></li>
                        <li><Link to="/products?category=accesories">Accesorios</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}