import { useState, useMemo } from "react";
import ReviewTable from "../../components/adminComponents/reviewdashboard/ReviewTable";
import ReviewModal from "../../modal/ReviewModal";
import { userReviews } from "../../constant/index.js";
import { useRole } from "../../hooks/useRole";
import Pagination from "../../components/adminComponents/common/Pagination";
import { usePagination } from "../../hooks/usePagination";

function ReviewsDashboard() {
  const [reviews, setReviews] = useState(userReviews);
  const [selectedReview, setSelectedReview] = useState(null);
  const { role, recruiterId, canViewAll } = useRole();
  const roleFilteredreview = useMemo(() => {
    return canViewAll
      ? reviews
      : reviews.filter((review) => review.recruiter_id == recruiterId);
  }, [reviews, canViewAll, recruiterId]);
  const { currentPage, paginatedData, setCurrentPage } = usePagination(
    roleFilteredreview,
    10,
  );
  const pageSize = 10;
  const handleFlag = (id) => {
    console.log("Flag review:", id);
  };

  const handleVerify = (id) => {
    console.log("Verify review:", id);
  };

  return (
    <div className="p-8 flex-1">
      <h1 className="text-2xl font-bold mb-6">Reviews</h1>

      <ReviewTable reviews={paginatedData} onView={setSelectedReview} />

      <Pagination
        currentPage={currentPage}
        totalEntries={roleFilteredreview.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />

      <ReviewModal
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
        onVerify={handleVerify}
        onFlag={handleFlag}
      />
    </div>
  );
}

export default ReviewsDashboard;
