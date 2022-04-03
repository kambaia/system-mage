import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth/useAuth";

const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { token, user, loading } = useAuth();
  const location = useLocation();
 
  if (!token && !user) {
    return <Navigate replace to="/" state={{ from: location }} />;
  }
  return children;
};
export default PrivateRoute;
