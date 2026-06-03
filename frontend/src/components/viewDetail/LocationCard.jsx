function LocationCard({ 
  image, 
  title, 
  address, 
  icon = "location_on", 
  overlayOpacity = 50 
}) {
  return (
    <div className="rounded-xl overflow-hidden h-64 border border-slate-200 dark:border-slate-800 relative">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800">
        <img
          className={`w-full h-full object-cover opacity-${overlayOpacity}`}
          alt={title}
          src={image}
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3">
          
          {/* Icon Circle */}
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined">{icon}</span>
          </div>

          {/* Text */}
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{title}</p>
            <p className="text-xs text-slate-500">{address}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LocationCard;