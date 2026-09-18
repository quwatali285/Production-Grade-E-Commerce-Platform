import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CheckoutModal from "./CheckoutModal";


const Buyproduct = () => {
  const location=useLocation();
  const [qty, setQty] = useState(1);
  const productx=useLocation().state?.product;
  const [buymodel, setbuymodel] = useState(false)
  const product = {
    name: productx.name,
    price: productx.price,
    id:productx._id,
    oldPrice: productx.price * 1.3,
    rating:(Math.random() * 0.9 + 3).toFixed(1),
    image:
      productx.image
  };

  const Buyproductlogic=()=>{
   return setbuymodel(true)
  }
  return (
    <div className="w-full h-[80vh] relative bg-zinc-900 text-white p-6 flex flex-col md:flex-row gap-8">
       <ToastContainer/>
      {/* LEFT IMAGES */}
      <div className="flex-1 flex-col  h-fit">

      <div className="bg-zinc-800 w-[90%]" >
        <img
          src={`http://localhost:8000/images/${product.image}`}
          className="w-full h-[370px] object-contain  rounded-xl border border-zinc-700"
        />

      </div>
        <div className="flex  gap-2 mt-3">
          {[1,2,3].map((i) => (
            <img
              key={i}
              src={`http://localhost:8000/images/${productx.image}`}
              className="w-20 h-20 object-cover rounded-md border border-zinc-700 hover:border-pink-500 cursor-pointer"
            />
            
          ))}
        </div>
      </div>

      {/* RIGHT INFO */}
      <div className="flex-1 flex flex-col gap-4">

        <h1 className="text-2xl font-semibold">
          {product.name}
        </h1>

        {/* rating */}
        <div className="text-yellow-400">
          ⭐⭐⭐⭐☆ <span className="text-gray-400 ml-2">(133 reviews)</span>
        </div>

        {/* price */}
        <div className="flex items-center gap-3">
          <h2 className="text-3xl text-orange-400">
            Rs. {product.price}
          </h2>
          <span className="line-through text-gray-500">
            Rs. {product.oldPrice}
          </span>
        </div>

        {/* quantity */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            className="px-3 py-1 bg-zinc-700 rounded"
          >
            -
          </button>

          <span className="text-lg">{qty}</span>

          <button
            onClick={() => setQty(qty + 1)}
            className="px-3 py-1 bg-zinc-700 rounded"
          >
            +
          </button>
        </div>

       
        {/* extra info */}
        <div className="text-sm text-gray-400 mt-4 space-y-1">
  <p>✔ Premium Quality Fabric</p>
  <p>✔ Soft & Comfortable Fit</p>
  <p>✔ Trendy Modern Design</p>
  <p>✔ Durable Stitching Finish</p>
  <p>✔ Perfect for Casual & Daily Use</p>
  <p>✔ Easy Wash & Fade Resistant</p>
  <p>✔ Available in Multiple Sizes</p>
</div>
 {/* buttons */}
        <div className="flex gap-3 mt-4">
          <button onClick={()=>Buyproductlogic()} className="flex-1 bg-sky-500 hover:bg-sky-600 py-3 rounded-lg font-semibold">
            Buy Now
          </button>

          <button onClick={()=>toast.success('Product cart Successfylly')} className="flex-1 bg-pink-500 hover:bg-pink-600 py-3 rounded-lg font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
      {buymodel && <CheckoutModal onClose={()=>{setbuymodel(!buymodel)}} id={product.id} productname={product.name} image={product.image} price={product.price} qty={qty} />}
    </div>
  );
};

export default Buyproduct;