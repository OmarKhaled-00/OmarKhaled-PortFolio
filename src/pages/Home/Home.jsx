import Header from "../../components/Header/Header";
import Hero_Section from "./Sections/Hero_section";
import AboutMe_section from "./Sections/AboutMe_section";
import Skills_section from "./Sections/Skills_section";
import ParticlesBackground from "../../components/particles/particles";
import { useAppContext } from "../../context/AppContext";
import WorkExperience_section from "./Sections/WorkExperience_section";
const Projects_section = lazy(() => import("./Sections/Projects_section"));
import Footer from "../../components/Footer/Footer";
import ContactMe_section from "./Sections/ContactMe_section";
import { Suspense, lazy } from "react";
function Home() {
  const { isDark } = useAppContext();

  return (
    <div
      className={`relative ${
        isDark
          ? " min-h-screen w-full bg-[#060710] bg-[radial-gradient(circle_at_top_right,#0048C3_0%,#042878_0%,#060710_25%)] "
          : "h-fit bg-[#dde1e7]"
      }`}
    >
      <Header />
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      {/* Content */}
      <Hero_Section />
      {/* About me  */}
      <AboutMe_section />
      {/* Skills */}
      <Skills_section />
      {/* Work Experience */}
      <WorkExperience_section />
      {/* Projects Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Projects_section />
      </Suspense>
      {/* Contact me */}
      <ContactMe_section />
      <Footer />
    </div>
  );
}

export default Home;
