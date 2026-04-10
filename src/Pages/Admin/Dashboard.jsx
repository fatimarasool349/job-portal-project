import StatsCards from "../../components/adminComponents/dashboard/StatsCards";
import RecentActivity from "../../components/adminComponents/dashboard/RecentActivity";
import QuickAction from "../../components/adminComponents/dashboard/QuickAction";
import StorageWidget from "../../components/adminComponents/dashboard/StorageWidget";
import { actions, activities, stats } from "../../constant/admindata";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const role = localStorage.getItem("role")?.trim().toLowerCase();
  const navigate = useNavigate();
  const filteredStats = stats.filter((s) => {
    if (!s.for) return true;

    const allowedRoles = Array.isArray(s.for) ? s.for : [s.for];

    return allowedRoles.map((r) => r.toLowerCase()).includes(role);
  });

  const filteredActions = actions.filter((item) => {
    if (!item.for) return true;
    const allowedRoles = Array.isArray(item.for) ? item.for : [item.for];
    return allowedRoles.map((r) => r.toLowerCase()).includes(role);
  });

  const filteredActivities = activities.filter((item) => {
    if (!item.for) return true; // if no role specified, show to all
    const allowedRoles = Array.isArray(item.for) ? item.for : [item.for];
    return allowedRoles.map((r) => r.toLowerCase()).includes(role);
  });

  return (
    <div className="p-8 flex-1">
      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {filteredStats.map((item, index) => (
          <StatsCards key={index} {...item} />
        ))}
      </section>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RecentActivity activities={filteredActivities} />

        <div className="space-y-8">
          <QuickAction actions={filteredActions} />
          <StorageWidget />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
