import React from "react";
import ResumeSection from "../../components/Profile/ResumeSection";
import SkillsSection from "../../components/profile/SkillsSection";
import UserProfileCard from "../../components/profile/EditProfileCard";
import Header from "../../components/common/Header";
import ApplicationHistory from "../../components/profile/ApplicationHistory";
import SaveChanges from "../../components/profile/SaveChanges";

function UserProfile() {
  return (
    <div>
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
