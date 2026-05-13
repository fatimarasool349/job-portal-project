import PendingStatusCard from "./PendingStatusCard";
import InterviewStatusCard from "./InterviewStatusCard";
import AcceptedStatusCard from "./AcceptedStatusCard";
import RejectedStatusCard from "./RejectedStatusCard";

export default function ApplicationStatusCard({ data }) {
  switch (data.status) {
    case "pending":
      return <PendingStatusCard data={data} />;

    case "interview":
      return <InterviewStatusCard data={data} />;

    case "accepted":
      return <AcceptedStatusCard data={data} />;

    case "rejected":
      return <RejectedStatusCard data={data} />;

    default:
      return null;
  }
}