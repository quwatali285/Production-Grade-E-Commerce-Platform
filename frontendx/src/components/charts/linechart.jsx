import { Chart } from 'primereact/chart';

import React from 'react'

const linechart = () => {
      const data = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Users",
        data: [10, 25, 40],
        borderColor: "#42A5F5",
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  };

  return (
      <Chart type="line" data={data} options={options} />
  )
}

export default linechart