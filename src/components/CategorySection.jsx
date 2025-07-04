import { Link } from "react-router-dom"
import './CategorySection.css'

const CategorySection = () => {
    return (
        <section id="categorySection">
            <div className="categoryContainer">
                <figure>
                    <img src="./arcade-stick.jpg" alt="" className="categoryImg" />
                </figure>
                <div className="categoryContainerText">
                    <h5 className="">Productos</h5>
                    <p className="">Vea todos los productos que tenemos para ofrecer</p>
                    <Link to={"/products"} className="mainButton">Todos los productos</Link>
                </div>
            </div>
            <div className="categoryContainer">
                <figure>
                    <img src="./arcade-stick.jpg" alt="" className="categoryImg" />
                </figure>
                <div className="categoryContainerText">
                    <h5 className="">Productos</h5>
                    <p className="">Vea todos los productos que tenemos para ofrecer</p>
                    <Link to={"/products"} className="mainButton">Todos los productos</Link>
                </div>
            </div>
            <div className="categoryContainer">
                <figure>
                    <img src="./arcade-stick.jpg" alt="" className="categoryImg" />
                </figure>
                <div className="categoryContainerText">
                    <h5 className="">Productos</h5>
                    <p className="">Vea todos los productos que tenemos para ofrecer</p>
                    <Link to={"/products"} className="mainButton">Todos los productos</Link>
                </div>
            </div>
            <div className="categoryContainer">
                <figure>
                    <img src="./arcade-stick.jpg" alt="" className="categoryImg" />
                </figure>
                <div className="categoryContainerText">
                    <h5 className="">Productos</h5>
                    <p className="">Vea todos los productos que tenemos para ofrecer</p>
                    <Link to={"/products"} className="mainButton">Todos los productos</Link>
                </div>
            </div>
        </section>
    )
}

export default CategorySection