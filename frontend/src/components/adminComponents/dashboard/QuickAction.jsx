import { useNavigate } from "react-router-dom";
import { useRole } from "../../../hooks/useRole";

function QuickAction({ actions }) {
  const navigate = useNavigate();

  const { role } = useRole();

  if (!role) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
        <p className="text-gray-500">No role found. Cannot display actions.</p>
      </div>
    );
  }

  const visibleActions = actions.filter(action => {
    if (!action.for) return false;

    const allowedRoles = Array.isArray(action.for) ? action.for : [action.for];

    return allowedRoles.some(role => role?.trim().toLowerCase() === role);
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>

      {visibleActions.length === 0 ? (
        <p className="text-gray-500">No actions available for your role.</p>
      ) : (
        <div className="space-y-3">
          {visibleActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(action.path)}
                className={`w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center ${
                  action.primary
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white border border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {action.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default QuickAction;