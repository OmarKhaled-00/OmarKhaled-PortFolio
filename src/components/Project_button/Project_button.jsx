import { useAppContext } from "../../context/AppContext";

function Project_button({ name, href }) {
  const { isDark } = useAppContext();
  return (
    <>
      <a
        className={`cursor-pointer rounded-xl px-4 py-2 font-bold capitalize ${
          isDark
            ? "bg-gray-800 text-(--primary-cyan) disabled:opacity-30"
            : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73] hover:shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73] disabled:opacity-30"
        }`}
        href={href}
        target="_blank"
      >
        {name}
      </a>
    </>
  );
}

export default Project_button;
