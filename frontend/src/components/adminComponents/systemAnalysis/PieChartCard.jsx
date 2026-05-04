import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { pieChartData } from "../../../constants/index.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border">
      <h4 className="font-bold mb-4">Users vs Recruiters</h4>
      <Doughnut data={pieChartData} />

      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Job Seekers</span>
          <span className="font-bold">75%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Recruiters</span>
          <span className="font-bold">25%</span>
        </div>
      </div>
    </div>
  );
}
