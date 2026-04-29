import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // ✅ loadFull for all features
import { useAppContext } from "../../context/AppContext";
function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { isDark } = useAppContext();
  const color = isDark ? "#ffffff" : "#1634a0";

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // load everything
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
          resize: false,
        },
        modes: {
          push: { quantity: 4 },
          grab: { distance: 200, duration: 0.5 },
        },
      },
      particles: {
        color: { value: color },
        links: {
          color: color,
          distance: 150,
          enable: false,
          opacity: 0.8,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: { default: "out" },
          gravity: { acceleration: 9.81, enable: true, maxSpeed: 1 },
          direction: "top",
        },
        number: { density: { enable: true }, value: 70 },
        opacity: { value: 0.5 },
        shape: { type: "star" }, // You can now use "image", "star", etc.
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    [color],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={options}
    />
  );
}

export default ParticlesBackground;
