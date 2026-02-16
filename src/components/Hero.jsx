import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./Canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      {/* ✅ Canvas atrás e totalmente interativo */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* ✅ CONTEÚDO POR CIMA (não bloqueia o canvas) */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto flex flex-row items-start gap-5 pointer-events-none`}
      >
        {/* LOADING */}
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            className="w-5 h-5 rounded-full border border-accent/50 flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 0 0px rgba(34,211,238,0)",
                "0 0 16px rgba(34,211,238,0.75)",
                "0 0 0px rgba(34,211,238,0)",
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-accent"
              animate={{ scale: [1, 1.25, 1], opacity: [0.65, 1, 0.65] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            />
          </motion.div>

          <div className="relative sm:h-80 h-40 w-[6px] mt-2 rounded-full bg-accent/15 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:100%_10px]" />
            <motion.div
              className="absolute left-0 bottom-0 w-full rounded-full bg-accent"
              style={{ filter: "drop-shadow(0 0 12px rgba(34,211,238,0.65))" }}
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#22D3EE]">Vinicius</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Game Developer & Web Developer.
            <br className="sm:block hidden" /> Creating interactive games and modern web experiences.
          </p>

          {/* ✅ BOTÃO DOWNLOAD (clicável) */}
          <div className="mt-6">
            <motion.a
              href="/vinicius-cv.pdf"
              download="vinicius-cv.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="
                pointer-events-auto
                inline-flex items-center gap-3
                rounded-full border border-white/25
                bg-white/10 px-6 py-3 text-white
                shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                backdrop-blur-md hover:bg-white/15
                w-full sm:w-auto justify-center sm:justify-start
                cursor-pointer select-none
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="opacity-90"
              >
                <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M8 11l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <span className="font-medium tracking-wide">Download CV</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10 pointer-events-auto">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
