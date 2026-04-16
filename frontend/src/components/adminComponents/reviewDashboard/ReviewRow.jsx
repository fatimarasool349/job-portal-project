import RatingStar from "../../reviewForm/RatingStar";
 function ReviewRow  ({ review, onView })  {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-bold text-sm">{review.company}</td>
      <td className="px-6 py-4 font-semibold text-sm">{review.title}</td>

      <td className="px-6 py-4">
        <RatingStar stars={review.rating} readonly={true} />
      </td>

      <td className="px-6 py-4 text-sm truncate max-w-[200px]">
        {review.review}
      </td>

      <td className="px-6 py-4 text-xs">
        <div className="flex flex-col gap-1">
          <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded w-fit">
            PRO: {review.pro}
          </span>
          <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded w-fit">
            CON: {review.con}
          </span>
        </div>
      </td>

      <td className="px-6 py-4 text-xs">
        {review.anonymous ? "Yes" : "No"}
      </td>

      <td className="px-6 py-4 text-sm">{review.date}</td>

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
};

export default ReviewRow;