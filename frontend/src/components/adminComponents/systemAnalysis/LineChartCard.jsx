import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function LineChartCard({ data = [] }) {

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const chartData = {
    labels: data.map((item) => months[item._id - 1]),
    datasets: [
      {
        label: "Applications",
        data: data.map((item) => item.count),
        borderColor: "#10b981",
        backgroundColor: "#10b981",
        tension: 0.4, // smooth curve
        fill: false,
      },
    ],
  };

  // Optional safety
  if (!data.length) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <h4 className="font-bold mb-4">Applications per Month</h4>
        <div>No data available</div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border">
      <h4 className="font-bold mb-4">Applications per Month</h4>
      <Line data={chartData} />
    </div>
  );
}

export default LineChartCard;