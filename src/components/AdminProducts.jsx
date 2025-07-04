import { useProducts } from "../context/ProductsContext";
import "./AdminProducts.css"

const AdminProducts = () => {
    const { products, deleteProduct } = useProducts();


    const populateTable = () => {
        return products.map((product) => {
            return (
                <tr key={product.id}>
                    <td>
                        {product.id}
                    </td>
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
                        <button className="btn btn-danger" onClick={(e) =>{
                            e.preventDefault();
                            e.stopPropagation();
                            deleteProduct(product.id);
                        }}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
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
    )
}

export default AdminProducts