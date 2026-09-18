import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex ">

      {/* Sidebar FIXED */}
      <Sidebar />

      {/* Page change hoga yahan */}
      <div className='flex flex-col  w-full'>
      <Navbar/>
      <div className="flex w-full ">
      <Outlet />
      </div>
      </div>

    </div>
  )
}

export default DashboardLayout