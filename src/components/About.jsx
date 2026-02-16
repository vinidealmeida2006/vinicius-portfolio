import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { githubwhite, iconeLinkedin } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const LinkCard = ({ index, title, subtitle, icon, href }) => {
  return (
    <Tilt className="w-full md:max-w-[520px]">
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card block"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-8 px-10 min-h-[120px] flex items-center gap-5"
        >
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
            <img src={icon} alt={title} className="w-6 h-6 object-contain" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-white text-[18px] font-bold">{title}</h3>
            <p className="text-secondary text-[14px] mt-1">{subtitle}</p>
          </div>
        </div>
      </motion.a>
    </Tilt>
  );
};

const About = () => {
  const socialLinks = [
    {
      title: "GitHub",
      subtitle: "Gameplay systems, tools and projects",
      icon: githubwhite,
      href: "https://github.com/vinidealmeida2006",
    },
    {
      title: "LinkedIn",
      subtitle: "Professional updates and career journey",
      icon: iconeLinkedin,
      href: "https://www.linkedin.com/in/vinicius-filipe-de-almeida-santos/",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a Game Developer and Front-End Developer with a strong focus on
        interactive experiences and modern web technologies. With a background
        in Game Development and ongoing studies in Systems Analysis and
        Development, I combine creativity and technical skills to build
        engaging, responsive, and well-structured digital solutions.
      </motion.p>

      {/* ✅ Cards de GitHub / LinkedIn (full width no mobile, 2 colunas no desktop) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialLinks.map((item, index) => (
          <LinkCard key={item.title} index={index} {...item} />
        ))}
      </div>

      {/* ✅ Seus services continuam aqui */}
      <div className="mt-14 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
