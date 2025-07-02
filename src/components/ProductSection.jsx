import './ProductSection.css'
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import { CartContext, useCart } from '../context/CartContext'
import { useContext } from 'react';

const ProductSection = () => {
    const { products } = useProducts();
    const { addToCart } = useCart();

    const productItem = () => {
        return products.map((product) => {
            return (
                <div className='bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 overflow-hidden w-96'>
                    <Link to={{
                        pathname: `/products/${product.id}`
                    }}>
                        <figure className='productImgContainer'>
                            <img src={`/${product.img}`} alt="Imagen Producto" className='productImg' />
                        </figure>
                        <h3 className='productName'>{product.nombre}</h3>
                        <p className='productPrice'>${product.precio}</p>
                        <button onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        >
                            Agregar Producto
                        </button>
                    </Link>
                </div>
            )
        })
    }

    return (
        <section className='w-75 mx-auto'>
            <h2>Productos Destacados</h2>
            <div id='productSectionCarousel' className='class="flex overflow-x-scroll pb-10 [&::-webkit-scrollbar]:h-2
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
                mx-5 my-9"'>
                <div className='d-flex flex-nowrap'>
                    {productItem()}
                </div>
            </div>
        </section>
    )
}

export default ProductSection