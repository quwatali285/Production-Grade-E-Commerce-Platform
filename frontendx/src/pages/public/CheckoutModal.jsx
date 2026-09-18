
import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
const CheckoutModal = ({ productname,image,price,id, qty,onClose}) => {
    const deliverycharges = Number(200)
    const bill = (price * qty) + deliverycharges
    const [phoneno, setphoneno] = useState('')
    const [city, setcity] = useState('')
    const [address, setaddress] = useState('')
    const userid= localStorage.getItem('id');
    const productid=id;
    const [username, setusername] = useState('')
    const onbuyhandler = async (e) => {
        e.preventDefault();
        const formdata=new FormData()
        formdata.append( "phoneno",phoneno) 
        formdata.append( "city ",city )
        formdata.append( "address",address)
        console.log(phoneno,city,address);
        console.log(userid);
        console.log(productid);
       const res= await axios.post('http://localhost:8000/user/getuser',{id:userid})
       setusername(res.data.user.username)
       
       
        axios.post('http://localhost:8000/order/create',{image,productname,price,qty,bill,username,city,address,userid,productid}) 
        setphoneno('');
        setcity('');
        setaddress('');
    }
    return (
        <div className="w-full h-[82vh] left-0  absolute backdrop-blur-3xl  flex  flex-col items-center justify-center">
            <div className="w-full  flex justify-end max-w-5xl">
                <div onClick={() => {onClose()}}>
                    < X />
                </div>
            </div>
            <form onSubmit={(e) => { onbuyhandler(e) }} className="w-full  bg-zinc-600  backdrop-blur-3xl p-3 max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-4">


                {/* LEFT SIDE */}
                <div className="lg:col-span-2 bg-zinc-800 border border-zinc-700 rounded-xl p-4 sm:p-5">

                    <h2 className="text-white text-lg sm:text-xl font-semibold mb-4">
                        Delivery Details
                    </h2>

                    <div className="space-y-4">


                        {/* Phone */}
                        <div>
                            <label className="text-zinc-400 text-xs mb-1 block">
                                Phone
                            </label>

                            <input
                                type="text"
                                value={phoneno}
                                onChange={(e)=>{setphoneno(e.target.value)}}
                                placeholder="03XXXXXXXXX"
                                pattern="03[0-9]{9}"
                                maxLength={11}
                                required
                                className="w-full h-10 bg-zinc-900 border border-zinc-700 rounded-lg px-3 text-sm text-white outline-none focus:border-pink-500"
                            />
                        </div>

                        {/* City (no select overkill feel) */}
                        <div>
                            <label className="text-zinc-400 text-xs mb-1 block">
                                City
                            </label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e)=>{setcity(e.target.value)}}
                                placeholder="Enter city"
                                className="w-full h-10 bg-zinc-900 border border-zinc-700 rounded-lg px-3 text-sm text-white outline-none focus:border-pink-500"
                            />
                        </div>

                        {/* Address (compact) */}
                        <div>
                            <label className="text-zinc-400 text-xs mb-1 block">
                                Address
                            </label>
                            <textarea
                                col={3}
                                value={address}
                                onChange={(e)=>{setaddress(e.target.value)}}
                                placeholder="House, street, area..."
                                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-sm text-white outline-none focus:border-pink-500 resize-none"
                            />
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 h-fit">

                    {/* Promo */}
                    <div className="mb-6">
                        <h3 className="text-white text-base font-semibold mb-3">
                            Promo
                        </h3>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Code"
                                className="flex-1 h-10 bg-zinc-900 border border-zinc-700 rounded-lg px-3 text-sm text-white outline-none focus:border-pink-500"
                            />
                            <button className="h-10 px-4 rounded-lg bg-pink-500 text-white text-sm hover:bg-pink-400">
                                Apply
                            </button>
                        </div>
                    </div>

                    {/* Summary */}
                    <div>
                        <h3 className="text-white text-base font-semibold mb-4">
                            Summary
                        </h3>

                        <div className="space-y-3 text-zinc-300 text-sm">

                            <div className="flex justify-between">
                                <span>Price</span>
                                <span>{price}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Quantity</span>
                                <span>{qty}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Delivery charges</span>
                                <span>Rs. {deliverycharges}</span>
                            </div>

                            <div className="border-t border-zinc-700 pt-3 flex justify-between text-white font-semibold">
                                <span>Bill</span>
                                <span className="text-pink-500">Rs. {bill}</span>
                            </div>

                        </div>

                        <button  type="submit" className="w-full h-10 mt-5 rounded-lg bg-pink-500 text-white text-sm font-semibold hover:bg-pink-400">
                            Pay Now
                        </button>
                    </div>

                </div>
            </form>
        </div>

    )
};
export default CheckoutModal;