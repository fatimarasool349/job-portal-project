import { useState } from "react";
import ReviewTable from "../../components/adminComponents/reviewdashboard/ReviewTable";
import ReviewModal from "../../modal/ReviewModal";
import { userReviews } from "../../constant/admindata";

function ReviewsDashboard(){
  const [selectedReview, setSelectedReview] = useState(null);
  const handleFlag = (id) => {
  console.log("Flag review:", id);
};

const handleVerify = (id) => {
  console.log("Verify review:", id);
};

 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Reviews</h1>

      <ReviewTable reviews={userReviews} onView={setSelectedReview} />

      <ReviewModal
        review={selectedReview}
        onClose={() => setSelectedReview(null)
          
        }
        onVerify={handleVerify}
        onFlag={handleFlag}
      />
    </div>
  );
};

export default ReviewsDashboard;