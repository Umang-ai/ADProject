import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Redirect to sign-in page if no token exists
  return token ? children : <Navigate to="/signIn" />;
};

export default ProtectedRoute;
