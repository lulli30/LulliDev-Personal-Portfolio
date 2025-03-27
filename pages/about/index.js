import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMongodb,
  SiFirebase,
  SiNestjs,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiSpacy,
  SiNumpy,
  SiPandas,
  SiMysql,
} from "react-icons/si";

const SKILLS = {
  webDev: [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3, name: "CSS3" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiFramer, name: "Framer" },
    { icon: FaWordpress, name: "Wordpress" },
  ],
  backend: [
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiNestjs, name: "Nest.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiMysql, name: "MySQL" },
  ],
  ml: [
    { icon: FaPython, name: "Python" },
    { icon: SiTensorflow, name: "Tensorflow" },
    { icon: SiPytorch, name: "Pytorch" },
    { icon: SiScikitlearn, name: "Scikit-learn" },
    { icon: SiSpacy, name: "Spacy" },
    { icon: SiNumpy, name: "Numpy" },
    { icon: SiPandas, name: "Pandas" },
  ],
  design: [
    { icon: FaFigma, name: "Figma" },
    { icon: SiAdobexd, name: "Adobe XD" },
    { icon: SiAdobephotoshop, name: "Photoshop" },
  ],
};

const EXPERIENCE = [
  { title: "ISEAC 2025 Hackathon - Participant", stage: "Feb 26, 2025" },
];

const CERTIFICATES = [
  {
    title: "DICT Programming for Beginners & Intermediate using Python",
    stage: "Nov 22, 2022",
  },
  {
    title: "JavaScript OOP: Mastering Modern Object-Oriented Programming",
    stage: "Mar 3, 2025",
  },
];

const EDUCATION = [
  {
    title:
      "Bachelor of Science in Computer Science Specializing in Machine Learning",
    stage: "National University - Dasmarinas, Ongoing",
  },
];

const STATS = [
  { label: "Years of Experience", value: 3 },
  { label: "Satisfied Clients", value: 50 },
  { label: "Finished Projects", value: 9 },
  { label: "Certificates", value: 4 },
];

const aboutData = [
  {
    title: "skills",
    info: [
      { title: "Web Development", icons: SKILLS.webDev },
      { title: "Backend Development", icons: SKILLS.backend },
      { title: "Machine Learning", icons: SKILLS.ml },
      { title: "UI/UX Design", icons: SKILLS.design },
    ],
  },
  { title: "experience", info: EXPERIENCE },
  { title: "certificates", info: CERTIFICATES },
  { title: "education", info: EDUCATION },
];

const CounterItem = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center p-4 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 h-full" // Added h-full
  >
    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent mb-1">
      <CountUp start={0} end={value} duration={3} />+
    </div>
    <div className="text-xs sm:text-sm uppercase tracking-wide leading-tight text-gray-400">
      {label}
    </div>
  </motion.div>
);

const IconWithTooltip = ({ icon: Icon, name }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0.8 }}
    whileInView={{ scale: 1, opacity: 1 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
    className="relative group flex flex-col items-center"
  >
    <div className="p-3 bg-gray-800/60 rounded-lg border border-gray-700/40 transition-all duration-300 group-hover:border-teal-500/50 group-hover:bg-gray-800/90">
      <Icon className="text-2xl text-teal-400 lg:text-3xl" />
    </div>
    <motion.span
      initial={{ opacity: 0 }}
      whileHover={{
        opacity: 1,
        transition: { delay: 0.2 },
      }}
      className="absolute top-full mt-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded transition-all duration-300 whitespace-nowrap shadow-lg border border-gray-700/50"
    >
      {name}
    </motion.span>
  </motion.div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Head>
        <title>LulliDev | About</title>
        <meta
          name="description"
          content="LulliDev specializes in AI, Machine Learning, and Software Engineering."
        />
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-b from-gray-950 to-teal-950/30 py-24 md:py-32 text-center xl:text-left relative overflow-hidden"
      >
        <BackgroundElements />

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[320px]"
        >
          <Avatar />
        </motion.div>

        <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-16 px-6 mt-16 md:mt-12 w-full justify-center lg:items-center">
          <LeftSection />
          <RightSection activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </motion.div>
    </>
  );
};

const BackgroundElements = () => (
  <>
    <Circles />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-teal-900/10 to-transparent"
    ></motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-900/10 to-transparent"
    ></motion.div>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="absolute -left-32 top-1/3 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl"
    ></motion.div>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="absolute -right-32 top-2/3 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl"
    ></motion.div>
  </>
);

