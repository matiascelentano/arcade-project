import './ProductSection.css'
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext'

const ProductSection = () => {
    const { products } = useProducts();
    const { addToCart } = useCart();
    const topSellers = () => {
        const top = products.slice(0, 10)
        return top.map((product) => {
            return (
                <div className='overflow-hidden productSectionItem' key={product.id}>
                    <figure className='productImgContainer'>
                        <img src={`/${product.img}`} alt="Imagen Producto" className='productImg img-fluid' />
                    </figure>
                    <h5 className='productName ellipsis'>{product.name}</h5>
                    <h4 className='productPrice ellipsis'>${product.price}</h4>
                    <div className='productSectionButtonContainer'>
                        <Link to={{
                            pathname: `/products/${product.id}`
                        }} id='productRedirect'>
                            <button className='mainButton'>
                                Ver Detalles
                            </button>
                        </Link>
                        <button id='productAddToCart' className='secondaryButton' onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                        }}
                        >
                            <i className="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            )
        })
    }

    return (
        <section className='mx-auto' id='productSection'>
            <h2>Productos Destacados</h2>
            <div id='productSectionCarouselContainer' className="">
                <div className='[&::-webkit-scrollbar]:h-2
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'
                    id='productSectionCarousel'>
                    {topSellers()}
                </div>
            </div>
        </section>
    )
}

export default ProductSection