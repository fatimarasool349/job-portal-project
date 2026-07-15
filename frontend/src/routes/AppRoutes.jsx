import { useRoutes } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";
import { allRoutes } from "./RouteConfig";

export default function AppRoutes() {
  const element = useRoutes(allRoutes);

  return (
    <>
      <ScrollToTop />
      {element}
    </>
  );
}
