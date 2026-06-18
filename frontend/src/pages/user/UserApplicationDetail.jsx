import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getApplicationById } from "../../api/applicationApi";

import ApplicationHeader from "../../components/userApplicationDetail/ApplicationHeader";
import JobDescriptionCard from "../../components/userApplicationDetail/JobDescriptionCard";
import NotesCard from "../../components/userApplicationDetail/NotesCard";
import CompanyOverviewCard from "../../components/userApplicationDetail/CompanyOverviewCard";
import ApplicationStatusCard from "../../components/userApplicationDetail/ApplicationStatusCard";
import WithdrawButton from "../../components/userApplicationDetail/WithdrawButton";
export default function UserApplicationDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { publicId } = useParams();

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await getApplicationById(publicId);
        setData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [publicId]);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!data) {
    return <div className="p-10 text-center">No data found</div>;
  }

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 mb-20">
      <ApplicationHeader data={data} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <JobDescriptionCard job={data.job} />
          {data.status !== "selected" && data.status !== "withdrawn" && (
            <WithdrawButton publicId={data.publicId} />
          )}
          {/* <NotesCard notes={data.coverLetter} /> */}
        </div>

        <aside className="space-y-6">
          <ApplicationStatusCard data={data} />

          <CompanyOverviewCard company={data.company} />
        </aside>
      </div>
    </main>
  );
}
