import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const AddNew = ({ onClose }) => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [showpassword, setshowpassword] = useState(false)
  const [confirmpassword, setconfirmpassword] = useState('')
  const [showconfirmpassword, setshowconfirmpassword] = useState(false)
  const [dob, setdob] = useState('')
  const [age, setage] = useState(0)
  const [optional, setoptional] = useState(false)
  const [gender, setgender] = useState('')
  const [error, seterror] = useState('')
  const [pasworderror, setpassworderror] = useState('')
  const [btnoptional, setbtnoptional] = useState('Optional')
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
      { name, email, password, confirmpassword,dob,age,gender },
      { withCredentials: true }
    );
    setname('')
    setemail('')
    setpassword('')
    setconfirmpassword('')
    onClose();
  }

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm z-50'>
      <div className='flex flex-col'>

        <form
          onSubmit={registerhandler}
          className='bg-zinc-700 text-white p-4 border-[1px] border-zinc-500  rounded-md w-fit flex  flex-col gap-4 shadow-lg'
        >

                                   <div className="flex   items-center justify-between w-full">
                            <h2 className='flex  text-center text-xl font-bold'>
                                Add new User
                            </h2>
                            <button   onClick={onClose} className=' text-white'>
                               <X />
                        </button>
                            </div>

          <div className='flex gap-2'>
            <div>
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
          </div>
          <div>
            {optional &&
              <div className='flex flex-col'>
                {/* Dob Input */}
                <div>
                  <label className='text-sm text-gray-300'>DOB</label>
                  <input
                    value={dob}
                    onChange={(e) => setdob(e.target.value)}
                    className='w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-500 outline-none text-white text-center tracking-widest'
                    type='date'
                    placeholder='Enter New dob'
                  />
                </div>
                {/* Age Input */}
                <div>
                  <label className='text-sm text-gray-300'>Age</label>
                  <input
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                    className='w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-500 outline-none text-white text-center tracking-widest'
                    type="text"
                    placeholder='Enter new Age'
                    maxLength={3}
                  />
                </div>
                {/* Gender Input */}
                <div>
                  <label className='text-sm text-gray-300'>Gender</label>
                  <input
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                    className='w-full mt-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-500 outline-none text-white text-center tracking-widest'
                    type="text"
                    placeholder='Enter new gender'
                    maxLength={10}
                  />
                </div>
              </div>
            }
          </div>
          </div>
          <div onClick={() => { setoptional(!optional) }} className='text-red-400  font-bold '>{optional?'Unoptional':'optional'}</div>
          <button type='submit'  className='w-fit px-10 bg-pink-500 hover:bg-pink-600 transition py-2 rounded'>
            AddNew
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddNew

