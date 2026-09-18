import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [showpassword, setshowpassword] = useState(false)
  const [confirmpassword, setconfirmpassword] = useState('')
  const [showconfirmpassword, setshowconfirmpassword] = useState(false)
  const [error, seterror] = useState('')
  const [pasworderror, setpassworderror] = useState('')
  const navigate = useNavigate()
  const registerhandler = async (e) => {
    e.preventDefault()
    // From Validation 
    if (!name || !email || !password || !confirmpassword) {
      seterror('All fields are required');
    } else if (password === confirmpassword) {
      setpassworderror('Passwoed and confirm password is not match')
    } else if (password.includes(' ') || confirmpassword.includes(' ')) {
      setpassworderror('You cannot add spacing n password')
    }
    console.log('Form is Submitting');
    const res = await axios.post(
      "http://localhost:8000/user/register",
      { name, email, password, confirmpassword },
      { withCredentials: true }
    );

    // const res = await axios.get("http://localhost:8000/user/register")
    // .then(() => {
    //   return 
    // })

    // 🔥 SAFE CHECK
    console.log(res.data.token, res.data.role);
    if (res.data.success) {
      const id=res.data.id;
      localStorage.setItem("token", res.data.token);
      // localStorage.setItem("role", res.data.role);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("id", id);
      const resx = await axios.post("http://localhost:8000/user/getuser", {
        id,
      });
      const role = resx.data.user.role;
      if (role === "admin") {
        navigate("/dashboard");
      }
      else if (role === "user") {
        navigate("/");
      }
      else {
        navigate("/login");
      }
      // 🔥 ROLE BASED NAVIGATION

    } else {
      alert(res.data.message);
      navigate("/login");
    }

    console.log(res.data.token)
    console.log(res.data)
    setname('')
    setemail('')
    setpassword('')
    setconfirmpassword('')
  }

  return (
    <div className='flex justify-center items-center mt-2'>

      <form
        onSubmit={registerhandler}
        className='bg-zinc-700 text-white p-4 border-[1px] border-zinc-500  rounded-md w-80 flex flex-col gap-4 shadow-lg'
      >

        <h2 className='text-center text-xl font-bold'>Signup Form</h2>

        {/* Username */}
        <div>
          <label className='text-sm text-gray-300'>Username</label>
          <input
            value={name}
            required
            pattern="^[A-Za-z].*"
            title="Only Letters,nubes,and underscore are alowed"
            onChange={(e) => setname(e.target.value)}
            className='w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-500 outline-none text-white'
            type="text"
            placeholder='Enter username'
          />
        </div>

        {/* Email */}
        <div>
          <label className='text-sm text-gray-300'>Email</label>
          <input
            value={email}
            required
            type="email"
            onChange={(e) => setemail(e.target.value)}
            className='w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-500 outline-none text-white'
            placeholder='Enter email'
          />
        </div>
        {/* Password */}
        <div>
          <label className='text-sm text-gray-300'>Password</label>

          <div className='flex items-center bg-zinc-800 border border-zinc-500 rounded mt-1 px-2'>
            <input
              value={password}
              required
              minLength='8'
              maxLength='16'
              pattern="^\S+$"
              title="No spaces allowed"
              onChange={(e) => setpassword(e.target.value)}
              className='w-full py-2 bg-transparent outline-none text-white'
              type={showpassword ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <div>{ }</div>
            <button
              type="button"
              onClick={() => setshowpassword(!showpassword)}
              className='text-gray-300'
            >
              {showpassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className='text-sm text-gray-300'>Confirm Password</label>
          <div className='flex items-center bg-zinc-800 border border-zinc-500 rounded mt-1 px-2'>
            <input
              value={confirmpassword}
              required
              minLength='8'
              maxLength='16'
              title="No spaces allowed"
              onChange={(e) => setconfirmpassword(e.target.value)}
              pattern="^\S+$"
              className='w-full mt-1  py-2 rounded bg-zinc-800  outline-none text-white'
              type={showconfirmpassword ? 'text' : 'password'}
              placeholder='Confirm password'
            />
            <button
              type="button"
              onClick={() => setshowconfirmpassword(!showconfirmpassword)}
              className='text-gray-300'
            >
              {showconfirmpassword ? <FaEye /> : <FaEyeSlash />}
            </button>

          </div>
          {password !== confirmpassword && (<div className='text-sm text-red-400'>Password and conform password are not same</div>)}
        </div>

        <button type='submit' className='bg-pink-500 hover:bg-pink-600 transition py-2 rounded'>
          Signup
        </button>

      </form>
    </div>
  )
}

export default Signup

