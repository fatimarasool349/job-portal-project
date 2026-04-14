import RatingStars from "../../reviewFormComponents/RatingStars";

const FeedbackCard = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT */}
        <div className="lg:w-1/4">
          <div className="flex gap-4 items-center">
            {data.image ? (
              <img src={data.image} className="w-14 h-14 rounded-xl object-cover" />
            ) : (
              <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center font-bold">
                {data.initials}
              </div>
            )}

            <div>
              <h4 className="font-bold">{data.name}</h4>
              <p className="text-xs text-blue-500">{data.role}</p>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500 space-y-1">
            <p>Reviewer: {data.reviewer}</p>
            <p>{data.date}</p>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <RatingStars rating={data.rating} />
            <span className="text-xs font-bold">{data.rating}.0</span>
          </div>

          <blockquote className="italic text-sm border-l-4 pl-4">
            {data.comment}
          </blockquote>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/4 flex flex-col items-end justify-between">
          <span className={`px-3 py-1 text-xs font-bold rounded-full ${data.badgeColor}`}>
            {data.sentiment}
          </span>

          {/* <div className="flex gap-2">
            <button>
              <span className="material-symbols-outlined">share</span>
            </button>
            <button>
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default FeedbackCard;