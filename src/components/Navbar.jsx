import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const NAV_Y = 110;
const NAV_HEIGHT = 72;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [toggle, setToggle] = useState(false);

  const clickScrollingRef = useRef(false);
  const clickScrollTimeoutRef = useRef(null);

  const links = useMemo(() => {
    const base = navLinks.map((l) => ({
      id: l.id,
      label: l.title,
    }));

    return [
      { id: "home", label: "Home" },
      ...base.map((x) => ({
        id: x.id === "work" ? "work" : x.id,
        label:
          x.id === "about"
            ? "About"
            : x.id === "work"
            ? "Projects"
            : x.id === "contact"
            ? "Contact"
            : x.label,
      })),
    ];
  }, [navLinks]);

  useEffect(() => {
    const onScroll = () => {
      if (clickScrollingRef.current) return;

      const current = links.find((l) => {
        if (l.id === "home") return false;
        const el = document.getElementById(l.id);
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        return rect.top <= NAV_Y && rect.bottom >= NAV_Y;
      });

      if (current) setActiveSection(current.id);
      else if (window.scrollY < 50) setActiveSection("home");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  const smoothScrollTo = (id) => {
    clickScrollingRef.current = true;
    if (clickScrollTimeoutRef.current) clearTimeout(clickScrollTimeoutRef.current);

    setActiveSection(id);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "#");
    } else {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
        window.history.replaceState(null, "", `#${id}`);
      }
    }

    clickScrollTimeoutRef.current = setTimeout(() => {
      clickScrollingRef.current = false;
    }, 850);
  };

  useEffect(() => {
    return () => {
      if (clickScrollTimeoutRef.current) {
        clearTimeout(clickScrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "unset";
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 left-0 right-0 z-20 py-4 bg-transparent`}
      style={{ height: NAV_HEIGHT }}
    >
      {/* ✅ LOGO (DESKTOP) - dentro da navbar */}
    <div className="hidden sm:block absolute left-5 top-1/2 -translate-y-1/2 z-50">
        <a
            href="#"
            onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("home");
            }}
            className="flex items-center"
            aria-label="Go to top"
        >
            <div className="rounded-full p-3 
           bg-black/20 backdrop-blur-md 
           border border-white/10 
           shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
           hover:bg-white/10 hover:scale-105
           transition-all duration-200 ease-out">
            <img
                src={logo}
                alt="logo"
                className="w-6 h-6 object-contain"
            />
            </div>
        </a>
    </div>

      {/* ✅ LOGO (MOBILE) - com glass effect igual ao botão */}
      <div className="sm:hidden fixed top-5 left-5 z-50">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("home");
          }}
          className="flex items-center"
          aria-label="Go to top"
        >
          <div className="rounded-full p-3 bg-black/20 backdrop-blur-md border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-white/10 transition-all duration-200">
            <img src={logo} alt="logo" className="w-6 h-6 object-contain" />
          </div>
        </a>
      </div>

      <div className="relative w-full flex justify-center items-center">
        {/* DESKTOP PILL */}
        <motion.div
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="hidden sm:block"
        >
          <div className="rounded-full px-2.5 py-2.5 flex items-center gap-1
                          border border-white/10 bg-black/20 backdrop-blur-md
                          shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => smoothScrollTo(link.id)}
                  className={`relative px-5 py-3 text-[15px] font-medium rounded-full transition-colors
                    ${isActive ? "text-white" : "text-secondary hover:text-white"}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-full bg-white/10 will-change-transform transform-gpu"
                      style={{
                        outline: "1px solid rgba(255,255,255,0.001)",
                        backfaceVisibility: "hidden",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* MOBILE BUTTON */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.button
            onClick={() => setToggle(!toggle)}
            className="fixed top-5 right-5 z-50
                       rounded-full p-3 
                       bg-black/20 backdrop-blur-md border border-white/10
                       hover:bg-white/10 transition-all duration-200
                       shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: toggle ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={toggle ? "close" : "menu"}
                src={toggle ? close : menu}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.12 }}
                className="w-6 h-6 object-contain"
              />
            </AnimatePresence>
          </motion.button>
        </div>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 sm:hidden"
              onClick={() => setToggle(false)}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="absolute top-24 left-4 right-4
                           bg-black/20 backdrop-blur-md
                           border border-white/10
                           rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 flex flex-col gap-4">
                  {links.map((link, index) => (
                    <motion.button
                      key={link.id}
                      onClick={() => {
                        setToggle(false);
                        smoothScrollTo(link.id);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`text-lg font-medium py-3 px-4 rounded-xl transition-all
                        ${
                          activeSection === link.id
                            ? "bg-white/10 text-white"
                            : "text-secondary hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
