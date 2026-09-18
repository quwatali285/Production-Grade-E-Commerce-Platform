import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Forgot = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState('')
  const [sendlink, setSendlink] = useState(false)

  const handleForgot = async (e) => {
    e.preventDefault()

    // basic frontend validation
    if (!email.includes("@")) {
      alert("Email is incorrect format")
      return
    }
      const res = await axios.post(
        'http://localhost:8000/user/forgotpassword',
        { email },
        { withCredentials: true }
      )

      if (!res.data.success) {
        alert("Email is incorrect")
      } else {
        setSendlink(true)
        window.localStorage.setItem('email',email)
        navigate("/reset")
      }
  }

  return (
    <div className='flex justify-center items-center mt-2'>

      <form
        onSubmit={handleForgot}
        className='bg-zinc-700 p-4 border-[1px] border-zinc-500 text-white rounded-md w-80 flex flex-col gap-4 shadow-lg '
      >

        <h2 className='text-center text-xl font-bold'>
          Forgot Password
        </h2>

        <p className='text-sm text-gray-300 text-center'>
          Enter your email and we’ll send you a reset link
        </p>

        <div>
          <label className='text-sm text-gray-300'>Email</label>
          <input
            value={email}
            required
            onChange={(e) => setemail(e.target.value)}
            className='w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-500 outline-none text-white'
            type="email"
            placeholder='Enter email'
          />
        </div>

        <button
          type="submit"
          className='bg-pink-500 flex justify-center hover:bg-pink-600 transition py-2 rounded'
        >
          Send Reset Link
        </button>

        {sendlink && (
          <p className='text-green-400 text-sm text-center'>
            Reset link sent successfully ✔
          </p>
        )}

        <div
          onClick={() => navigate("/login")}
          className='text-sm text-gray-300 cursor-pointer text-center hover:text-white'
        >
          Back to Login
        </div>

      </form>
    </div>
  )
}

export default Forgot