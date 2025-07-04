import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({element}) => {
  const { isAuthenticated } = useAuth();
  const validation = isAuthenticated();
  return validation ? element : <Navigate to="/" />
}

export default ProtectedRoute