import { Routes, Route, Navigate } from "react-router-dom";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'
import UseLocation, { useEffect } from "react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// import "."; // LAST
// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import OTP from "./pages/auth/otp"; // Sidebar mein small 'otp' hai


// Dashboard Pages (src/pages/dashboard/...)
import Dashboard from "./pages/dashboard/Dashboard";
import Usermanagement from "./pages/dashboard/Usermanagement";
import Productmanagement from "./pages/dashboard/Productmanagement";
import Cart from "./pages/dashboard/Cart";

// Layout & Guards
import DashboardLayout from "./components/layput/dashboardLayout";
import Privateguard from "./routes/Privateguard";
import Protectedroutes from "./routes/Protectedroutes";

// Dashboard.jsx se 2 levels up ja kar components tak pahunchna hai

import Donutchart from "./components/charts/donutchart";
import Sidebar from "./components/layput/Sidebar";
import Navbar from "./components/layput/Navbar";
import Logout from "./pages/auth/Logout";
import { useState } from "react";
import Homee from "./pages/public/Homee";
import Otp from "./pages/auth/otp";
import CreateProduct from "./components/product/CreateProduct";
import Shop from "./pages/public/Shop";
import Buyproduct from "./pages/public/Buyproduct";
import Ordersmanagement from "./pages/dashboard/Ordersmanagement";


const App = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setisActive] = useState(true)


  return (
    <div className='min-h-screen w-auto bg-zinc-800'>
      
      {!token && (<div className='italic text-white text-xl sm:text-3xl md:text-5xl  flex flex-col md:flex-row items-center justify-center w-full '>
        Welcome to <span className='text-pink-400 font-bold'>Quwat Experience</span>
      </div>)}
      {!token && (<div className=' w-72 relative mt-7 flex flex-col gap-5  self-center justify-self-center rounded-md'>
        {/* Navigation */}
        <div className='flex justify-between px-10 md:px-0 lg:px-0 lg:px-0 text-gray-300 '>
          <div onClick={() => navigate(-1)} className='absolute top-[10vh] hover:text-rose-600'><FaArrowLeft /></div>
          <Link className={location.pathname === '/login' ? 'text-pink-400' : 'text-white'} to="/login">Login</Link>
          <Link className={location.pathname === '/signup' ? 'text-pink-400' : 'text-white'} to="/signup">Signup</Link>
        </div>
      </div>)}

      <Routes>


        {/* ========= PUBLIC ROUTES ========= */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />

        {/* Eliminte this and direct go to reet password section */}
        {/* <Route path="/otp" element={<Otp />} /> */}
        <Route path="/reset" element={<Reset />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/" element={
          <Protectedroutes>
            <Homee />
          </Protectedroutes>
        }
        >
          <Route path="shop" element={<Shop/>}/>
          <Route path="shop/cart" element={<Buyproduct/>}/>
        </Route>

        {/* ========= PRIVATE ROUTES ========= */}

        <Route
          path="/dashboard"
          element={
            <Protectedroutes>
              <Privateguard>
                <DashboardLayout />
              </Privateguard>
            </Protectedroutes>
          }
        >
          {/* Nested Routes */}
          <Route index element={<Dashboard />} />
          <Route path="user" element={<Usermanagement />} />
          <Route path="products" element={<Productmanagement />} />
          <Route path="orders" element={<Ordersmanagement />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="cart" element={<Cart />} />
        </Route>


      </Routes>

    </div>
  );
}

export default App;