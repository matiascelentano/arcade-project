import { } from "../context/ProductsContext";

const AdminUsers = () => {
    let userList = [
        { id: 1, name: "Matias Celentano", email: "test@gmail.com", role: 0, userImg: 'user.jpg' },
        { id: 2, name: "Juan Carlos Perez", email: "test123@gmail.com", role: 1, userImg: 'user.jpg' },
        { id: 3, name: "Valentina Rodriguez", email: "testtest@gmail.com", role: 0, userImg: 'user.jpg' },
        { id: 4, name: "Rodrigo Rodriguez", email: "testrr@gmail.com", role: 1, userImg: 'user.jpg' },
        { id: 5, name: "John Carpenter", email: "mail@gmail.com", role: 0, userImg: 'user.jpg' },
    ];

    const populateTable = () => {
        return userList.map((user) => {
            return (
                <tr key={user.id}>
                    <td>
                        {user.id}
                    </td>
                    <td>
                        {user.name}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>
                        {
                            user.role === 0 ? "Administrador" : "Cliente"
                        }
                    </td>
                    <td>
                        {user.userImg}
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="table table-striped dashboardTable">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Img</th>
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

export default AdminUsers