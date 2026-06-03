import { ArrowUp, ArrowDown } from "lucide-react";
import { colorMap } from "../../../constants/index.js";
import * as Icons from "lucide-react";

function StatsCards({
  title,
  value,
  icon,
  change,
  isPositive = true,
  color = "blue",
})
 {
    const IconComponent = Icons[icon]; // 🔥 convert string to component
console.log("ICON VALUE:", icon);
console.log("ICON COMPONENT:", Icons[icon]);
  return (
    
    <div
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md  transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 ${colorMap[color].bg} rounded-lg`}>
          <IconComponent className={`w-6 h-6 ${colorMap[color].text}`} />
        </div>

        <span
          className={`text-sm font-semibold flex items-center ${
            isPositive ? "text-green-500 animate-bounce" : "text-red-500 animate-bounce"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDown className="w-4 h-4 mr-1" />
          )}
          {change}%
        </span>
      </div>

      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-1">
         {value}</p>
    </div>
  );
}
export default StatsCards;
