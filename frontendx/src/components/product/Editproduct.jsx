import React, { useState } from 'react'
import { X } from 'lucide-react';
import axios from 'axios';
const EditProduct = ({ id, onClose, rowdataname, rowdataprice, rowdataimage, rowdatamaincatagory, rowdatasubcatagory, rowdatachildcatagory }) => {

    const [name, setname] = useState(rowdataname)
    const [price, setprice] = useState(rowdataprice)
    const [image, setimage] = useState(rowdataimage)
    const [maincatagory, setmaincatagory] = useState(rowdatamaincatagory)
    const [subcatagory, setsubcatagory] = useState(rowdatasubcatagory)
    const [childcatagory, setchildcatagory] = useState(rowdatachildcatagory)
    const EditProducthandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('maincatagory', maincatagory);
        formData.append('subcatagory', subcatagory);
        formData.append('childcatagory', childcatagory);
        formData.append('id', id);
        if (image) {
            formData.append('image', image);
        }
        const resx = await axios.post('http://localhost:8000/admin/get', { id })
        setname(resx.data.name)
        await axios.post(
            'http://localhost:8000/admin/Editproduct',
            formData
        );

        setTimeout(() => {
            setname('');
            setprice('');
            setimage(null);
            onClose();
        }, 100);
    }
    return (
        <>
            <div className="fixed inset-0 flex flex-col  items-center justify-center bg-black/40 backdrop-blur-sm z-50">
                <div className='flex flex-col'>

                    {/* Modal box */}
                    <form
                        onSubmit={(e) => { EditProducthandler(e) }}
                        className='bg-zinc-700 p-4 border-[1px] w-[60vw]! border-zinc-500 text-white rounded-md w-80 flex flex-col gap-4 shadow-lg '
                    >

                        <div className="flex justify-between w-full">
                            <h2 className='flex self-center text-center text-xl font-bold'>
                                Edit Product
                            </h2>
                            <button onClick={onClose} className='flex self-end text-white'>
                                <X />
                            </button></div>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 gap-3'>
                            <div className='flex flex-col'>
                                {/* name Input */}
                                <div>
                                    <label className='text-sm text-gray-300'>Product Name</label>
                                    <input
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                        className='w-full  px-3 h-10 rounded bg-zinc-800 border border-zinc-500 outline-none text-white  tracking-widest'
                                        type='text'
                                        placeholder='Enter New name'
                                    />
                                </div>
                                {/* price Input */}
                                <div>
                                    <label className='text-sm text-gray-300'>Product Price</label>
                                    <input
                                        value={price}
                                        onChange={(e) => setprice(e.target.value)}
                                        className='w-full  px-3 h-10 rounded bg-zinc-800 border border-zinc-500 outline-none text-white  tracking-widest'
                                        type="number"
                                        placeholder='Enter new price'
                                        maxLength={9}
                                    />
                                </div>
                                {/* image Input */}
                                <div>
                                    <label className='text-sm text-gray-300'>Product Image</label>
                                    <input
                                        className='w-full  px-3 h-10 rounded bg-zinc-800 border border-zinc-500 outline-none text-white text-center tracking-widest'
                                        type="file"
                                        onChange={(e) => setimage(e.target.files[0])}
                                        maxLength={10}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                {/* Main catagory */}

                                <div>
                                    <label className='text-sm text-gray-300'>
                                        Product Main Category
                                    </label>

                                    <select
                                        value={maincatagory}
                                        onChange={(e) => setmaincatagory(e.target.value)}
                                        className='w-full  px-3 h-10 rounded bg-zinc-800 border border-zinc-500 outline-none text-white tracking-widest'
                                    >
                                        <option value="">Select Category</option>
                                        <option value="gents">gents</option>
                                        <option value="ladies">ladies</option>
                                        <option value="kids">kids</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='text-sm text-gray-300'>Product Sub Catagory</label>
                                    <select
                                        value={subcatagory}
                                        onChange={(e) => setsubcatagory(e.target.value)}
                                        className='w-full  px-3 h-10 rounded bg-zinc-800 border border-zinc-500 outline-none text-white  tracking-widest'
                                    >
                                        <option value="">Select Category</option>
                                        <option value="topwear">topwear</option>
                                        <option value="bottomwear">bottomwear</option>
                                        <option value="dresses">dresses</option>
                                        <option value="boys">boys</option>
                                        <option value="girls">girls</option>
                                    </select>
                                </div>
                                {/* Child catagory */}
                                <div>
                                    <label className='text-sm text-gray-300'>Product Child Catagody</label>
                                    <select
                                        value={childcatagory}
                                        onChange={(e) => setchildcatagory(e.target.value)}
                                        className='w-full  px-3 h-10 rounded bg-zinc-800 border border-zinc-500 outline-none text-white  tracking-widest'
                                    >
                                        <option value="">Select Category</option>
                                        <option value="tshirt">tshirt</option>
                                        <option value="shirt">shirt</option>
                                        <option value="jacket">jacket</option>
                                        <option value="jeans">jeans</option>
                                        <option value="pants">pants</option>
                                        <option value="trouser">trouser</option>
                                        <option value="casual">casual</option>
                                        <option value="crop">crop</option>
                                        <option value="partydress">partydress</option>
                                        <option value="casualdress">casualdress</option>
                                        <option value="boystshirts">boystshirts</option>
                                        <option value="boysshorts">boysshorts</option>
                                        <option value="girlsfroks">girlsfroks</option>
                                        <option value="girlstopwear">girlstopwear</option>
                                        <option value="girlsskirts">girlsskirts</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Button */}
                        <button className='bg-pink-500 flex justify-center hover:bg-pink-600 transition py-2 rounded'>Submit</button>
                    </form>

                </div>

            </div>
        </>

    )
}

export default EditProduct