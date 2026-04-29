import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import IntroAnimation from "../components/IntroAnimation/IntroAnimation";
import Project_details_section from "../pages/Home/Sections/Project_details_section";
import Certifications_section from "../pages/Home/Sections/Certifications_section";
import Blog_section from "../pages/Home/Sections/Blog_section";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IntroAnimation />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/projectDetails/:id/:field"
        element={<Project_details_section />}
      />
      <Route path="/certifications" element={<Certifications_section />} />
      <Route path="/blog" element={<Blog_section />} />
    </Routes>
  );
}

export default AppRoutes;
