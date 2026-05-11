import React from "react";
import Header from "../common/Header";
import { Outlet } from "react-router";
import Footer from "../common/Footer";
import { useSelector } from "react-redux";
import defaultImage from "/src/assets/Images/default_img.png";
import { getImageUrl } from "../../utils/getImageUrl.js";

function AppLayout() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <Header
        profileImage={
          user?.profileImage ? getImageUrl(user.profileImage) : defaultImage
        } user = {user}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
