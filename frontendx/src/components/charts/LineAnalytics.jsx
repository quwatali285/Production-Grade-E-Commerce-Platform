import { Chart } from "primereact/chart";

const LineAnalytics = ({ heading, data = [], color = "#ec4899" }) => {

  const months = ['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec'];

  let monthArray = Array.from({ length: 12 }, () => []);

  // 🔥 convert dd-mm-yy OR yyyy-mm-dd safely
  const parseDate = (dateStr) => {
    if (!dateStr) return null;

    // already ISO format
    if (dateStr.includes("-") && dateStr.length === 10) {
      const parts = dateStr.split("-");

      // check if yyyy-mm-dd
      if (parts[0].length === 4) {
        return new Date(dateStr);
      }

      // assume dd-mm-yy → convert
      const [dd, mm, yy] = parts;
      return new Date(`20${yy}-${mm}-${dd}`);
    }

    return new Date(dateStr);
  };

  data.forEach(item => {

    if (!item || !item.date) return;

    const d = parseDate(item.date);

    if (!d || isNaN(d.getTime())) return;

    const monthIndex = d.getMonth();

    if (monthIndex < 0 || monthIndex > 11) return;

    monthArray[monthIndex].push(item);
  });

  const chartData = {
    labels: months,
    datasets: [
      {
        data: monthArray.map(arr => arr.length),
        borderColor: color,
        backgroundColor: "rgba(236, 72, 153, 0.08)",
        pointBackgroundColor: color,
        pointBorderColor: "#fff",
        pointRadius: 4,
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: "#9ca3af" } },
      y: { ticks: { color: "#9ca3af" } }
    }
  };

  return (
    <div className="w-full bg-zinc-800/30 p-3 rounded-xl border border-zinc-700 shadow-lg">
      <div className="mb-2">{heading}</div>
      <Chart type="line" data={chartData} options={options} />
    </div>
  );
};

export default LineAnalytics;