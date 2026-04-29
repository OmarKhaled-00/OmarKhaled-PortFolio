import { Header_Data } from "../../data/Header_data/Header_data";
import { useAppContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  const year = new Date().getFullYear();
  const { isDark } = useAppContext();
  return (
    <>
      <footer
        className={`${isDark ? " bg-black" : "bg-[#dde1e7]"} flex h-35 flex-col items-center justify-evenly gap-1 py-2`}
      >
        <p
          className={`${
            isDark
              ? "text-white"
              : " rounded-xl p-2 text-black shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
          }`}
        >
          © {year} Omar Khaled. All rights reserved.
        </p>
        <div
          className={`mb-2 flex items-center justify-center gap-4 p-1 *:cursor-pointer *:text-2xl ${isDark ? "*:text-(--text-primary)" : " m-auto w-fit rounded-md p-3 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] *:text-(--text-dark)"}`}
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
      </footer>
    </>
  );
}

export default Footer;
