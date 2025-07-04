import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export function Header() {
    const { user } = useAuth();
    const { countItems, clearCart } = useCart();

    const userNavLinks = () => {
        if (user !== null && user.role === 0) {
            return (
                <>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/admin/dashboard'>Dashboard</Link></li>
                    <li><Link to='/account'>Mi cuenta</Link></li>
                </>
            )
        } else if (user !== null) {
            return (
                <>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/account'>Mi cuenta</Link></li>
                </>
            )
        } else {
            return (
                <>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/register'>Registrarse</Link></li>
                    <li><Link to='/login'>Iniciar Sesion</Link></li>
                </>
            )
        }

    }

    return (
        <header>
            <nav>
                <div id="upperNav">
                    <Link to='/'>
                        <div className="logoContainer">
                            <img src="/game-controller.png" alt="test" />
                        </div>
                    </Link>
                    <ul className="navList">
                        {
                            userNavLinks()
                        }
                        <li>
                            <div id="cartButtonContainer">
                                <button className="btn"><i className="fa-solid fa-cart-shopping" id="cartIcon"></i></button>
                                <p>{countItems() > 0 ? `(${countItems()})` : ""}</p>
                            </div>
                        </li>
                    </ul>
                    {
                        <div className="userIconContainer">
                            <img src={user ? `/${user.userImg}` : "/default-user.png"} alt="test" />
                        </div>
                    }
                </div>
                <div id="lowerNav" >
                    <ul className="navList">
                        <li className="dropdown">
                            <Link to={'/products'}>
                                Productos
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link to={'#'} className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </Link>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Categoria 1</a></li>
                                <li><a className="dropdown-item" href="#">Categoria 2</a></li>
                                <li><a className="dropdown-item" href="#">Categoria 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <Link to={'#'}>
                                Arcade Sticks
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                Leverless
                            </Link>
                        </li>
                        <li>
                            <Link to={'#'}>
                                Accesorios
                            </Link>
                        </li>
                        <button onClick={() => {
                            clearCart()
                        }}>Limpiar Carrito</button>
                    </ul>
                </div>
            </nav>
        </header>
    )
}