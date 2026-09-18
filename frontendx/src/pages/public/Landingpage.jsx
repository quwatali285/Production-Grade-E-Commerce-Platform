import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
const Landingpage = () => {
  return (
    <div className='flex flex-col h-[80vh]'>
         {/* Hero Section */}
      <div className="flex flex-1 items-center justify-center flex-col text-center px-6">
        <h2 className="text-5xl font-bold mb-4">
          Welcome to Quwat Experience
        </h2>

        <p className="text-gray-400 max-w-xl mb-6">
          Manage your business, track analytics, and grow faster with our powerful dashboard.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-pink-500 px-6 py-3 rounded-lg hover:bg-pink-600"
          >
            Get Started
          </button>

          <button className="border border-zinc-600 px-6 py-3 rounded-lg hover:bg-zinc-800">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landingpage