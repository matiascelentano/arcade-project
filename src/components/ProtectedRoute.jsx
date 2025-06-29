import { Navigate, useLocation } from "react-router-dom";

import React from 'react'

export const ProtectedRoute = ({element}) => {
  const location = useLocation()

  console.log("Location: " , location);
  const isAdmin = localStorage.getItem('authToken') !== null;
  return isAdmin ? element : <Navigate to="/" />
}

export default ProtectedRoute