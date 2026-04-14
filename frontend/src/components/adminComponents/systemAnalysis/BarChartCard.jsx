import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { barChartData } from "../../../constant/index.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

 function BarChartCard() {
 

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border">
      <div className="flex justify-between mb-6">
        <h4 className="font-bold">Jobs Posted per Month</h4>
        <select className="text-xs border rounded-md py-1">
          <option>Last 6 Months</option>
        </select>
      </div>

      <Bar data={barChartData} />
    </div>
  );
}
export default BarChartCard;