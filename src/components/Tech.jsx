import React, { useEffect, useState } from "react";
import { BallCanvas } from "./Canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) =>
        isMobile ? (
          // ✅ MOBILE: versão 2D com suporte a iconMobile
          <div
            key={technology.name}
            className="w-28 h-28 rounded-full bg-tertiary flex items-center justify-center shadow-card"
            title={technology.name}
          >
            <img
              // 🔥 Aqui está a única mudança necessária
              src={technology.iconMobile ?? technology.icon}
              alt={technology.name}
              className="w-16 h-16 object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          // ✅ DESKTOP: mantém 3D
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        )
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
