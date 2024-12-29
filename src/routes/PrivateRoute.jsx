import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication status (replace with actual logic later)
const isAuthenticated = true; // Change this to `true` to simulate a logged-in user

const PrivateRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
 