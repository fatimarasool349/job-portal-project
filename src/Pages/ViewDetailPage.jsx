import BreadCrumbs from "../components/ViewDetail/BreadCrumbs";
import ViewDetail from "../components/ViewDetail/ViewDetail";
import JobHeaderCard from "../components/ViewDetail/JobHeaderCard";
import { jobData } from "../constant/data";
import { Outlet } from "react-router";

function ViewDetailPage() {
  return (
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <main class="px-6 lg:px-40 py-8">
            <JobHeaderCard job={jobData}/>
            <BreadCrumbs/>
            <ViewDetail/>

        </main>
      </div>
    </div>
  );
}

export default ViewDetailPage;
