import React, { useState } from "react";

const Categories = (
  {
    setmaincatagory,
    setsubcatagory,
    setchildcatagory
  }
) => {
  const [gents, setGents] = useState(false);
  const [ladies, setLadies] = useState(false);
  const [kids, setKids] = useState(false);

  const [gTop, setGTop] = useState(false);
  const [gDress, setgDress] = useState(false);

  const [lTops, setLTops] = useState(false);
  const [lDresses, setLDresses] = useState(false);

  const [kBoys, setKBoys] = useState(false);
  const [kGirls, setKGirls] = useState(false);

  return (
    <div className="w-44  text-white text-sm rounded-md">

      {/* ================= GENTS ================= */}
      <div
        onClick={() => {
          setGents(!gents);
          setmaincatagory('gents');
        } }
        className="flex justify-between  px-2 py-1 cursor-pointer hover:bg-[#1e1e1e]"
      >
        <span>Gents</span>
        <span className="text-[10px]">{gents ? "▼" : "▶"}</span>
      </div>

      {gents && (
        <div className={`pl-3 text-gray-300 `}>

          {/* Top Wear */}
          <div
            onClick={() =>{ 
              setGTop(!gTop)
              setsubcatagory('topwear')
            }}
            className="flex justify-between px-2 py-1 cursor-pointer hover:bg-[#1e1e1e]"
          >
            <span>Top Wear</span>
            <span className="text-[10px]">{gTop ? "▼" : "▶"}</span>
          </div>

          {gTop && (
            <div className="pl-3 cursor-pointer text-red-300">
              <div onClick={()=>{
                setchildcatagory('shirt')
              }}>Shirts</div>
              <div onClick={()=>{
                setchildcatagory('tshirt')
              }}>T-Shirts</div>
              <div onClick={()=>{
                setchildcatagory('jacket')
              }}>Jackets</div>
            </div>
          )}

          {/* Bottom Wear */}
          <div
            onClick={() => {
              setgDress(!gDress)
              setsubcatagory('bottomwear')
            }}
            className="flex justify-between px-2 py-1 cursor-pointer hover:bg-[#1e1e1e]"
          >
            <span>Bottom Wear</span>
            <span className="text-[10px]">{gDress ? "▼" : "▶"}</span>
          </div>

          {gDress && (
            <div className="pl-3 cursor-pointer text-red-300">
              <div onClick={()=>{setchildcatagory('jeans')}}>Jeans</div>
              <div onClick={()=>{setchildcatagory('pants')}}>Pants</div>
              <div onClick={()=>{setchildcatagory('trouser')}}>Trouser</div>
            </div>
          )}

        </div>
      )}

      {/* ================= LADIES ================= */}
      <div
        onClick={() => {
          setLadies(!ladies)
          setmaincatagory('ladies');
        }}
        
        className="flex justify-between px-2 py-1 cursor-pointer hover:bg-[#1e1e1e]"
      >
        <span>Ladies</span>
        <span className="text-[10px]">{ladies ? "▼" : "▶"}</span>
      </div>

      {ladies && (
        <div className="pl-3 text-gray-300">

          <div
            onClick={() => {
              setLTops(!lTops)
              setsubcatagory('topwear')
            }}
            className="flex justify-between px-2 py-1 cursor-pointer hover:bg-[#1e1e1e]"
          >
            <span>Tops</span>
            <span className="text-[10px]">{lTops ? "▼" : "▶"}</span>
          </div>

          {lTops && (
            <div className="pl-3 cursor-pointer text-red-300">
              <div onClick={()=>{setchildcatagory('casual')}}>Casual Tops</div>
              <div onClick={()=>{setchildcatagory('crop')}}>Crop Tops</div>
            </div>
          )}

          <div
            onClick={() => setLDresses(!lDresses)}
            className="flex justify-between px-2 py-1 cursor-pointer hover:bg-[#1e1e1e]"
          >
            <span>Dresses</span>
            <span className="text-[10px]">{lDresses ? "▼" : "▶"}</span>
          </div>

          {lDresses && (
            <div className="pl-3 cursor-pointer text-red-300">
              <div onClick={()=>{setchildcatagory('partydress')}}>Party Wear</div>
              <div onClick={()=>{setchildcatagory('casualdress')}}>Casual Dresses</div>
            </div>
          )}

        </div>
      )}

      {/* ================= KIDS ================= */}
      <div
        onClick={() => {
          setKids(!kids)
          setmaincatagory('kids')
        }}
        className="flex justify-between px-2 py-1 cursor-pointer hover:bg-[#1e1e1e]"
      >
        <span>Kids</span>
        <span className="text-[10px]">{kids ? "▼" : "▶"}</span>
      </div>

      {kids && (
        <div className="pl-3 text-gray-300">

          <div
            onClick={() => {
              setKBoys(!kBoys)
              setsubcatagory('boys')
            }}
            
            className="flex justify-between px-2 py-1 cursor-pointer hover:bg-[#1e1e1e]"
          >
            <span>Boys</span>
            <span className="text-[10px]">{kBoys ? "▼" : "▶"}</span>
          </div>

          {kBoys && (
            <div className="pl-3 cursor-pointer text-red-300">
              <div onClick={()=>{setchildcatagory('boystshirts')}}>T-Shirts</div>
              <div onClick={()=>{setchildcatagory('boysshorts')}}>Shorts</div>
            </div>
          )}

          <div
            onClick={() => {
              setKGirls(!kGirls)
              setsubcatagory('girls')
            }}
            className="flex justify-between px-2 py-1 cursor-pointer hover:bg-[#1e1e1e]"
          >
            <span>Girls</span>
            <span className="text-[10px]">{kGirls ? "▼" : "▶"}</span>
          </div>

          {kGirls && (
            <div className="pl-3 cursor-pointer text-red-300">
              <div onClick={()=>setchildcatagory('girlsfroks')}>Frocks</div>
              <div onClick={()=>setchildcatagory('girlsskirts')}>Skirts</div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default Categories;