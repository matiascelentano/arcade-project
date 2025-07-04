import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";


const Products = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();

  const productItem = () => {
    return products.map((product) => {
      return (
        <div className="row p-2 bg-dark border rounded mt-2" key={product.id}>
          <div className="col-md-3 mt-1">
            <img className="img-fluid img-responsive rounded product-image" src={`/${product.img}`} />
          </div>
          <div className="col-md-6 mt-1">
            <h4>{product.name}</h4>
            <p className="text-justify text-truncate para mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam nunc non finibus rutrum. Nunc luctus lectus ac enim suscipit aliquet. Aliquam ac cursus urna. Etiam accumsan nisl vitae ante blandit rhoncus. Phasellus consequat feugiat leo. Etiam auctor dolor in ligula convallis fermentum. Nulla lobortis suscipit nunc quis lobortis. Nam condimentum metus in enim hendrerit tempor. Proin porta vel enim eget molestie.</p>
          </div>
          <div className="align-items-center align-content-center col-md-3 border-left mt-1">
            <div className="d-flex flex-row align-items-center">
              <h4 className="mr-1">${product.price}</h4>
            </div>
            <div className="d-flex flex-column mt-4">
              <button className="btn" type="button">
                <Link to={`/products/${product.id}`}> Ver Detalle</Link>
              </button>
              <button onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              >Agregar a Carrito</button>
            </div>
          </div>
        </div>
      )
    })
  }


  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10">
          {
            productItem()
          }
        </div>
      </div>
    </div>
  )
}

export default Products