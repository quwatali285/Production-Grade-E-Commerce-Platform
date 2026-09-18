import React, { useState } from "react";
import Categories from "./Categories";

const ShopSidebar = (
  {
    setmaincatagory,
    setsubcatagory,
    setchildcatagory,
    setSearch,
    setMinPrice,
    setMaxPrice,
  }
) => {
 
  return (
    <div className="w-full sticky top-10  sm:w-52  md:w-64 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 text-white md:sticky md:top-20 h-[45vh] md:h-[83vh] sm:[83vh]">

      {/* SEARCH */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Search</h3>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 text-sm outline-none"
        />
      </div>

      {/* CATEGORY */}
      <div className="mt-5">
        <h3 className="text-sm font-semibold mb-2">Category</h3>
        <Categories setmaincatagory={setmaincatagory} setsubcatagory={setsubcatagory} setchildcatagory={setchildcatagory}/>

      </div>

      {/* PRICE FILTER */}
      <div className="mt-5">
        <h3 className="text-sm font-semibold mb-2">Price Range</h3>

        <input
          type="number"
          placeholder="Min price"
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full mb-2 px-3 py-2 rounded-md bg-black/30 border border-white/10 text-sm outline-none"
        />

        <input
          type="number"
          placeholder="Max price"
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-black/30 border border-white/10 text-sm outline-none"
        />
      </div>
    </div>
  );
};

export default ShopSidebar;

