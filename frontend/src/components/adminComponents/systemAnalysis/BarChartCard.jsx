import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChartCard({ data = [] }) {

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // Convert API → Chart format
  const chartData = {
    labels: data.map((item) => months[item._id - 1]),
    datasets: [
      {
        label: "Jobs",
        data: data.map((item) => item.count),
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border">
      <div className="flex justify-between mb-6">
        <h4 className="font-bold">Jobs Posted per Month</h4>
        <select className="text-xs border rounded-md py-1">
          <option>Last 6 Months</option>
        </select>
      </div>

      <Bar data={chartData} />
    </div>
  );
}

export default BarChartCard;