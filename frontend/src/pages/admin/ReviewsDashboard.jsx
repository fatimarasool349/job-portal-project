import { useState, useMemo, useEffect } from "react";
import ReviewTable from "../../components/adminComponents/reviewdashboard/ReviewTable";
import ReviewModal from "../../modal/ReviewModal";
import { userReviews } from "../../constants/index.js";
import { useRole } from "../../hooks/useRole";
import Pagination from "../../components/adminComponents/common/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { getAllReviews, getRecruiterReviews } from "../../api/reviewApi";
function ReviewsDashboard() {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const { role, recruiterCompanyId, canViewAll } = useRole();


  useEffect(() => {
    const fetchReviews = async () => {
       try {
        const res = canViewAll
          ? await getAllReviews()
          : await getRecruiterReviews();

        console.log("API:", res.data);
        setReviews(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchReviews();
  }, [canViewAll]);

    const filteredReviews = canViewAll
    ? reviews
    : reviews.filter((r) => r.company?._id === recruiterCompanyId);

  const { currentPage, paginatedData, setCurrentPage } = usePagination(
    filteredReviews,
    10
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [reviews, canViewAll]);
  const pageSize = 10;
  const handleFlag = (id) => {
    console.log("Flag review:", id);
  };

  const handleVerify = (id) => {
    console.log("Verify review:", id);
  };
  console.log("PAGINATED:", paginatedData);

  return (
    <div className="p-8 flex-1">
      <h1 className="text-2xl font-bold mb-6">Reviews</h1>

      <ReviewTable reviews={paginatedData} onView={setSelectedReview} />

      <Pagination
        currentPage={currentPage}
        totalEntries={filteredReviews.length}
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
