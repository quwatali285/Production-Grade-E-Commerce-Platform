import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Privateguard = ({ children }) => {
  // const role = localStorage.getItem("role");
  const [role, setrole] = useState('')
  const id=localStorage.getItem('id')
  const checkuser = async () => {
    const resx = await axios.post("http://localhost:8000/user/getuser", {
      id
    });
    setrole(resx.data.user.role)
    if (role !== 'admin') {
      return <Navigate to="/" replace />;
    }
  }
  checkuser();

  return children;
};

export default Privateguard;