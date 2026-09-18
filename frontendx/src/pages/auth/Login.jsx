
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaWineBottle } from 'react-icons/fa6'
import axios from 'axios';

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [showpassword, setshowpassword] = useState(false)
    const navigate = useNavigate();

    const Loginhandler = async (e) => {
        e.preventDefault()
        console.log('Login Email:', email)
        console.log('Login Password:', password)
        const res = await axios.post(
            'http://localhost:8000/user/login',
            { email, password },
            { withCredentials: true }
        )

        if (res.data.success) {
            const id = res.data.id;
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("id", id);
            // const resx = await axios.post("http://localhost:8000/user/getuser", {
            //     id,
            // });
            const role = res.data.role;
            if (role) return navigate('/')
        } else {
            localStorage.setItem('role', res.data.role)
            alert("Logn Unsuccessfull");
            navigate("/login");
        }
        // demo login
        // localStorage.setItem("token", "user_logged_in")
    }

    return (
        <div className='flex justify-center items-center mt-2'>

            <form
                onSubmit={(e) => Loginhandler(e)}
                className='bg-zinc-700 p-4 border-[1px] border-zinc-500 text-white rounded-md w-80 flex flex-col gap-4 shadow-lg '
            >

                <h2 className='text-center text-xl font-bold'>Login Form</h2>

                {/* Email */}
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

                {/* Password with eye icon */}
                <div>
                    <label className='text-sm text-gray-300'>Password</label>

                    <div className='flex items-center bg-zinc-800 border border-zinc-500 rounded mt-1 px-2'>

                        <input
                            value={password}
                            type={showpassword ? 'text' : 'password'}
                            required
                            minLength='8'
                            maxLength='16'
                            pattern="^\S+$"
                            title="No spaces allowed"
                            onChange={(e) => setpassword(e.target.value)}
                            className='w-full py-2 bg-transparent outline-none text-white'
                            placeholder='Enter password'
                        />

                        <button
                            type="button"
                            onClick={() => setshowpassword(!showpassword)}
                            className='text-gray-300'
                        >
                            {showpassword ? <FaEye /> : <FaEyeSlash />}
                        </button>

                    </div>
                </div>

                {/* Buttons */}
                <div className='flex items-center justify-between text-sm'>
                    <div className='flex justify-center gap-2'>
                        <input type="checkbox" name="" id="" />
                        <div>Remember Me</div>
                    </div>
                    <Link to={'/forgot'} className='text-gray-300 hover:text-white'>
                        Forgot password?
                    </Link>
                </div>
                <button type='submit' className='bg-pink-500 hover:bg-pink-600 transition py-2 rounded'>
                    Login
                </button>

            </form>
        </div>
    )
}

export default Login