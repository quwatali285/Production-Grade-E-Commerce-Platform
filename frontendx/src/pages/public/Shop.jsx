import axios from "axios";
import React from "react";
import { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Shop = () => {
    const [Search, setSearch] = useState('')
    const [maincatagory, setmaincatagory] = useState('')
    const [subcatagory, setsubcatagory] = useState('')
    const [childcatagory, setchildcatagory] = useState('')
    const [MinPrice, setMinPrice] = useState(0)
    const [MaxPrice, setMaxPrice] = useState(0)
    const [products, setproducts] = useState([])

    useEffect(() => {

    }, [maincatagory])


    const Allproducts = async () => {
        await axios.get('http://localhost:8000/user/product')
            .then((res) => { setproducts(res.data) })
    }

    Allproducts();

    const filterproduct = products.filter((product) => {
        const min = Number(MinPrice) || 0;
        const max = Number(MaxPrice) || Infinity;

        return (
            product?.name?.toLowerCase().includes(Search.toLowerCase()) &&
            product.price >= min &&
            product.price <= max &&
            (!maincatagory || maincatagory==product.maincatagory) &&
            (!subcatagory || subcatagory==product.subcatagory) &&
            (!childcatagory || childcatagory==product.childcatagory)

        );
    });
    const navigate=useNavigate()
    const handleBuy = (product) => {
      return navigate('/shop/cart',{state: {product}})
    };


    return (
        <div className="min-h-screen flex ">
            <ShopSidebar setSearch={setSearch} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setmaincatagory={setmaincatagory} setsubcatagory={setsubcatagory} setchildcatagory={setchildcatagory} />
            <div className="w-full px-6 py-10 flex flex-col">
                <h2 className="text-3xl font-bold text-white mb-8 ">
                    🛍️ Our Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filterproduct.map((product) => (
                        <div
                            key={product._id}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300"
                        >
                            {/* image area */}
                            <div className="p-3 flex justify-center items-center">
                                <img
                                    src={`http://localhost:8000/images/${product.image}`}
                                    alt={product.name}
                                    className="h-28 w-full object-contain opacity-90 hover:opacity-100 transition"
                                />
                            </div>

                            {/* content */}
                            <div className="p-3 text-center">
                                <h3 className="text-sm font-semibold text-white">
                                    {product.name}
                                </h3>

                                <p className="text-pink-400 text-sm mt-1">
                                    {product.price} Rs
                                </p>

                                <button
                                    onClick={() => {handleBuy(product)}}
                                    className="mt-3 w-full bg-pink-500/80 hover:bg-pink-500 text-white text-sm py-1.5 rounded-md"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;