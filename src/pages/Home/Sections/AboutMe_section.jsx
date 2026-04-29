import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../../context/AppContext";
import { AboutMe_data } from "../../../data/AboutMe_data/AboutMe_data";
function AboutMe_section() {
  const { isDark, is_Menu_Clicked } = useAppContext();

  return (
    <>
      <section
        aria-label="About Me Section"
        id="about"
        className={`relative z-100 ${is_Menu_Clicked ? "opacity-30" : "opacity-100"} ${isDark ? "bg-gray-950 shadow-[5px_10px_30px_20px_black]" : "bg-[#d8dce3] shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} flex min-h-[70dvh] flex-col items-center justify-around gap-4 max-xl:justify-between`}
      >
        <h2
          className={`m-4 flex items-center gap-2 text-6xl font-extrabold capitalize max-md:text-3xl ${isDark ? "text-(--text-primary) *:text-(--text-primary)" : " rounded-md p-2 text-(--text-dark) shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] *:text-(--text-dark)"} `}
        >
          <FontAwesomeIcon
            className="text-5xl max-md:text-2xl"
            icon={AboutMe_data.text.hero_icon}
          />
          {AboutMe_data.text.hero_text}
        </h2>
        <div
          className={`flex items-center justify-between gap-15 max-xl:flex-col`}
        >
          <img
            loading="lazy"
            src={AboutMe_data.profile.img_path}
            className={`mx-2 h-110 w-110 overflow-hidden rounded-[100%] border-2 border-solid border-(--primary-cyan) object-contain max-xl:h-80 max-xl:w-80`}
            alt="Omar Khaled 's image"
          />

          <div className="flex max-w-[70%] flex-col items-start gap-2 max-md:max-w-[90%]">
            <h3
              className={`text-2xl capitalize max-md:text-xl ${isDark ? "text-(--text-primary) " : "text-(--text-dark)"}`}
            >
              {AboutMe_data.text.hero_subText}
            </h3>
            <div
              className={`mr-2 mb-5 capitalize *:leading-relaxed *:capitalize ${isDark ? "text-(--text-primary)/70" : "rounded-xl p-2 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] *:m-2 *:rounded-xl *:p-2 *:shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} flex flex-col justify-between gap-2 *:text-lg *:max-md:text-[14px]`}
            >
              <p>{AboutMe_data.text.content.fst_part}</p>
              <p>{AboutMe_data.text.content.snd_part}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe_section;
