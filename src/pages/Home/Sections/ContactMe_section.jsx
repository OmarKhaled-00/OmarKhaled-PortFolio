import { useAppContext } from "../../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../../../constants/icons/icons";
import { Header_Data } from "../../../data/Header_data/Header_data";
function ContactMe_section() {
  const { isDark } = useAppContext();
  return (
    <>
      <section
        aria-label="contact me Section"
        id="contact_me"
        className={`relative z-100 ${isDark ? "bg-gray-950 shadow-[2px_2px_10px_10px_#1634a0]" : "bg-[#d8dce3] shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} flex min-h-[60dvh] flex-col items-center justify-around gap-1 max-xl:justify-between`}
      >
        <div
          className={`mt-2 ${isDark ? "text-(--text-primary)" : "w-fit rounded-md p-2 text-(--text-dark) shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} flex items-center justify-center gap-1 font-extrabold`}
        >
          <h2 className="z-10 flex items-center gap-2 text-6xl capitalize max-md:text-3xl">
            <FontAwesomeIcon icon={ICONS.envlope} />
            contact me
          </h2>
        </div>
        <div
          className={`${isDark ? "*:text-white" : " *:text-dark "} flex flex-col gap-2 *:flex *:items-center *:gap-2`}
        >
          <div>
            <FontAwesomeIcon icon={ICONS.location} />
            <span className="capitalize">cairo, egypt</span>
          </div>
          <div>
            <FontAwesomeIcon icon={ICONS.envlope} />
            <a href="mailto:omarkhled992@gmail.com">omarkhled992@gmail.com</a>
          </div>
          <div>
            <FontAwesomeIcon icon={ICONS.phone} />
            <a href="tel:+201011281789">+201011281789</a>
          </div>
        </div>
        <div
          className={`mb-2 flex items-center justify-center gap-4 p-1 *:cursor-pointer *:text-2xl ${isDark ? "*:text-(--text-primary)" : " rounded-md p-3 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] *:text-(--text-dark)"}`}
        >
          {Header_Data.social_buttons.map((social, index) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              className={`animate__animated animate__zoomInRight transition duration-300 hover:scale-125 ${isDark ? "" : " shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"}`}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
        <p
          className={`max-md:text-center ${isDark ? "text-white" : "text-black"}`}
        >
          Feel free to reach out if you're looking for a developer, or have any
          questions.
        </p>
      </section>
    </>
  );
}

export default ContactMe_section;
