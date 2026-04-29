import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Skills_data } from "../../../data/Skills_data/Skills_data";
import { useAppContext } from "../../../context/AppContext";
function Skills_section() {
  const { isDark } = useAppContext();
  return (
    <>
      <div
        id="skills"
        className={` ${isDark ? "bg-black" : "bg-[#dde1e7]"} relative z-10 mx-auto flex min-h-screen flex-col items-center gap-10 px-2`}
      >
        <div
          className={` ${isDark ? "text-(--text-primary)" : "w-fit rounded-md p-2 text-(--text-dark) shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} mt-10 flex items-center justify-center gap-5 font-extrabold`}
        >
          <FontAwesomeIcon
            className="z-10 text-5xl max-md:text-2xl"
            icon={Skills_data.main_title.icon}
          />
          <h2 className="z-10 text-6xl capitalize max-md:text-3xl">
            {Skills_data.main_title.title}
          </h2>
        </div>

        <div
          className={` ${isDark ? "*:border *:border-solid *:border-(--primary-cyan) *:bg-gray-900" : "rounded-xl shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] *:border-solid *:border-(--primary-blue)"} grid cursor-pointer grid-cols-2 gap-4 *:rounded-2xl *:p-4 *:transition-all *:duration-100 *:hover:border-2 max-lg:grid-cols-1`}
        >
          {Skills_data.my_skills.map((category) => (
            <div
              key={category.id}
              className={` ${isDark ? "text-white" : "m-2 shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] "} group flex flex-col gap-8`}
            >
              <h3
                className={`${isDark ? "" : "w-fit rounded-xl p-2 shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} flex items-center gap-2 text-2xl capitalize max-md:text-[12px]`}
              >
                <FontAwesomeIcon
                  className={` ${isDark ? "bg-gray-800" : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} animate__animated animate__infinite rounded-[100%] p-2 text-(--primary-cyan) group-hover:animate-bounce max-md:text-[12px]`}
                  icon={category.icon}
                />
                {category.tag}
              </h3>

              <div
                className={` ${isDark ? "*:bg-gray-800" : "w-fit rounded-xl p-2 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} flex flex-wrap items-center gap-2 *:rounded-2xl *:p-2 *:font-bold *:text-(--primary-blue) *:transition-all *:duration-75 *:ease-in-out`}
              >
                {category.skills.map((skills, i) => (
                  <span
                    key={i}
                    className={`${isDark ? "group-hover:-translate-y-2" : " rounded-xl shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] group-hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} text-[12px] max-md:text-[10px]`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills_section;
