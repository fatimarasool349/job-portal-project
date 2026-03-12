import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
function RatingStar({  stars, setStars }) {
  const ratingStar = Array.from({ length:5 }, (element, index) => {
    let number = index + 0.5;
    
    return (
      <span key={index}   onClick={() => setStars(index + 1)}
        className="cursor-pointer">
        {stars >= index + 1 ? (
          <FaStar className="icon text-yellow-400" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon text-yellow-400" />
        ) : (
          <AiOutlineStar className="icon text-yellow-400" />
        )}
      </span>
    );
  });
  return <div className="flex">
    {ratingStar}
  </div>;
}

export default RatingStar;
