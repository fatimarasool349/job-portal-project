import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { lineChartData } from "../../../constant/index.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function LineChartCard() {
 

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border">
      <h4 className="font-bold mb-4">Applications per Month</h4>
      <Line data={lineChartData} />
    </div>
  );
}

export default LineChartCard;