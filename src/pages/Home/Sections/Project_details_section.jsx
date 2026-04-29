import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../../../constants/icons/icons";
import { Projects_data } from "../../../data/Projects_data/Projects_data";
import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router";
import { useState } from "react";
import Header from "../../../components/Header/Header";
import Project_button from "../../../components/Project_button/Project_button";
function Project_details_section() {
  const navigate = useNavigate();
  const { isDark } = useAppContext();
  const { field, id } = useParams();
  const project = Projects_data.Projects[field]?.[id - 1];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="flex flex-col">
        <Header />
        <div
          className={` ${isDark ? "bg-black" : "bg-[#dde1e7]"} z-10 mx-auto flex min-h-screen flex-col justify-between gap-10 px-2`}
        >
          <div className="mt-20 flex h-fit w-full justify-items-start">
            <button
              onClick={() => navigate(-1)}
              className={`cursor-pointer rounded-xl px-4 py-2 font-bold capitalize ${
                isDark
                  ? "bg-gray-800 text-(--primary-cyan) disabled:opacity-30"
                  : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] disabled:opacity-30 "
              }`}
            >
              ← back
            </button>
          </div>
          <div className="flex w-full items-center justify-between gap-4 px-2 max-md:flex-col">
            <h3
              className={`font-bold ${isDark ? "text-(--text-primary)" : "rounded-xl p-2 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} text-3xl max-xl:text-2xl`}
            >
              {project.name}
            </h3>
            <div className="flex items-center gap-2 *:capitalize">
              {project.nav_btns.view_project_url ? (
                <Project_button
                  name={"view demo"}
                  href={project.nav_btns.view_project_url}
                />
              ) : null}
              {project.nav_btns.code_url ? (
                <Project_button
                  name={"view source"}
                  href={project.nav_btns.code_url}
                />
              ) : null}
              {project.nav_btns.view_video ? (
                <Project_button
                  name={"view video"}
                  href={project.nav_btns.view_video}
                />
              ) : null}
              {project.nav_btns.view_circuit ? (
                <Project_button
                  name={"view circuit"}
                  href={project.nav_btns.view_circuit}
                />
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            <div className="relative">
              <img
                src={project.images[currentIndex].img_path}
                alt="project image"
                className="h-full w-full rounded-xl border border-(--primary-cyan)"
              />
              <button
                disabled={currentIndex === project.images.length - 1}
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                className="disabled:opacity-30"
              >
                <FontAwesomeIcon
                  className="absolute top-[45%] right-5 cursor-pointer rounded-full border border-dashed border-(--primary-cyan) p-1.5 text-lg text-white max-xl:text-sm"
                  icon={ICONS.rightArrow}
                />
              </button>
              <button
                className="disabled:opacity-30"
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => prev - 1)}
              >
                <FontAwesomeIcon
                  className="absolute top-[45%] left-5 cursor-pointer rounded-full border border-dashed border-(--primary-cyan) p-1.5 text-lg text-white max-xl:text-sm"
                  icon={ICONS.leftArrow}
                />
              </button>
            </div>

            <div className="flex flex-col gap-4 max-lg:items-center">
              <h4
                className={` ${isDark ? "text-(--text-primary)" : "rounded-md p-2 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} ) w-fit text-2xl font-bold capitalize max-lg:text-xl`}
              >
                project overview
              </h4>
              <p
                className={`text-lg leading-relaxed max-xl:text-sm max-lg:text-center ${isDark ? "text-(--text-primary)" : "rounded-md p-2 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"}`}
              >
                {project.content}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full items-start">
              <div className="scrollbar-custom my-3 flex max-w-180 gap-4 overflow-x-scroll border-b border-gray-600 p-4 max-lg:max-w-240">
                {project?.images?.map((img, index) => (
                  <img
                    loading="lazy"
                    decoding="async"
                    onClick={() => setCurrentIndex(index)}
                    src={img.img_path}
                    className={`h-30 w-70 cursor-pointer rounded-xl border border-(--primary-cyan) transition-all duration-300 hover:scale-105 hover:opacity-100 ${
                      currentIndex === index
                        ? "scale-105 opacity-100"
                        : "opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="my-10 flex w-fit flex-col gap-6 max-md:w-full">
              <h5
                className={` ${isDark ? "text-(--text-primary)" : "w-fit rounded-md p-2 font-bold text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} text-xl capitalize max-lg:text-center`}
              >
                technologies used
              </h5>
              <div
                className={` ${isDark ? "" : "shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} flex max-w-180 flex-wrap gap-2 rounded-xl p-2`}
              >
                {project.tech_used.map((tech, index) => (
                  <span
                    className={` ${isDark ? "border border-(--primary-cyan) bg-(--text-dark) text-(--text-primary) hover:border-2" : "font-bold text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} rounded-xl p-2 capitalize`}
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project_details_section;
