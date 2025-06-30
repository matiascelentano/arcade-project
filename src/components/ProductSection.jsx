import React from 'react'
import './ProductSection.css'
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';

const ProductSection = () => {
    const { products } = useProducts();
    let startIndex = 0;
    let endIndex = 5;

    const itemCarousel = () => {
        const items = products.slice(startIndex, endIndex).map(product => {
            return (
                <div className='productSectionCarouselItem' key={product.id}>
                    <Link to={{
                        pathname: `/products/${product.id}`
                    }}>
                        <figure className='productImgContainer'>
                            <img src={`/${product.img}`} alt="Imagen Producto" className='productImg' />
                        </figure>
                        <h3 className='productName'>{product.nombre}</h3>
                        <p className='productPrice'>${product.precio}</p>
                    </Link>
                </div>
            )
        })

        startIndex = startIndex + 5;
        endIndex = endIndex + 5;
        return items;
    }

    return (
        <section className='w-75 mx-auto'>
            <h2>Productos Destacados</h2>
            <div id='productSectionCarousel'>
                {/* {listar} */}
                <div id="carouselProduct" className="carousel slide d-flex">
                    <button className="carousel-control-prev position-relative" type="button" data-bs-target="#carouselProduct" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='d-flex'>
                                {
                                    itemCarousel()
                                }
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='d-flex'>
                                {
                                    itemCarousel()
                                }
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='d-flex'>
                                {
                                    itemCarousel()
                                }
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-next position-relative" type="button" data-bs-target="#carouselProduct" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductSection