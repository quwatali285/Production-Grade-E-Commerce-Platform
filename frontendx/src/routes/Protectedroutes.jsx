import { Navigate, Outlet } from "react-router-dom";

const Protectedroutes = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return  <Navigate to="/login" replace />;
  }
  return children;
};

export default Protectedroutes;