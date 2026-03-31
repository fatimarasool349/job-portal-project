import StatsCards from "../../components/AdminComponents/Dashboard/StatsCards";
import RecentActivity from "../../components/AdminComponents/Dashboard/RecentActivity";
import QuickAction from "../../components/AdminComponents/Dashboard/QuickAction";
import StorageWidget from "../../components/AdminComponents/Dashboard/StorageWidget";
import { actions,activities,stats } from "../../constant/admindata";



 function Dashboard() {
  return (
    <div className="p-8 flex-1">
      
      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <StatsCards key={index} {...item} />
        ))}
      </section>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <RecentActivity activities={activities} />

        <div className="space-y-8">
          <QuickAction actions={actions} />
          <StorageWidget />
        </div>

      </div>

    </div>
  );
}
export default Dashboard;