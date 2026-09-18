import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import Landingpage from './Landingpage';
import { useState } from 'react';

const Shopnavbar = ({role,landingpae}) => {
  return (
              <div className=" sticky top-0 z-50 w-full flex bg-zinc-900 justify-between items-center px-10 py-4 border-b border-zinc-800  ">
                <h1 className="text-2xl font-semibold text-pink-500">
                  Quwat Experience
                </h1>
        
                <div className='flex gap-5'>
                  {role == 'admin' && (
                    <Link className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600" to='/dashboard'>
                      Go To Dashboard
                    </Link>
                  )}
        
                  {role == 'user' && landingpae && (
                    <Link className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600" to='/shop'>
                      Go To Shop
                    </Link>
                  )}
        
                  <Link className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600" to='/logout'>
                    Logout
                  </Link>
                </div>
              </div>
  )
}

export default Shopnavbar