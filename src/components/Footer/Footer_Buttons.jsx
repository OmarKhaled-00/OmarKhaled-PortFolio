import { HashLink } from "react-router-hash-link";
import { Header_Data } from "../../data/Header_data/Header_data";
import { useAppContext } from "../../context/AppContext";
function Footer_Buttons() {
  const { isDark } = useAppContext();
  return (
    <>
      <div>
        <nav
          className={` ${isDark ? "p-1.5" : "rounded-xl p-3 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"} absolute bottom-0 flex items-center justify-between gap-7 transition-all duration-150 *:hover:text-(--primary-cyan)`}
        >
          {Header_Data.nav_buttons.map((link, index) => (
            <HashLink
              key={link.id}
              smooth
              to={link.to}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
              className={`animate_Header_Underline animate__animated animate__zoomIn relative font-medium ${isDark ? "text-(--text-primary)" : "rounded-md p-2 text-(--text-dark) shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] "} capitalize`}
            >
              {link.name}
            </HashLink>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Footer_Buttons;
