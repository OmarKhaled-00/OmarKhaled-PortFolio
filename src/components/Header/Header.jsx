import { Header_Data } from "../../data/Header_data/Header_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import { useAppContext } from "../../context/AppContext";
import { typeWriter } from "../../utils/typeWriter";
import { ICONS } from "../../constants/Icons/icons";

function Header() {
  const text = typeWriter(Header_Data.wisdoms, 30, 1500);
  const { isDark, setIsDark, is_Menu_Clicked, set_Is_Menu_Clicked } =
    useAppContext();

  return (
    <header
      className={`animate__animated animate__fadeInDown fixed top-0 left-0 z-9999 flex w-full items-center justify-between gap-2 backdrop-blur-2xl delay-200`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between gap-5 px-10 py-2 max-xl:px-8">
        <a className="animate__animated animate__zoomIn delay-100" href="/home">
          <img
            src={`${isDark ? Header_Data.logo_img_path.dark_mode : Header_Data.logo_img_path.light_mode}`}
            alt="logo_Image"
            className="h-12 w-12 max-md:h-9 max-md:w-9"
          />
        </a>
        {/* Navigation */}
        <nav
          className={` ${isDark ? "p-1.5" : "rounded-xl p-3 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] max-xl:p-1.5 "} relative flex items-center justify-between gap-7 transition-all duration-150 *:hover:text-(--primary-mid-blue) max-lg:hidden`}
        >
          {Header_Data.nav_buttons.map((link, index) => (
            <HashLink
              key={link.id}
              smooth
              to={link.to}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              className={`animate_Header_Underline animate__animated animate__zoomIn relative font-medium max-xl:text-[12px] ${isDark ? "text-(--text-primary)" : "rounded-md p-2 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] max-xl:p-1 "} capitalize`}
            >
              {link.name}
            </HashLink>
          ))}
        </nav>
      </div>
      <div>
        <p
          className={`bg-linear-to-r ${isDark ? "from-(--accent-teal) to-(--primary-blue)" : "rounded-xl from-(--text-dark) to-(--primary-gray) p-1 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} bg-clip-text font-bold text-transparent max-xl:text-[12px] max-lg:text-[20px] max-md:text-[12px] max-sm:text-[10px]`}
        >
          {text}
        </p>
      </div>

      {/* Hire Me Button */}
      <div
        className={`mr-2 flex h-fit w-fit items-center gap-7 p-2 max-md:p-1 max-sm:gap-2 ${isDark ? "" : " rounded-xl shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"}`}
      >
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
          className="animate__animated animate__fadeInRight cursor-pointer transition-all duration-150 hover:rotate-z-180"
        >
          {isDark ? (
            <FontAwesomeIcon
              className="text-2xl text-(--accent-gold) max-md:text-xl"
              icon={Header_Data.brightness_mode.light_mode.light_icon}
            />
          ) : (
            <FontAwesomeIcon
              className="rounded-xl p-1 text-2xl text-(--primary-cyan) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] max-md:text-xl"
              icon={Header_Data.brightness_mode.dark_mode.dark_icon}
            />
          )}
        </button>

        <button
          onClick={() => set_Is_Menu_Clicked(!is_Menu_Clicked)}
          className={`group flex cursor-pointer flex-col items-end gap-2 max-md:gap-1.5 lg:hidden ${isDark ? "*:bg-(--text-primary)" : "rounded-md p-2 shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] *:bg-(--text-dark) hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} `}
        >
          <span className="h-0.5 w-15 max-md:w-12 max-sm:w-10"></span>
          <span className="h-0.5 w-9 transition-all delay-75 group-hover:w-12 max-md:w-6 max-sm:w-4 max-sm:group-hover:w-10"></span>
          <span className="h-0.5 w-15 max-md:w-12 max-sm:w-10"></span>
        </button>
      </div>
      {/* Navigation menu */}
      {is_Menu_Clicked ? (
        <div
          className={`${isDark ? "bg-(--bg-deep)" : "bg-[#dde1e7]"} absolute top-0 left-0 flex h-max w-full flex-col gap-2`}
        >
          <div className="m-8 flex justify-between">
            <a
              className="animate__animated animate__zoomIn delay-100"
              href="/home"
            >
              <img
                src={`${isDark ? Header_Data.logo_img_path.dark_mode : Header_Data.logo_img_path.light_mode}`}
                alt="logo_Image"
                className="h-12 w-12"
              />
            </a>
            <button onClick={() => set_Is_Menu_Clicked(!is_Menu_Clicked)}>
              <FontAwesomeIcon
                className={`${isDark ? "text-white" : "text-black"} text-2xl`}
                icon={ICONS.close}
              />
            </button>
          </div>
          <div>
            <nav className="flex flex-col items-center gap-3 rounded-2xl p-2 *:w-fit *:p-3">
              {Header_Data.nav_buttons.map((link, index) => (
                <HashLink
                  key={link.id}
                  smooth
                  to={link.to}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                  className={`animate_Header_Underline animate__animated animate__zoomIn relative text-xl font-bold ${isDark ? "text-(--text-primary)" : "rounded-md p-2 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] "} capitalize`}
                >
                  {link.name}
                </HashLink>
              ))}
            </nav>
          </div>
          <div
            className={`mb-10 flex items-center justify-center gap-4 p-2 *:cursor-pointer *:text-2xl ${isDark ? "*:text-(--text-primary)" : " m-auto w-fit rounded-md p-3 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] *:text-(--text-dark)"}`}
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
        </div>
      ) : null}
    </header>
  );
}

export default Header;
