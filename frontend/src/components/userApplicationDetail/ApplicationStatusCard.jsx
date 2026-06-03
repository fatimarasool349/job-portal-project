import PendingStatusCard from "./PendingStatusCard";
import InterviewStatusCard from "./InterviewStatusCard";
import AcceptedStatusCard from "./AcceptedStatusCard";
import RejectedStatusCard from "./RejectedStatusCard";
import HiredCard from "./HiredCard";
import InterviewCompletedCard from "./InterviewCompletedCard";
import InterviewScheduledCard from "./InterviewScheduledCard";
import UnderReviewCard from "./UnderReviewCard";
export default function ApplicationStatusCard({ data }) {
  switch (data.status) {
    case "applied":
      return <PendingStatusCard data={data} />;

    case "interview":
      return <InterviewStatusCard data={data} />;

    case "selected":
      return <AcceptedStatusCard data={data} />;

    case "rejected":
      return <RejectedStatusCard data={data} />;
    case "hired":
      return <HiredCard data={data} />;
    case "interview completed":
      return <InterviewCompletedCard data={data} />;
    case "interview scheduled":
      return <InterviewScheduledCard data={data} />;
    case "under review":
      return <UnderReviewCard data={data} />;
    default:
      return null;
  }
}