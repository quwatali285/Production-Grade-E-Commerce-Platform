import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Otp = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState('')

  const verifyHandler = (e) => {
    e.preventDefault()
    console.log("Entered OTP:", otp)
    alert("OTP Verified ✔")
    navigate('/login')
  }

  return (
    <div className='flex justify-center items-center mt-2'>

      <form
        onSubmit={verifyHandler}
        className='bg-zinc-700 p-4 border-[1px] border-zinc-500 text-white rounded-md w-80 flex flex-col gap-4 shadow-lg '
      >

        <h2 className='text-center text-xl font-bold'>
          OTP Verification
        </h2>

        <p className='text-sm text-gray-300 text-center'>
          Enter the OTP sent to your email
        </p>

        {/* OTP Input */}
        <div>
          <label className='text-sm text-gray-300'>OTP</label>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className='w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-500 outline-none text-white text-center tracking-widest'
            type="text"
            placeholder='Enter OTP'
            maxLength={6}
          />
        </div>

        {/* Button */}
        <Link className='bg-pink-500 flex justify-center hover:bg-pink-600 transition py-2 rounded' to='/resetpassword'>Verify Opt</Link>

        {/* Back */}
        <div
          onClick={() => navigate('/login')}
          className='text-sm text-gray-300 cursor-pointer text-center hover:text-white'
        >
          Back to Login
        </div>

      </form>
    </div>
  )
}

export default Otp