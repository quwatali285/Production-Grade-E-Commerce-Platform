import React, { useState } from 'react'
import { X } from 'lucide-react';
import axios from 'axios';
const EditUser = ({ id,onClose }) => {
    const [dob, setdob] = useState('')
    const [age, setage] = useState(0)
    const [gender, setgender] = useState('')
    const edituserhandler=(e)=>{
        const edituser= async () => {
            await axios.post('http://localhost:8000/admin/edit',
                {id,age,dob,gender}
            )
        }
        edituser()
        e.preventdefault();
        
    }
    return (
        <>
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm z-50">
                <div className='flex flex-col'>
                    {/* Modal box */}
                        <form
                            onSubmit={(e)=>{edituserhandler(e)}}
                            className='bg-zinc-700 p-4 border-[1px] border-zinc-500 text-white rounded-md w-80 flex flex-col gap-4 shadow-lg '
                        >
                           <div className="flex   items-center justify-between w-full">
                            <h2 className='flex  text-center text-xl font-bold'>
                                Edit User
                            </h2>
                            <button   onClick={onClose} className=' text-white'>
                               <X />
                        </button>
                            </div>
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

                            {/* Button */}
                            <button   className='bg-pink-500 flex justify-center hover:bg-pink-600 transition py-2 rounded'>Submit</button>
                        </form>

                </div>

            </div>
        </>
    )
}

export default EditUser