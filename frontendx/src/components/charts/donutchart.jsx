import React from "react";
import { Chart } from "primereact/chart";


const DonutChart = ({heading,total,today}) => {
const data = {
    datasets: [
      {
        data: [Number(total), Number(today)],
        backgroundColor: ["#db2777", "#f472b6"],
        hoverBackgroundColor: ["#be185d", "#fb7185"],
        borderWidth: 0,
        hoverOffset: 6,
      },
    ],
  };

  
  
  const options = {
    cutout: "92%", // 🔥 MORE = thinner ring

    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0b0b1a",
        titleColor: "#f472b6",
        bodyColor: "#fff",
        borderColor: "#db2777",
        borderWidth: 1,
      },
    },

    maintainAspectRatio: false, // ⚡ IMPORTANT for sizing control
  };

  return (
    <div className="flex  items-center justify-center">
      
      {/* 🌟 SMALL NEON WRAPPER */}
      <div className="relative w-[70px] h-[70px] flex items-center justify-center
        drop-shadow-[0_0_18px_rgba(219,39,119,0.7)]">

        {/* glow */}
        <div className="absolute w-full h-full rounded-full bg-pink-500/10 blur-xl" />

        {/* chart */}
        <Chart
          type="doughnut"
          data={data}
          options={options}
          className="relative z-10 w-full h-full"
        />
      </div>

    </div>
  );
};

export default DonutChart;