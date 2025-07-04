import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';
import { useState } from 'react';

const ProductDetail = () => {
  const { addMultipleToCart, findItemCart } = useCart();
  const { products } = useProducts();
  const { productId } = useParams();

  const product = products.find(({ id }) => id === Number(productId));
  const itemCart = findItemCart(product)
  const [value, setValue] = itemCart ? useState(itemCart.quantity) : useState(0);
  const valNum = Number(value);

  const handleChangeInput = (e) => {
    setValue(e.target.value)
    addMultipleToCart(product, e.target.value)
    console.log("target ", e.target.value);
  }
  const handleClickButtonAdd = () => {
    setValue(valNum + 1)
    addMultipleToCart(product, valNum + 1)
  }
  const handleClickButtonRemove = () => {
    if (valNum - 1 >= 0) {
      setValue(valNum - 1)
      addMultipleToCart(product, valNum - 1)
    }
  }
  return product !== undefined ? (
    <div className='contentContainer'>
      <div className='d-flex productCard'>
        <div id="carouselProductImg" className="carousel slide" data-bs-theme="dark" data-bs-touch="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselProductImg" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselProductImg" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselProductImg" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`/${product.img}`} className="figure-img img-fluid rounded" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`/${product.img}`} className="figure-img img-fluid rounded" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`/${product.img}`} className="figure-img img-fluid rounded" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselProductImg" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselProductImg" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div id='productInfo' className='overflow-hidden'>
          <h2 className='mainText ellipsis'>{product.name}</h2>
          <p className='mainText'>${product.price}</p>
          <p className='mainText'>Id:{product.id}</p>
          <div className='d-flex flex-row flew-wrap my-4'>
            <button className='secondaryButton' onClick={() => handleClickButtonRemove()}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <label>
              <input
                id='cartInput'
                value={value}
                onChange={e => handleChangeInput(e)}
                type="number"
              />
            </label>
            <button className='secondaryButton' onClick={() => handleClickButtonAdd()}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <button className='my-4 mainButton'>Comprar</button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Producto no encontrado</h1>
      <p>El producto con el id {product} no existe.</p>
      <Link to="/">Volver a Home</Link>
    </div>
  )
}

export default ProductDetail