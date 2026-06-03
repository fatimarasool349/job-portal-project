import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function RatingStar({ stars, setStars, readonly = false }) {
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    const half = index + 0.5;

    return (
      <span
        key={index}
        onClick={() => !readonly && setStars(index + 1)} // disable clicks if readonly
        className={readonly ? "cursor-default" : "cursor-pointer"}
      >
        {stars >= index + 1 ? (
          <FaStar className="text-yellow-400" />
        ) : stars >= half ? (
          <FaStarHalfAlt className="text-yellow-400" />
        ) : (
          <AiOutlineStar className="text-yellow-400" />
        )}
      </span>
    );
  });

  return <div className="flex">{ratingStar}</div>;
}

export default RatingStar;