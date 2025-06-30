import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const AdminRoute = ({element}) => {
  const { isAdmin } = useAuth();
  const validation = isAdmin();
  return validation ? element : <Navigate to="/" />
}

export default AdminRoute