import ReviewRow from "./ReviewRow";

function ReviewTable  ({ reviews, onView })  {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead >
          <tr className="bg-blue-600 text-white not-only-of-type: border-b border-slate-200">
            <th className="px-6 py-4 text-xs font-semibold text-white">Company</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Title</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Rating</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Review</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Pros/Cons</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Anon</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Date</th>
            <th className="px-6 py-4 text-xs font-semibold text-white">Action</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <ReviewRow
              key={review.id}
              review={review}
              onView={onView}
            />
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ReviewTable;