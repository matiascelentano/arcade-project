import React from 'react'
import './ProductSection.css'
import { Link } from 'react-router-dom';

const ProductSection = () => {
    const listadoProductos = [{ id: 1, nombre: "Producto 1", precio: 400, img: "arcade-stick.jpg" }, { id: 2, nombre: "Producto 2", precio: 600, img: "arcade-stick.jpg" }, { id: 3, nombre: "Producto 3", precio: 4060, img: "arcade-stick.jpg" }, { id: 4, nombre: "Producto 4", precio: 400, img: "arcade-stick.jpg" }, { id: 5, nombre: "Producto 5", precio: 400, img: "arcade-stick.jpg" }, { id: 6, nombre: "Producto 6", precio: 400, img: "arcade-stick.jpg" }, { id: 7, nombre: "Producto 7", precio: 400, img: "arcade-stick.jpg" }, { id: 8, nombre: "Producto 8", precio: 640, img: "arcade-stick.jpg" }, { id: 9, nombre: "Producto 9", precio: 2000, img: "arcade-stick.jpg" }, { id: 10, nombre: "Producto 10", precio: 8000, img: "arcade-stick.jpg" }, { id: 11, nombre: "Producto 11", precio: 4000, img: "arcade-stick.jpg" }, { id: 12, nombre: "Producto 12", precio: 6400, img: "arcade-stick.jpg" }, { id: 13, nombre: "Producto 13", precio: 7400, img: "arcade-stick.jpg" }, { id: 14, nombre: "Producto 14", precio: 4100, img: "arcade-stick.jpg" }, { id: 15, nombre: "Producto 15", precio: 4200, img: "arcade-stick.jpg" },{ id: 16, nombre: "Producto 1", precio: 400, img: "arcade-stick.jpg" },{ id: 17, nombre: "Producto 1", precio: 400, img: "arcade-stick.jpg" },];


    // const listar = listadoProductos.map((product) => {
    //     return (
    //         <div className='productSectionCarouselItem' key={product.id}>
    //             <Link to={{
    //                 pathname: `/products/${product.id}`
    //             }}>
    //                 <figure className='productImgContainer'>
    //                     <img src={`/${product.img}`} alt="Imagen Producto" className='productImg' />
    //                 </figure>
    //                 <h3 className='productName'>{product.nombre}</h3>
    //                 <p className='productPrice'>${product.precio}</p>
    //             </Link>
    //         </div>
    //     )
    // })
    let startIndex = 0;
    let endIndex = 5;
    
    const  itemCarousel = () =>{
        console.log(startIndex, endIndex);
        
        const items = listadoProductos.slice(startIndex, endIndex).map(product => {
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
            </div>


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


        </section>
    )
}

export default ProductSection