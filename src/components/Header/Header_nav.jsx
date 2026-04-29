import { Header_Data } from "../../data/Header_data/Header_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router";
function Header_nav() {
  const { isDark, setIsDark } = useAppContext();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full items-center justify-between *:m-10">
        <div>
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
      </div>
    </>
  );
}

export default Header_nav;
