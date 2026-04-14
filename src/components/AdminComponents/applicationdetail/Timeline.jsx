const Timeline = ({ items = [] }) => {
  return (
    <section className="bg-white rounded-xl p-6 border">
      <h3 className="text-xs font-bold uppercase mb-6">Activity Timeline</h3>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="relative pl-6">
            {/* Dot */}
            <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></span>

            <p className="font-bold">{item.title}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>
            <p className="text-xs text-gray-400">{item.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
