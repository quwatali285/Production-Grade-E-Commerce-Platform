import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import Landingpage from './Landingpage';
import { useState } from 'react';
import Shopnavbar from './Shopnavbar';
import axios from 'axios';
import { useEffect } from 'react';

const Homee = () => {
  const navigate = useNavigate();
  // const role = localStorage.getItem("role");
  const [role, setrole] = useState(null)
  const location = useLocation();

  const landingpae = location.pathname === '/';
  useEffect(() => {
    const checkuser = async () => {
      const id = localStorage.getItem('id')
      const resx = await axios.post("http://localhost:8000/user/getuser", {
        id: id,
      });
      setrole(resx.data.user.role)
    }
    checkuser();
  }, [])



  return (
    <div className="min-h-screen bg-zinc-900 text-white">

      <Shopnavbar role={role} landingpae={landingpae} />

      {landingpae ? <Landingpage /> : <Outlet />}

    </div>
  );
};

export default Homee