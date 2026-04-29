import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WorkExperience_data } from "../../../data/WorkExperience_data/WorkExperinece_data";
import { useAppContext } from "../../../context/AppContext";
function WorkExperience_section() {
  const { isDark } = useAppContext();
  return (
    <>
      <div
        id="experience"
        aria-label="Work Experience Section"
        className={` ${isDark ? "bg-black" : "bg-[#dde1e7]"} relative z-10 mx-auto flex h-fit flex-col items-center gap-10 px-2`}
      >
        <div
          className={` ${isDark ? "text-(--text-primary)" : "w-fit rounded-md p-2 text-(--text-dark) shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} mt-10 flex items-center justify-center gap-5 font-extrabold`}
        >
          <h2 className="z-10 flex items-center gap-2 text-6xl capitalize max-md:text-3xl">
            <FontAwesomeIcon icon={WorkExperience_data.main_title.icon} />
            {WorkExperience_data.main_title.title}
          </h2>
        </div>
        <div
          className={` ${isDark ? "" : "rounded-xl md:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} flex flex-col items-center justify-between gap-6 p-3 *:w-[60dvw] *:max-lg:w-[80dvw] *:max-md:w-[90dvw]`}
        >
          {WorkExperience_data.timeline.map((timeline) => (
            <div
              className={` ${isDark ? "border-2 border-solid border-cyan-500 bg-gray-900 before:border-2 before:border-solid before:border-gray-900 before:bg-(--primary-cyan) after:bg-(--primary-deep-blue) " : "rounded-xl shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] before:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] after:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} relative flex flex-col items-center gap-2 rounded-xl p-4 before:absolute before:-top-3 before:-left-9.5 before:h-3 before:w-3 before:rounded-full before:content-[''] after:absolute after:top-2 after:-left-8.5 after:h-full after:w-1 after:rounded-[10px] after:content-[''] max-md:p-2 max-md:before:-left-5 max-md:after:-left-4`}
              key={timeline.id}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col gap-2 *:capitalize max-md:gap-1">
                  <h3
                    className={` ${isDark ? "text-(--text-primary)" : "text-(--text-dark)"} text-lg font-bold max-lg:text-[14px] max-md:text-[12px]`}
                  >
                    {timeline.career_title}
                  </h3>
                  <span
                    className={` ${isDark ? "text-white/70" : "text-black/70"} text-sm font-bold max-lg:text-[12px] max-md:text-[10px]`}
                  >
                    {timeline.career_company}
                  </span>
                  <span
                    className={` ${isDark ? "text-white/70" : "text-black/70"} text-sm font-bold max-lg:text-[12px] max-md:text-[10px]`}
                  >
                    {timeline.career_place}
                  </span>
                </div>
                <p className="flex items-center font-bold *:text-(--primary-cyan) max-lg:text-[12px] max-md:text-[10px]">
                  <time>{timeline.career_date.start_date}</time> -{" "}
                  <time>{timeline.career_date.end_date}</time>
                </p>
              </div>
              <p
                className={` ${isDark ? "text-white/90" : "text-black/90"} text-sm leading-relaxed max-lg:text-[12px] max-md:text-[10px]`}
              >
                {timeline.career_discribtion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WorkExperience_section;
