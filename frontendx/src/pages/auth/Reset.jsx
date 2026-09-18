import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaWineBottle } from 'react-icons/fa6'
import axios from 'axios';

const Reset = () => {
  const navigate = useNavigate()

  const [newpassword, setnewpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const [shownewpassword, setshownewpassword] = useState(false)
  const [showconfirmpassword, setshowconfirmpassword] = useState(false)
  const Resethandler = async (e) => {
    e.preventDefault();
    const email=await localStorage.getItem('email')
    const res = await axios.post("http://localhost:8000/user/resetpassword", {
      newpassword,email
    })
    console.log('email is :====' ,email);
    console.log(newpassword, confirmpassword)
    console.log(res.data);

    // demo
    alert("Password reset successful")
    navigate('/login')
  }

  return (
    <div className='flex justify-center items-center mt-2'>

      <form
        onSubmit={(e)=>Resethandler(e)}
        className='bg-zinc-700 p-4 border-[1px] border-zinc-500 text-white p-6 rounded-md w-80 flex flex-col gap-4 shadow-lg'
      >

        <h2 className='text-center text-xl font-bold'>
          Reset Password
        </h2>

        {/* New Password */}
        <div>
          <label className='text-sm text-gray-300'>New Password</label>
          <div className='flex items-center bg-zinc-800 border border-zinc-500 rounded mt-1 px-2'>

            <input
              value={newpassword}
              type={shownewpassword ? 'text' : 'password'}
              required
              minLength='8'
              maxLength='16'
              pattern="^\S+$"
              title="No spaces allowed"
              onChange={(e) => setnewpassword(e.target.value)}
              className='w-full py-2 bg-transparent outline-none text-white'
              placeholder='Enter password'
            />

            <button
              type="button"
              onClick={() => setshownewpassword(!shownewpassword)}
              className='text-gray-300'
            >
              {shownewpassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

        </div>

        {/* Confirm Password */}
        <div>
          <label className='text-sm text-gray-300'>Confirm Password</label>
          <div className='flex items-center bg-zinc-800 border border-zinc-500 rounded mt-1 px-2'>
            <input
              value={confirmpassword}
              type={showconfirmpassword ? 'text' : 'password'}
              required
              minLength='8'
              maxLength='16'
              pattern="^\S+$"
              title="No spaces allowed"
              className='w-full py-2 bg-transparent outline-none text-white'
              onChange={(e) => setconfirmpassword(e.target.value)}
              placeholder='Enter New Password'
            />

            <button
              type="button"
              onClick={() => setshowconfirmpassword(!showconfirmpassword)}
              className='text-gray-300'
            >
              {showconfirmpassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

        </div>
        {newpassword !== confirmpassword && (<div className='text-red-400 text-sm'>Email and Password are not the same</div>)}
        {/* Back */}
        <button
          type="submit"
          className='text-sm bg-pink-500 hover:bg-pink-600 py-3 rounded-lg text-gray-300 cursor-pointer text-center hover:text-white'
        >
          Password Reset
        </button>

      </form>
    </div>
  )
}

export default Reset