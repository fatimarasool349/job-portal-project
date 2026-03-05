import React from "react";
import ResumeSection from "../components/Profile/ResumeSection";
import SkillsSection from "../components/Profile/SkillsSection";
import UserProfileCard from "../components/Profile/EditProfileCard";
import Header from "../components/header";
import ApplicationHistory from "../components/Profile/ApplicationHistory";
import SaveChanges from "../components/Profile/SaveChanges";

function UserProfile() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-8">
        <div className="grid-cols-1 gap-8">
        <div className="space-y-8">
          <UserProfileCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResumeSection />
            <SkillsSection />
          </div>
          <ApplicationHistory/>
          <SaveChanges/>
        </div>
      </div>
      </main>
      
    </div>
  );
}

export default UserProfile;
