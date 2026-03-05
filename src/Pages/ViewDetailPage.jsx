import React from "react";
import Header from "../components/header";
import BreadCrumbs from "../components/ViewDetail/BreadCrumbs";
import ViewDetail from "../components/ViewDetail/ViewDetail";
import JobHeaderCard from "../components/ViewDetail/JobHeaderCard";
import Footer from "../common/Footer";
import { jobData } from "../constant/data";

function ViewDetailPage() {
  return (
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div class="layout-container flex h-full grow flex-col">
        <Header />
        <main class="px-6 lg:px-40 py-8">
            <JobHeaderCard job={jobData}/>
            <BreadCrumbs/>
            <ViewDetail/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default ViewDetailPage;
