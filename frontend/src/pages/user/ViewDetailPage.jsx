import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/viewDetail/BreadCrumbs";
import ViewDetail from "../../components/viewDetail/ViewDetail";
import JobHeaderCard from "../../components/viewDetail/JobHeaderCard";
import { getJobBySlug } from "../../api/jobApi";
import { useState, useEffect } from "react";

function ViewDetailPage() {
  const { slug } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await getJobBySlug(slug);
        setJob(res);

      } catch (error) {
        console.log("Error fetching job detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <main className="px-6 lg:px-40 py-8">

          <JobHeaderCard job={job} />

          <BreadCrumbs jobTitle={job.title} />

          <ViewDetail job={job} company={job?.company||null} />

        </main>
      </div>
    </div>
  );
}

export default ViewDetailPage;