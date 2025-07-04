import { Link, Outlet, useLocation } from 'react-router-dom';
import './AdminDashboard.css'

const AdminDashboard = ({ element }) => {

  return (
    <div id='dashboardContainer' className='d-flex flex-row w-100 h-100 backgroundGrey'>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white backgroundGrey" id='dashboardSidebar'>
        <span className="fs-4 mainText">Dashboard</span>
        <div className='d-flex flex-column navSticky'>
          <Link to={"/admin/dashboard/products"} className="secondaryButton sideBarLink">
            <button>
              Productos
            </button>
          </Link>
          <Link to={"/admin/dashboard/products"} className="secondaryButton sideBarLink">
            <button>
              Ordenes
            </button>
          </Link>
          <Link to={"/admin/dashboard/users"} className="secondaryButton sideBarLink">
            <button>
              Usuarios
            </button>
          </Link>
        </div>
      </div>
      <Outlet>
      </Outlet>
    </div>
  )
}

export default AdminDashboard