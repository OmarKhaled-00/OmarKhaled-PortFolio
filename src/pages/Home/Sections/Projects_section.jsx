import { Projects_data } from "../../../data/Projects_data/Projects_data";
import { truncateText } from "../../../utils/truncateText";
import { useAppContext } from "../../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

function Projects_section() {
  const navigate = useNavigate();
  const { isDark } = useAppContext();

  const [currentField, setCurrentField] = useState("web");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [animationClass, setAnimationClass] = useState("animate__fadeInRight");

  useEffect(() => {
    setCurrentIndex(0);
  }, [currentField]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const triggerAnimation = (direction) => {
    setAnimationClass("");

    setTimeout(() => {
      setAnimationClass(
        direction === "next" ? "animate__zoomInRight" : "animate__zoomInLeft",
      );
    }, 10);
  };

  const handleNext = () => {
    if (
      currentIndex + itemsPerView <
      Projects_data.Projects[currentField].length
    ) {
      setCurrentIndex(currentIndex + itemsPerView);
      triggerAnimation("next");
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerView >= 0) {
      setCurrentIndex(currentIndex - itemsPerView);
      triggerAnimation("prev");
    }
  };

  return (
    <div
      id="projects"
      className={` ${isDark ? "bg-black" : "bg-[#dde1e7]"} relative z-10 mx-auto flex min-h-screen flex-col items-center gap-10 px-2 py-2`}
    >
      <div
        className={` ${isDark ? "text-(--text-primary)" : "w-fit rounded-md p-2 text-(--text-dark) shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} mt-10 flex items-center justify-center gap-5 font-extrabold`}
      >
        <h2 className="z-10 flex items-center gap-2 text-6xl capitalize max-md:text-3xl">
          <FontAwesomeIcon icon={Projects_data.main_heading.icon} />
          {Projects_data.main_heading.title}
        </h2>
      </div>

      <div className="flex items-center gap-2 *:cursor-pointer max-md:flex-col">
        <button
          onClick={() => setCurrentField("web")}
          disabled={currentField === "web"}
          className={`rounded-xl px-4 py-2 font-bold ${
            isDark
              ? "bg-gray-800 text-(--primary-cyan) disabled:opacity-30"
              : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] disabled:opacity-30"
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => setCurrentField("embedded")}
          disabled={currentField === "embedded"}
          className={`rounded-xl px-4 py-2 font-bold ${
            isDark
              ? "bg-gray-800 text-(--primary-cyan) disabled:opacity-30"
              : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] disabled:opacity-30"
          }`}
        >
          Embedded systems
        </button>
        <button
          onClick={() => setCurrentField("desktop_systems")}
          disabled={currentField === "desktop_systems"}
          className={`rounded-xl px-4 py-2 font-bold ${
            isDark
              ? "bg-gray-800 text-(--primary-cyan) disabled:opacity-30"
              : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] disabled:opacity-30"
          }`}
        >
          Desktop systems
        </button>
        <button
          onClick={() => setCurrentField("games")}
          disabled={currentField === "games"}
          className={`rounded-xl px-4 py-2 font-bold ${
            isDark
              ? "bg-gray-800 text-(--primary-cyan) disabled:opacity-30"
              : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] disabled:opacity-30"
          }`}
        >
          Games
        </button>
      </div>

      <div
        className={` ${
          isDark
            ? ""
            : "rounded-xl shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
        } animate__animated container m-auto grid justify-items-center max-xl:m-0 ${Projects_data.Projects[currentField].length === 1 ? "grid-cols-1" : Projects_data.Projects[currentField].length === 2 ? "grid-cols-2" : "grid-cols-3"} grid-rows-1 gap-2 overflow-hidden p-2 max-xl:grid-cols-2 max-md:grid-cols-1 ${animationClass} animate__slow`}
      >
        {Projects_data.Projects[currentField]
          .slice(currentIndex, currentIndex + itemsPerView)
          .map((project) => (
            <div
              key={project.id}
              className={` ${
                isDark
                  ? "border border-solid border-gray-700 bg-gray-900 hover:border-2 hover:border-(--primary-cyan) max-md:h-140"
                  : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"
              } relative flex h-130 max-w-110 flex-col justify-between gap-1 overflow-hidden rounded-2xl`}
            >
              <div
                className={`${
                  isDark
                    ? ""
                    : " m-auto flex items-center justify-center rounded-xl p-1 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] max-xl:h-75 max-xl:w-120 max-lg:max-h-60 max-lg:w-100 max-md:w-130 xl:h-62 xl:w-102"
                }`}
              >
                <img
                  className={` ${
                    isDark
                      ? "inset-0 max-h-53 min-w-full max-md:max-h-80 xl:min-h-65"
                      : "rounded-xl shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] max-xl:h-65 max-xl:w-115 max-lg:max-h-55 max-lg:w-98 max-md:w-120 xl:h-60 xl:w-100"
                  } object-cover`}
                  src={project?.images?.[0]?.img_path}
                  alt="project image"
                />
              </div>

              <div className="flex h-48.75 flex-col justify-between gap-5 p-2">
                <h3
                  className={` ${
                    isDark
                      ? "text-(--text-primary)"
                      : "w-fit rounded-xl p-1 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"
                  } text-2xl font-bold capitalize`}
                >
                  {project.name}
                </h3>

                <p
                  className={` ${
                    isDark
                      ? "text-white/80"
                      : "w-fit rounded-xl p-1 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"
                  } text-sm`}
                >
                  {truncateText(project.content, 120)}
                </p>

                <div
                  className={` ${
                    isDark
                      ? ""
                      : "w-fit rounded-xl p-1 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"
                  } flex gap-2`}
                >
                  <FontAwesomeIcon
                    className={`${
                      project.status === "Published"
                        ? "text-(--accent-teal)"
                        : "text-(--accent-gold)"
                    } ${
                      isDark
                        ? ""
                        : "w-fit rounded-xl p-1 shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"
                    } `}
                    icon={project.status_icon}
                  />
                  <span
                    className={`text-sm font-bold ${
                      isDark ? "text-white/80" : "text-(--text-dark)"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div
                className={`flex items-center justify-evenly p-1.5 *:cursor-pointer *:rounded-2xl *:p-1.5 *:font-bold max-md:text-[12px] ${
                  isDark
                    ? " *:bg-gray-800 *:text-(--primary-cyan) *:hover:border *:hover:border-solid *:hover:border-(--primary-cyan)"
                    : "*:w-fit *:text-(--text-dark) *:shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] *:hover:text-(--primary-cyan) *:hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
                }`}
              >
                {project.nav_btns.details ? (
                  <button
                    onClick={() =>
                      navigate(`/projectDetails/${project.id}/${currentField}`)
                    }
                  >
                    Details
                  </button>
                ) : null}

                {project.nav_btns.view_project_url ? (
                  <a
                    role="button"
                    href={project.nav_btns.view_project_url}
                    target="_blank"
                  >
                    View Project
                  </a>
                ) : null}
                {project.nav_btns.view_video ? (
                  <a
                    role="button"
                    href={project.nav_btns.view_video}
                    target="_blank"
                  >
                    View video
                  </a>
                ) : null}

                {project.nav_btns.code_url ? (
                  <a
                    role="button"
                    href={project.nav_btns.code_url}
                    target="_blank"
                  >
                    View Code
                  </a>
                ) : null}
                {project.nav_btns.view_circuit ? (
                  <a
                    role="button"
                    href={project.nav_btns.view_circuit}
                    target="_blank"
                  >
                    View Circuit
                  </a>
                ) : null}
              </div>
            </div>
          ))}
      </div>
      <div className="flex w-[50dvw] justify-between py-10">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`cursor-pointer rounded-xl px-4 py-2 font-bold max-md:w-fit max-md:px-2 max-md:py-1 ${
            isDark
              ? "bg-gray-800 text-(--primary-cyan) disabled:opacity-30"
              : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] disabled:opacity-30"
          }`}
        >
          ← Prev
        </button>
        <button
          onClick={handleNext}
          disabled={
            currentIndex + itemsPerView >=
            Projects_data.Projects[currentField].length
          }
          className={`cursor-pointer rounded-xl px-4 py-2 font-bold max-md:px-2 max-md:py-1 ${
            isDark
              ? "bg-gray-800 text-(--primary-cyan) disabled:opacity-30"
              : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] disabled:opacity-30"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Projects_section;
