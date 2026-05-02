import { Certifications_data } from "../../../data/Certifications_data/Certifications_data";
import { useAppContext } from "../../../context/AppContext";
import Header_nav from "../../../components/Header/Header_nav";
import Footer from "../../../components/Footer/Footer";
import { keyframes } from "styled-components";
function Certifications_section() {
  const { isDark } = useAppContext();

  return (
    <>
      <div className={`${isDark ? "bg-black " : "bg-[#dde1e7] "}`}>
        <Header_nav />
        <section
          aria-label="Certfifications Section"
          className="flex min-h-screen flex-col justify-between gap-2"
        >
          <div
            className={`${isDark ? "text-(--text-primary)" : "text-(--text-dark)"} flex w-full justify-center p-2 text-5xl capitalize`}
          >
            <h2
              className={`${isDark ? "" : "rounded-xl p-2 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"}`}
            >
              certifications
            </h2>
          </div>
          <div className="mx-2 grid grid-cols-3 gap-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
            {Certifications_data.map((c) => (
              <div
                key={c.id}
                className={`${isDark ? "h-180 border border-solid border-white" : "h-200 shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} flex flex-col justify-around overflow-hidden rounded-2xl *:capitalize`}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="h-90 w-full"
                  src={c.img_path}
                  alt={`${c.heading} certificate`}
                />
                <div
                  className={`${isDark ? "max-h-80" : "h-80"} flex flex-col gap-6`}
                >
                  <div
                    className={`${isDark ? "h-20" : "flex h-30 flex-col justify-between gap-4"} `}
                  >
                    <h5
                      className={`${isDark ? "text-(--text-primary)" : " mx-2 w-fit rounded-md text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} p-2 text-xl font-bold`}
                    >
                      {c.heading}
                    </h5>
                    <span
                      className={`${isDark ? "text-white/80" : "mx-2 w-fit rounded-md text-black/80 shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} p-2 text-[12px] font-bold`}
                    >
                      {c.date}-{c.place}
                    </span>
                  </div>
                  <p
                    className={`${isDark ? "text-(--text-primary)" : "mx-2 rounded-md text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"} h-fit p-2 text-[12px] leading-relaxed font-bold`}
                  >
                    {c.content}
                  </p>
                </div>

                <a
                  href={c.img_url}
                  target="_blank"
                  className="my-5 flex w-full justify-center"
                >
                  <button
                    className={`${isDark ? "bg-blue-600 text-white" : "text-black shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} w-[70%] cursor-pointer rounded-2xl p-2 hover:font-extrabold max-md:p-1.5`}
                  >
                    view certificate
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
export default Certifications_section;
