import { TrendingUp, TrendingDown } from "lucide-react";
import {categoryTableData} from "../../../constants/index.js";

export default function CategoriesTable() {
 

  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border">
      <h4 className="font-bold mb-6">Top Performing Categories</h4>

      <table className="w-full text-left">
        <thead>
          <tr className="text-xs text-gray-400 uppercase">
            <th>Category</th>
            <th>Openings</th>
            <th className="text-center">Salary</th>
            <th className="text-right">Trend</th>
          </tr>
        </thead>

        <tbody>
          {categoryTableData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-4 font-medium">{item.name}</td>
              <td>{item.openings}</td>
              <td className="text-center">{item.salary}</td>
              <td className="text-right">
                <span
                  className={`px-2 py-1 rounded text-xs flex items-center justify-end gap-1 ${
                    item.up
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.up ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  {item.trend}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}