function ReviewRow({ review, onView }) {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-bold text-sm">
        {review.company?.name}
      </td>

      <td className="px-6 py-4 font-semibold text-sm">
        {review.title}
      </td>

      <td className="px-6 py-4 text-sm">
        {review.overallRating || "N/A"}
      </td>

      <td className="px-6 py-4 text-sm truncate max-w-[200px]">
        {review.reviewText || review.description || "No review text"}
      </td>

      <td className="px-6 py-4 text-xs">
        <div className="flex flex-col gap-1">
          <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded w-fit">
            PRO: {review.pros || "N/A"}
          </span>
          <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded w-fit">
            CON: {review.cons || "N/A"}
          </span>
        </div>
      </td>

      <td className="px-6 py-4 text-xs">
        {review.anonymous ? "Yes" : "No"}
      </td>

      <td className="px-6 py-4 text-sm">
        {review.createdAt
          ? new Date(review.createdAt).toLocaleDateString()
          : "N/A"}
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() => onView(review)}
          className="text-indigo-600 text-xs font-bold hover:underline"
        >
          View Details
        </button>
      </td>
    </tr>
  );
}
 export default ReviewRow;