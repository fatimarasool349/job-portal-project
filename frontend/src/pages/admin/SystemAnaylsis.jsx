import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StatsCards from "../../components/adminComponents/dashboard/StatsCards";
import BarChartCard from "../../components/adminComponents/systemAnalysis/BarChartCard";
import LineChartCard from "../../components/adminComponents/systemAnalysis/LineChartCard";
import PieChartCard from "../../components/adminComponents/systemAnalysis/PieChartCard";
import CategoriesTable from "../../components/adminComponents/systemAnalysis/CategoriesTable";
import { getDashboardData } from "../../redux/slices/dashboardSlice";
import { useRole } from "../../hooks/useRole";

function SystemAnalysis() {
  const { role } = useRole();
  const dispatch = useDispatch();

  const stats = useSelector((state) => state.dashboard.stats);
  const charts = useSelector((state) => state.dashboard.charts);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  const filteredStats = stats.filter((item) =>
    item.for?.includes(role)
  );

  return (
    <div className="p-6 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStats.map((item, index) => (
          <StatsCards key={index} {...item} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartCard data={charts.jobsPerMonth}  />
        <LineChartCard data={charts.applicationsPerMonth} />
      </div>

      {/* Other */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PieChartCard data={charts.jobsByCategory} />
        <CategoriesTable data={charts.topCategories} />
      </div>
    </div>
  );
}

export default SystemAnalysis;