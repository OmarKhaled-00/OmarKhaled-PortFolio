import { Blog_data } from "../../../data/Blog_data/Blog_data";
import { useAppContext } from "../../../context/AppContext";
import Header_nav from "../../../components/Header/Header_nav";
import { useState } from "react";
import Footer from "../../../components/Footer/Footer";
function Blog_section() {
  const { isDark } = useAppContext();
  const [activeId, setActiveId] = useState(null);

  return (
    <div className={`${isDark ? "bg-black" : "bg-[#dde1e7]"}`}>
      <Header_nav />
      <section
        aria-label="Blog Section"
        className="flex min-h-screen flex-col gap-2"
      >
        <div
          className={`${
            isDark ? "text-(--text-primary)" : "text-(--text-dark)"
          } flex justify-center p-2 text-5xl capitalize`}
        >
          <h2
            className={`${
              isDark
                ? ""
                : "rounded-xl p-2 shadow-[inset_2px_2px_5px_#BABECC,inset_-5px_-5px_10px_#ffffff73]"
            }`}
          >
            blog
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2 max-xl:grid-cols-2 max-lg:grid-cols-1">
          {Blog_data.map((blog) => (
            <div
              role="button"
              tabIndex={0}
              key={blog.id}
              onClick={() => setActiveId(activeId === blog.id ? null : blog.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setActiveId(activeId === blog.id ? null : blog.id);
                }
              }}
              className={`${
                isDark
                  ? "border border-white"
                  : "shadow-[2px_2px_5px_#BABECC,-5px_-5px_10px_#ffffff73]"
              } group relative m-4 flex h-150 cursor-pointer flex-col overflow-hidden rounded-2xl`}
            >
              {/* Image */}
              <img
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-xl object-cover transition-all duration-300 group-hover:opacity-30"
                src={blog.img_path}
                alt={`${blog.content} certificate`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

              {/* Paragraph */}
              <p
                className={`absolute right-0 left-0 p-4 text-center leading-relaxed transition-all duration-500 ${
                  activeId === blog.id
                    ? "top-40 opacity-100"
                    : "top-full opacity-0"
                } group-hover:top-40 group-hover:opacity-100 ${isDark ? "text-white" : "text-black"} `}
              >
                {blog.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog_section;
