import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartCard({ data = [] }) {

  const chartData = {
    labels: data.map((item) => item._id || "Other"),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
        ],
      },
    ],
  };

  const total = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border">
      <h4 className="font-bold mb-4">Jobs by Category</h4>

      {!data.length ? (
        <div>No data available</div>
      ) : (
        <Doughnut data={chartData} />
      )}

      <div className="mt-4 space-y-2">
        {data.map((item, index) => {
          const percentage = ((item.count / total) * 100).toFixed(1);

          return (
            <div key={index} className="flex justify-between text-sm">
              <span>{item._id || "Other"}</span>
              <span className="font-bold">{percentage}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}