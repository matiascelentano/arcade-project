import { useProducts } from "../context/ProductsContext";

const AdminProducts = () => {
    const { products } = useProducts();

    const populateTable = () => {
        return products.map((product) => {
            return (
                <tr key={product.id}>
                    <td>
                        {product.id}
                    </td>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        {product.price}
                    </td>
                    <td>
                        {product.quantity}
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