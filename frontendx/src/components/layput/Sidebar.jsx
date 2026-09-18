import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaTachometerAlt,
  FaBoxOpen,
  FaUsers,
  FaCogs,
  FaStar,
  FaShoppingCart,
  FaChartBar,
  FaBell,
  FaCog,
  FaEnvelope,
  FaBars,
  FaCreditCard
} from "react-icons/fa";
const Sidebar = () => {
  const navigate=useNavigate();
  const logout=()=>{
    toast.success('Logout Successfully')
    setTimeout(() => {
      navigate('/logout')
    }, 2000);
  }
  return (
    <div>
        <ToastContainer/>
        <div className='w-[20vw]  bg-zinc-700 relative flex flex-col px-4 py-2 justify-between   min-h-screen  border-r-[1px] border-r-zinc-600'>
        <div className='flex flex-col justify-between h-full'>
          <div className="flex flex-col gap-14">
          <div className='flex w-full  justify-between items-center text-white '>
            <div>ADMIN</div>
            <div className='not-landscape:hidden'><FaBars /></div>
          </div>
          <div className="flex  flex-col gap-4 text-sm  relative   ">

            <Link to={'/Dashboard'} className="flex text-gray-200 items-center gap-4 hover:text-pink-400 hover:cursor-pointer ">
              <FaTachometerAlt />
              <div  className='not-landscape:hidden' >Dashboard</div>
            </Link>

            <Link to={'/Dashboard/user'} className="flex text-gray-200 items-center gap-4 hover:text-pink-400 hover:cursor-pointer ">
              <FaUsers />
              <div  className='not-landscape:hidden' >User Management</div>
            </Link>

            <Link to={'/Dashboard/products'} className="flex text-gray-200 items-center gap-4 hover:text-pink-400 hover:cursor-pointer ">
              <FaCogs />
              <div  className='not-landscape:hidden' >Product Management</div>
            </Link>

            <Link to={'/Dashboard/orders'} className="flex text-gray-200 items-center gap-4 hover:text-pink-400 hover:cursor-pointer">
              <FaShoppingCart />
              <span>Orders Management</span>
            </Link>
            <Link className="flex text-gray-200 items-center gap-4 hover:text-pink-400 hover:cursor-pointer ">
              <FaStar />
              <span className='not-landscape:hidden'>Reviews</span>
            </Link>


            {/* <div className="flex text-gray-200 items-center gap-4 hover:text-pink-400 hover:cursor-pointer">
              <FaBell />
              <span className='not-landscape:hidden'>Notifications</span>
            </div> */}


            <div className="flex text-gray-200 items-center gap-4 hover:text-pink-400 hover:cursor-pointer">
              <FaEnvelope />
              <span>Messages</span>
            </div>
            <div className="flex text-gray-200 items-center gap-4 hover:text-pink-400 hover:cursor-pointer">
              <FaCog />
              <span className='not-landscape:hidden'>Settings</span>
            </div>

            {/* <div className="flex text-gray-200 items-center gap-4 hover:text-pink-400 hover:cursor-pointer">
              <FaCreditCard />
              <span>Payments</span>
            </div> */}

          </div>
          </div>
          <div onClick={logout} className=' px-5 cursor-pointer py-2 w-fit rounded-lg text-gray-300 bg-rose-500 not-landscape:flex not-landscape:text-[2px]'>Logout</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar