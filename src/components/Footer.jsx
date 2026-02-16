import React from "react";
import { githubwhite, iconeLinkedin, emailIcon } from "../assets";
import logo from "../assets/logo.svg"; 
// ⚠️ Ajuste o caminho do seu logo caso esteja em outro lugar, ex:
// import logo from "../assets/logo.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // scroll suave para seção
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20">
      {/* fundo igual ao hero */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {/* overlay escuro pra dar leitura */}
        <div className="bg-black/60">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
              {/* Coluna esquerda (logo + texto + botão topo) */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={scrollToTop}
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition"
                    aria-label="Voltar ao topo"
                    title="Voltar ao topo"
                  >
                    ↑
                  </button>

                  <img
                    src={logo}
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <p className="text-secondary text-sm max-w-xs leading-relaxed">
                  Unity Game Developer & Front-End Engineer crafting scalable and interactive systems.
                </p>
              </div>

              {/* Coluna do meio (Quick Links) */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-semibold text-base">
                  Navigation
                </h4>

                <ul className="flex flex-col gap-2 text-sm text-secondary">
                  <li>
                    <button
                      onClick={scrollToTop}
                      className="hover:text-white transition"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="hover:text-white transition"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("work")}
                      className="hover:text-white transition"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="hover:text-white transition"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Coluna direita (Social Links) */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-semibold text-base">
                  Let’s Connect
                </h4>

                   <div className="flex items-center gap-3">
                      <a
                        href="https://github.com/vinidealmeida2006"
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition"
                        aria-label="GitHub"
                        title="GitHub"
                      >
                        <img src={githubwhite} alt="githubwhite" className="w-7 h-7 object-contain" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/vinicius-filipe-de-almeida-santos/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                      >
                        <img src={iconeLinkedin} alt="LinkedIn" className="w-7 h-7 object-contain" />
                      </a>

                      <a
                        href="mailto: vinidealmeida2006@gmail.com"
                        className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition"
                        aria-label="Email"
                        title="Email"
                      >
                        <img src={emailIcon} alt="Email" className="w-7 h-7 object-contain" />
                      </a>
                    </div>
              </div>
            </div>

            {/* Linha divisória */}
            <div className="mt-10 h-px w-full bg-white/15" />

            {/* Copyright */}
            <p className="text-center text-sm text-secondary mt-6">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
