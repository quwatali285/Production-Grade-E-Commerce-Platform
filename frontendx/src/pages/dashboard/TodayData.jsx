import React from 'react'



import axios from "axios";
import { useEffect } from "react";
import DonutChart from '../../components/charts/donutchart';

const TodayData = ({ heading, total, today }) => {

  return (
    <div className="relative  h-40 w-49 md:w-[222px] flex flex-col bg-white/5 border border-white/10 rounded-2xl  p-3 overflow-hidden">

      {/* 🌟 glow background */}
      <div className="absolute -top-10 -left-10 w-[120px] h-[120px] bg-rose-500/20 blur-3xl rounded-full" />

      {/* header */}
      <div className="flex justify-between  h-fit py-0 items-center relative z-10">
        <h2 className="text-zinc-300 text-sm">
          <div>Total {heading}</div>
        </h2>
        {/* number */}
        <div className="relative z-10 ">
          <h1 className=" font-thin text-white">{total}</h1>
        </div>

      </div>
      {/* second header */}
         <div className="flex justify-between   h-fit py-0 items-center relative z-10">
        <h2 className="text-zinc-300 text-sm">
          <div>New {heading}</div>
        </h2>
        {/* number */}
        <div className="relative z-10 ">
          <h1 className=" font-thin text-white">{today}</h1>
        </div>

      </div>
      <span className="text-xs text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full w-fit">
        Live
      </span>


      <DonutChart total={total} today={today} />

    </div>
  );
};
export default TodayData