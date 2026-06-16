import StatsCards from "../../components/adminComponents/dashboard/StatsCards";
import RecentActivity from "../../components/adminComponents/dashboard/RecentActivity";
import QuickAction from "../../components/adminComponents/dashboard/QuickAction";
import StorageWidget from "../../components/adminComponents/dashboard/StorageWidget";
import { useRole } from "../../hooks/useRole";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDashboardData } from "../../redux/slices/dashboardSlice";


function Dashboard() {
  const { role } = useRole();
  
    const dispatch = useDispatch();

  const stats = useSelector((state) => state.dashboard.stats);
  const actions = useSelector((state) => state.dashboard.actions);
  const activities = useSelector((state) => state.dashboard.activities);
  const filteredStats = stats.filter((states) => {
    if (!states.for) return true;

    const allowedRoles = Array.isArray(states.for) ? states.for : [states.for];

    return allowedRoles.map((roles) => roles.toLowerCase()).includes(role);
  });

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  const filteredActions = actions.filter((item) => {
    if (!item.for) return true;
    const allowedRoles = Array.isArray(item.for) ? item.for : [item.for];
    return allowedRoles.map((roles) => roles.toLowerCase()).includes(role);
  });

  const filteredActivities = activities.filter((item) => {
    if (!item.for) return true;
    const allowedRoles = Array.isArray(item.for) ? item.for : [item.for];
    return allowedRoles.map((roles) => roles.toLowerCase()).includes(role);
  });

  return (
    <div className="p-8 flex-1">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {filteredStats.map((item, index) => (
          <StatsCards key={index} {...item} />
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RecentActivity activities={filteredActivities} />

        <div className="space-y-8">
          <QuickAction actions={filteredActions} />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
