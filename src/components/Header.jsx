import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export function Header() {
    const {user} = useAuth();
    
    const userIcon = () =>{
        if(user == null){
            return (
              <div className="userIconContainer">
                <img src="/default-user.png" alt="test" />
              </div>
            );
        }else{
            return (
                <div className="userIconContainer">
                    <img src={`/${user.userImg}`} alt="test" />
                </div>
            );
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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/register'>Registrarse</Link></li>
                        <li><Link to='/login'>Iniciar Sesión</Link></li>
                    </ul>
                    {
                        userIcon()
                    }
                </div>
                <div id="lowerNav" >
                    <ul className="navList">
                        <li className="dropdown">
                            <Link to={'#'} className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Marcas
                            </Link>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Marca 1</a></li>
                                <li><a className="dropdown-item" href="#">Marca 2</a></li>
                                <li><a className="dropdown-item" href="#">Marca 3</a></li>
                            </ul>
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
                    </ul>
                </div>
            </nav>
        </header>
    )
}