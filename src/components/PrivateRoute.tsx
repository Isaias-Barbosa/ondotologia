import React from 'react';
import { Navigate } from 'react-router-dom';



function PrivateRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to="/" replace />;
}

export default PrivateRoute;
