import { useState } from "react";
import { useNavigate } from "react-router";
function IntroAnimation() {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);

  if (!showLoader) {
    navigate("/home");
  }

  return (
    <>
      <div
        className={`relative -z-10 flex h-dvh w-dvw items-center justify-center overflow-hidden bg-black`}
      >
        {/* EXPANDING FRAME */}
        <div
          className="startWebAnimation glow-border absolute rounded-tr-xl rounded-bl-xl border border-(--color-border)"
          onAnimationEnd={() => setShowLoader(false)}
        ></div>

        {/* LOADER */}
        {showLoader && (
          <div className="flex items-center justify-center">
            <div className="perspective flex items-center justify-center">
              <div className="loader3d animate__animated relative h-24 w-24">
                <span className="absolute inset-0 rounded-full border-t-2 border-[#0891B2]"></span>
                <span className="absolute inset-2 rounded-full border-r-2 border-cyan-400"></span>
                <span className="absolute inset-4 rounded-full border-b-2 border-[#22D3EE]"></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default IntroAnimation;
