import { colorMap } from "../../../constants/index.js";
import * as Icons from "lucide-react";

function RecentActivity({ activities }) {
  return (
    <section className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
      </div>

      <div className="space-y-6">
        {activities.slice(0, 5).map((item, index) => {
          const IconComponent = Icons[item.icon] || Icons.FileText;

          return (
            <div key={index} className="flex items-start">
              <div
                className={`h-10 w-10 rounded-full bg-gray-100  ${colorMap[item.color].bg} rounded-lg flex items-center justify-center`}
              >
                <IconComponent className={`w-5 ${colorMap[item.color].text} h-5`} />
              </div>

              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-xs text-gray-400 mt-1">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default RecentActivity;
