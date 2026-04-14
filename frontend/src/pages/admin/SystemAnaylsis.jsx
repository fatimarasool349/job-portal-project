import StatsCards from "../../components/adminComponents/dashboard/StatsCards";
import BarChartCard from "../../components/adminComponents/systemAnalysis/BarChartCard";
import LineChartCard from "../../components/adminComponents/systemAnalysis/LineChartCard";
import PieChartCard from "../../components/adminComponents/systemAnalysis/PieChartCard";
import CategoriesTable from "../../components/adminComponents/systemAnalysis/CategoriesTable";
import { stats } from "../../constant/index.js";
import {useRole} from "../../hooks/useRole";


 function SystemAnalysis() {
  const { role } = useRole();
  const filteredStats = stats.filter((item) =>
  item.for.includes(role)
);
  

  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStats.map((item, index) => (
          <StatsCards key={index} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartCard />
        <LineChartCard />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PieChartCard />
        <CategoriesTable />
      </div>
    </div>
  );
}
export default SystemAnalysis;