export default function StorageWidget({ used = 140, total = 200 }) {
  const percent = (used / total) * 100;

  return (
    <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white">
      
      <h3 className="text-lg font-bold mb-4">Storage Usage</h3>

      <div className="w-full bg-blue-400/30 rounded-full h-2.5 mb-2">
        <div
          className="bg-white h-2.5 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <p className="text-sm opacity-90">
        {used}GB of {total}GB used
      </p>

      <button className="mt-4 text-sm font-bold bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg">
        Upgrade Plan
      </button>

    </div>
  );
}