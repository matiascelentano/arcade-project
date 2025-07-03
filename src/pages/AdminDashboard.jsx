import { Link, Outlet, useLocation } from 'react-router-dom';
import './AdminDashboard.css'

const AdminDashboard = ({element}) => {

  return (
    <div id='dashboardContainer' className='d-flex flex-row w-100 h-100'>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" id='dashboardSidebar'>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <figure><img src="#" alt="" /></figure>
          <span className="fs-4">Dashboard</span>
        </a>
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to={"/admin/dashboard/products"} className="nav-link active" aria-current="page">
              Productos
            </Link>
          </li>
          <li>
            <Link to={"/admin/dashboard/products"} className="nav-link active" aria-current="page">
              Ordenes
            </Link>
          </li>
          <li>
            <Link to={"/admin/dashboard/users"} className="nav-link active" aria-current="page">
              Usuarios
            </Link>
          </li>
        </ul>
        <hr></hr>
      </div>
      <Outlet>
      </Outlet>
    </div>
  )
}

export default AdminDashboard