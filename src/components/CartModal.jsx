import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'

const CartModal = () => {
  const { clearCart, cartItems, removeFromCart, getCartTotal } = useCart();
  const [itemsInCart, setItemsInCart] = useState([]);


  useEffect(() => {
    setItemsInCart(cartItems)
  }, [cartItems])

  const populateTable = () => {
    if (itemsInCart) {
      return itemsInCart.map((product) => {
        return (
          <tr key={product.id}>
            <td className="productName">
              {product.name}
            </td>
            <td>
              {product.price}
            </td>
            <td>
              {product.quantity}
            </td>
            <td>
              <button className="btn btn-danger" onClick={(e) => {
                e.preventDefault();
                removeFromCart(product);
              }}>
                <i className="fa-solid fa-minus"></i>
              </button>
            </td>
          </tr>
        )
      })
    }
  }

  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="cartModalLabel">Mi carrito</h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  populateTable()
                }
              </tbody>
            </table>

            <h4 className='mainText'>Total: ${getCartTotal()}</h4>
            
          </div>
          <div className="modal-footer">

            <button type="button" className="secondaryButton" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="mainButton" onClick={(e) => {
              e.preventDefault()
              clearCart()
            }}>Limpiar Carrito</button>
            <button type="button" className="mainButton">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal