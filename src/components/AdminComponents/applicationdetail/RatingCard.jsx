import RatingStar from "../../reviewForm/RatingStar";

const RatingCard = ({ rating = 0, readonly = true }) => {
  return (
    <div className="bg-white p-4 rounded-xl border">
      <h3 className="font-bold mb-2">Candidate Rating</h3>
      <RatingStar stars={rating} readonly={readonly} />
      <p className="mt-2 text-sm text-gray-600">Rating: {rating}.0</p>
    </div>
  );
};

export default RatingCard;