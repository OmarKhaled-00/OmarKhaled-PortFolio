import { Hero_section_data } from "../../../data/Hero_section_data/Hero_section_data";
import { useAppContext } from "../../../context/AppContext";
function Hero_Section() {
  const { isDark, is_Menu_Clicked } = useAppContext();

  return (
    <>
      <section
        aria-label="Hero Section"
        className={`relative z-10 m-auto min-h-screen ${is_Menu_Clicked ? "opacity-10" : "opacity-100"} flex w-[60dvw] items-center justify-center overflow-hidden p-1 max-md:h-dvh max-md:w-[90dvw]`}
      >
        <div
          className={`flex flex-col items-center gap-2 ${isDark ? "" : "z-20 rounded-xl bg-[#dde1e7] p-10 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] max-md:p-2"}`}
        >
          <header className="m-2 flex flex-col items-center gap-4">
            <h1
              className={`animate__animated animate__slideInDown text-center text-6xl font-extrabold max-xl:text-center max-xl:text-5xl max-lg:flex max-lg:flex-col max-lg:text-4xl max-md:flex-row max-md:justify-center max-md:gap-2 ${isDark ? "text-(--text-primary) max-md:text-3xl " : "w-full rounded-xl p-1 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] max-md:text-2xl "} capitalize delay-200`}
            >
              {Hero_section_data.title.fst_part}
              <span
                className={`bg-linear-to-r from-(--primary-deep-blue) to-(--primary-blue) bg-clip-text text-transparent`}
              >
                {Hero_section_data.title.snd_part}
              </span>
            </h1>
            <h2
              className={`animate__animated animate__slideInDown text-3xl max-xl:text-center max-xl:text-2xl max-lg:text-xl ${isDark ? "text-(--text-primary)" : "w-full rounded-xl p-1 text-center text-(--text-black) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} capitalize delay-350`}
            >
              {Hero_section_data.career}
            </h2>
            <p
              className={`animate__animated animate__slideInDown text-center text-lg ${isDark ? "text-(--text-primary)/80" : "rounded-xl p-1 text-(--text-black)/80 shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} delay-500`}
            >
              {Hero_section_data.discription.fst_part}
              <span className="bg-linear-to-r from-(--accent-teal) to-(--primary-blue) bg-clip-text font-bold text-transparent">
                {Hero_section_data.discription.coloured_part.fst_part}
              </span>
              {Hero_section_data.discription.snd_part}
              <span className="bg-linear-to-r from-(--accent-teal) to-(--primary-blue) bg-clip-text font-bold text-transparent">
                {Hero_section_data.discription.coloured_part.snd_part}
              </span>
              {Hero_section_data.discription.thr_part}
            </p>
            {isDark ? (
              <div>
                <span
                  className={`floating_rectangle absolute top-[10%] left-[10%] h-25 w-25 rounded-xs border ${isDark ? "border-(--text-primary)" : "border-(--text-black)"} max-xl:h-15 max-xl:w-15 max-md:h-20 max-md:w-20`}
                ></span>
                <span
                  className={`floating_circle absolute top-[70%] right-[10%] h-35 w-35 rounded-[50%] border ${isDark ? "border-(--text-primary)" : "border-(--text-black)"} max-xl:h-31 max-xl:w-31 max-md:h-25 max-md:w-25`}
                ></span>
              </div>
            ) : null}
          </header>
          <footer
            className={`z-10 flex items-center gap-4 ${isDark ? "*:hover:bg-border-cyan-500 *:hover:text-(--text-dark)" : "rounded-xl p-2 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"}`}
          >
            <a
              aria-label="View Projects"
              className={`animate__animated animate__zoomInLeft cursor-pointer px-6 py-3 capitalize max-md:px-3 max-md:py-1.5 ${isDark ? " rounded-md border border-(--primary-gray) bg-(--primary-gray) text-(--text-primary) hover:bg-(--primary-cyan)" : "rounded-xl text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:text-(--primary-cyan) hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"}`}
              href={Hero_section_data.buttons.primary.to}
            >
              {Hero_section_data.buttons.primary.title}
            </a>
            <a
              aria-label="Let's talk"
              className={`animate__animated animate__zoomInRight cursor-pointer rounded-md px-6 py-3 capitalize max-md:px-3 max-md:py-1.5 ${isDark ? "border border-(--primary-deep-blue) bg-(--primary-deep-blue) text-(--text-primary) hover:bg-(--primary-cyan) hover:text-(--text-primary)" : "rounded-xl text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:text-(--primary-cyan) hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"}`}
              href={Hero_section_data.buttons.secondary.to}
            >
              {Hero_section_data.buttons.secondary.title}
            </a>
            <a
              aria-label="Download CV"
              className={`animate__animated animate__zoomInRight cursor-pointer px-6 py-3 capitalize max-md:px-3 max-md:py-1.5 ${isDark ? " rounded-md border border-(--primary-gray) bg-(--primary-gray) text-(--text-primary) hover:bg-(--primary-cyan)" : "rounded-xl text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:text-(--primary-cyan) hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"}`}
              target="_blank"
              href={Hero_section_data.buttons.tertiary.to}
            >
              {Hero_section_data.buttons.tertiary.title}
            </a>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Hero_Section;