const LeftSection = () => (
  <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-5 xl:mb-0 px-4 sm:px-0">
    {/* Title Badge - Centered on mobile, left on desktop */}
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      className="inline-block mb-4 px-3 py-1 bg-teal-900/30 border border-teal-700/20 rounded-full text-teal-400 text-sm font-medium mt-10 md:mt-0"
    >
      Software Developer & AI Specialist
    </motion.div>

    {/* Main Heading - Centered on mobile, left on desktop */}
    <motion.h2
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-5 tracking-tight"
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      animate="show"
    >
      Hi, I'm <span className="text-gradient">Andrew</span>
    </motion.h2>

    {/* Description - Centered on mobile, left on desktop */}
    <motion.p
      className="max-w-[540px] text-gray-300 mx-auto md:mx-0 mb-6 text-base md:text-lg leading-relaxed"
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      animate="show"
    >
      I specialize in Web Development, Machine Learning, and Cybersecurity. I
      love coding, creating impactful projects, and continuously expanding my
      knowledge.
    </motion.p>

    {/* Stats Grid - Centered on all screens */}
    <motion.div
      className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 mx-auto"
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      animate="show"
    >
      {STATS.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeIn("up", 0.3 * i)}
          initial="hidden"
          animate="show"
          className="h-full"
        >
          <CounterItem label={item.label} value={item.value} />
        </motion.div>
      ))}
    </motion.div>

    {/* Buttons - Centered on mobile, left on desktop */}
    <motion.div
      variants={fadeIn("right", 0.6)}
      initial="hidden"
      animate="show"
      className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <Link
          href="/contact"
          className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all"
        >
          Contact Me
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <a
          href="/files/Andrew_CV.pdf"
          download="Andrew_CV.pdf"
          className="inline-block w-full sm:w-auto text-center px-6 py-3 border border-teal-600/30 text-teal-400 font-medium rounded-lg hover:bg-teal-600/10 transition-all"
        >
          Download CV
        </a>
      </motion.div>
    </motion.div>
  </div>
);

const RightSection = ({ activeTab, setActiveTab }) => (
  <motion.div
    className="flex flex-col w-full xl:max-w-[46%]"
    variants={fadeIn("left", 0.3)}
    initial="hidden"
    animate="show"
  >
    <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    <TabContent activeTab={activeTab} />
  </motion.div>
);

const TabNavigation = ({ activeTab, setActiveTab }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex justify-center xl:justify-start gap-x-4 xl:gap-x-8 mb-1 relative -mt-1 sm:-mt-0"
  >
    <div className="absolute h-[1px] w-full bottom-0 left-0 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
    {aboutData.map((item, index) => (
      <TabButton
        key={index}
        active={activeTab === index}
        onClick={() => setActiveTab(index)}
        title={item.title}
      />
    ))}
  </motion.div>
);

const TabButton = ({ active, onClick, title }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`cursor-pointer capitalize text-base xl:text-lg pb-3 px-1 relative transition-all duration-300 
      ${
        active
          ? "text-teal-400 font-medium"
          : "text-gray-400 hover:text-gray-200"
      }`}
  >
    {title}
    {active && (
      <motion.div
        layoutId="activetab"
        className="absolute h-[2px] w-full bottom-0 left-0 bg-teal-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </motion.button>
);

const TabContent = ({ activeTab }) => (
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="py-8 px-6 bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/40 h-[450px] overflow-auto lg:h-[600px] lg:py-10 lg:px-10 mb-10"
  >
    {aboutData[activeTab].info.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`mb-8 ${
          index !== 0 ? "pt-6 border-t border-gray-700/40" : ""
        }`}
      >
        <h3 className="text-xl font-semibold text-white mb-3 lg:text-2xl">
          {item.title}
        </h3>
        {item.stage && (
          <motion.div
            className="flex items-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-4 w-4 rounded-full bg-teal-500 mr-2"></div>
            <p className="text-sm text-teal-300 font-medium lg:text-base">
              {item.stage}
            </p>
          </motion.div>
        )}
        {item.icons && (
          <motion.div
            className="flex flex-wrap gap-5 mt-4 lg:gap-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {item.icons.map((iconData, i) => (
              <IconWithTooltip key={i} {...iconData} />
            ))}
          </motion.div>
        )}
      </motion.div>
    ))}
  </motion.div>
);

export default About;
