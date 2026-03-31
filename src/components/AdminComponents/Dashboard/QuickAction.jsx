 function QuickAction({ actions }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Quick Actions
      </h3>

      <div className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <button
              key={index}
              onClick={action.onClick}
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

    </div>
  );
}
export default QuickAction;