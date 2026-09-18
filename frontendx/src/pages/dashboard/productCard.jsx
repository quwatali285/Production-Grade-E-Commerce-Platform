import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/admin/product");
        setProducts(res.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="relative h-40  flex flex-col w-49 bg-white/5 border border-white/10 rounded-2xl p-3 overflow-hidden">

      {/* 🌟 glow background */}
      <div className="absolute -top-10 -left-10 w-[120px] h-[120px] bg-pink-500/20 blur-3xl rounded-full" />

      {/* header */}
      <div className="flex justify-between items-center relative z-10">
        <h2 className="text-zinc-300 text-sm">Total Products</h2>

        <span className="text-xs text-pink-400 bg-pink-500/10 px-2 py-1 rounded-full">
          Live
        </span>
      </div>

      {/* number */}
      <div className="relative z-10 mt-1">
        <h1 className="text-4xl font-bold text-white">{products}</h1>
        <p className="text-xs text-zinc-400 mt-1">All products in system</p>
      </div>

      {/* 📈 LINE CHART (SPARKLINE STYLE) */}
      <div className="relative z-10 mt-2">
        <svg viewBox="0 0 300 80" className="w-full">

          {/* glow line */}
          <polyline
            fill="none"
            stroke="#f472b6"
            strokeWidth="2"
            points="0,60 40,50 80,55 120,30 160,40 200,20 240,35 280,15"
            className="drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]"
          />

        </svg>
      </div>

    </div>
  );
};

export default ProductCard;